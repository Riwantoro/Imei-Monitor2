const STORAGE_KEY = "kolase.imei-monitor.v2";
const DEFAULT_PIN = "123456";
const STAFF_DATA_VERSION = 2;
const INITIAL_STAFF = Array.isArray(window.__INITIAL_STAFF__) ? window.__INITIAL_STAFF__ : [];

const seedState = {
  config: {
    adminPinHash: null,
    version: 2,
    staffDataVersion: STAFF_DATA_VERSION,
    insideLapasImeis: [],
    updatedAt: new Date().toISOString(),
  },
  staff: INITIAL_STAFF,
  seizedRecords: [],
};

const state = {
  data: null,
  isAdmin: false,
  query: "",
  filter: "all",
  seizedQuery: "",
  seizedFilter: "active",
  autoToggleTimer: null,
  lastAutoToggleKey: "",
};

const el = {};

document.addEventListener("DOMContentLoaded", async () => {
  cacheElements();
  state.data = await loadState();
  bindEvents();
  renderAll();
});

function cacheElements() {
  el.stats = document.getElementById("stats");
  el.insideShell = document.getElementById("inside-shell");
  el.staffResults = document.getElementById("staff-results");
  el.searchInput = document.getElementById("search-input");
  el.searchFilter = document.getElementById("search-filter");
  el.datasetBadge = document.getElementById("dataset-badge");
  el.seizedBadge = document.getElementById("seized-badge");
  el.seizedForm = document.getElementById("seized-form");
  el.seizedRecords = document.getElementById("seized-records");
  el.seizedReset = document.getElementById("seized-reset");
  el.seizedSearchShell = document.getElementById("seized-search-shell");
  el.seizedSearchInput = document.getElementById("seized-search-input");
  el.seizedSearchFilter = document.getElementById("seized-search-filter");
  el.adminShell = document.getElementById("admin-shell");
  el.adminStatus = document.getElementById("admin-status");
  el.adminToggle = document.getElementById("admin-toggle");
  el.exportBtn = document.getElementById("export-btn");
  el.importInput = document.getElementById("import-input");
  el.staffForm = document.getElementById("staff-form");
  el.staffName = document.getElementById("staff-name");
  el.staffPosition = document.getElementById("staff-position");
  el.staffNote = document.getElementById("staff-note");
  el.deviceForm = document.getElementById("device-form");
  el.deviceStaff = document.getElementById("device-staff");
  el.deviceLabel = document.getElementById("device-label");
  el.deviceImei = document.getElementById("device-imei");
  el.deviceBrand = document.getElementById("device-brand");
  el.deviceSlot = document.getElementById("device-slot");
  el.deviceNote = document.getElementById("device-note");
  el.pinForm = document.getElementById("pin-form");
  el.currentPin = document.getElementById("current-pin");
  el.nextPin = document.getElementById("next-pin");
  el.pinOverlay = document.getElementById("pin-overlay");
  el.pinInput = document.getElementById("pin-input");
  el.pinSubmit = document.getElementById("pin-submit");
  el.pinCancel = document.getElementById("pin-cancel");
}

function bindEvents() {
  el.searchInput.addEventListener("input", (event) => {
    state.query = normalizeText(event.target.value);
    scheduleAutoToggleFromSearch(event.target.value);
    renderStaff();
  });

  el.searchFilter.addEventListener("change", (event) => {
    state.filter = event.target.value;
    renderStaff();
  });

  el.seizedForm.addEventListener("submit", handleSeizedSubmit);
  el.seizedReset.addEventListener("click", () => el.seizedForm.reset());
  el.seizedSearchInput.addEventListener("input", (event) => {
    state.seizedQuery = normalizeText(event.target.value);
    renderSeized();
  });
  el.seizedSearchFilter.addEventListener("change", (event) => {
    state.seizedFilter = event.target.value;
    renderSeized();
  });

  el.adminToggle.addEventListener("click", () => {
    if (state.isAdmin) {
      state.isAdmin = false;
      renderAdmin();
      return;
    }
    openPinModal();
  });

  el.pinSubmit.addEventListener("click", handleAdminLogin);
  el.pinCancel.addEventListener("click", closePinModal);
  el.pinOverlay.addEventListener("click", (event) => {
    if (event.target === el.pinOverlay) {
      closePinModal();
    }
  });
  el.pinInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleAdminLogin();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePinModal();
    }
  });

  el.exportBtn.addEventListener("click", exportData);
  el.importInput.addEventListener("change", importData);

  el.staffForm.addEventListener("submit", handleStaffSubmit);
  el.deviceForm.addEventListener("submit", handleDeviceSubmit);
  el.pinForm.addEventListener("submit", handlePinChange);

  el.staffResults.addEventListener("click", handleStaffActions);
  el.seizedRecords.addEventListener("click", handleSeizedActions);
}

async function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const initial = structuredClone(seedState);
    initial.config.adminPinHash = await hashText(DEFAULT_PIN);
    persist(initial);
    return initial;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed.config?.adminPinHash) {
      parsed.config = parsed.config || {};
      parsed.config.adminPinHash = await hashText(DEFAULT_PIN);
    }
    parsed.config.staffDataVersion = Number(parsed.config.staffDataVersion || 0);
    parsed.config.insideLapasImeis = Array.isArray(parsed.config.insideLapasImeis)
      ? parsed.config.insideLapasImeis
      : Array.isArray(parsed.config.insideLapaselectedImeis)
      ? parsed.config.insideLapaselectedImeis
      : [];
    parsed.staff = Array.isArray(parsed.staff) ? parsed.staff : [];
    parsed.seizedRecords = Array.isArray(parsed.seizedRecords) ? parsed.seizedRecords : [];
    migrateStaffDataset(parsed);
    persist(parsed);
    return parsed;
  } catch {
    const fallback = structuredClone(seedState);
    fallback.config.adminPinHash = await hashText(DEFAULT_PIN);
    persist(fallback);
    return fallback;
  }
}

function migrateStaffDataset(data) {
  if (!INITIAL_STAFF.length) {
    return;
  }

  const currentVersion = Number(data.config?.staffDataVersion || 0);
  const looksLikeOldSeed =
    data.staff.length <= 2 &&
    data.staff.every((staff) => ["Azwar Riwantoro", "I Nyoman Nata Suryawan"].includes(String(staff.name || "").trim()));

  if (currentVersion >= STAFF_DATA_VERSION && !looksLikeOldSeed) {
    return;
  }

  if (!data.staff.length || looksLikeOldSeed || currentVersion < STAFF_DATA_VERSION) {
    data.staff = structuredClone(INITIAL_STAFF);
    data.config.staffDataVersion = STAFF_DATA_VERSION;
  }
}

function persist(data = state.data) {
  data.config.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

async function hashText(value) {
  const source = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", source);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .trim();
}

function normalizeImei(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getActiveSeizedMap() {
  const map = new Map();
  for (const record of state.data.seizedRecords) {
    if (record.status !== "active") {
      continue;
    }

    [record.imei1, record.imei2].forEach((imei) => {
      const normalized = normalizeImei(imei);
      if (normalized) {
        map.set(normalized, record);
      }
    });
  }
  return map;
}

function computeStats() {
  const totalStaff = state.data.staff.length;
  const totalDevices = state.data.staff.reduce((sum, staff) => sum + (staff.devices?.length || 0), 0);
  const activeSeized = state.data.seizedRecords.filter((record) => record.status === "active").length;
  const insideCount = getInsideImeiSet().size;

  return [
    { label: "Petugas", value: totalStaff, icon: "👤" },
    { label: "IMEI staf", value: totalDevices, icon: "📱" },
    { label: "HP di dalam lapas", value: insideCount, icon: "📲" },
    { label: "Sitaan aktif", value: activeSeized, icon: "🔒" },
  ];
}

function renderAll() {
  renderStats();
  renderInsideOwners();
  renderStaff();
  renderSeized();
  renderAdmin();
  renderStaffSelect();
}

function renderStats() {
  const stats = computeStats();
  el.stats.innerHTML = stats
    .map(
      (item) => `
        <div class="stat">
          <small><span class="mini-icon">${escapeHtml(item.icon || "•")}</span>${escapeHtml(item.label)}</small>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderInsideOwners() {
  const insideItems = getInsideOwnerEntries();
  if (!insideItems.length) {
    el.insideShell.innerHTML = `<div class="empty">Belum ada HP yang ditandai berada di dalam lapas.</div>`;
    return;
  }

  el.insideShell.innerHTML = insideItems
    .map(
      (item) => `
        <article class="inside-card">
          <small><span class="mini-icon">📱</span>${escapeHtml(item.label)}</small>
          <strong>👤 ${escapeHtml(item.ownerName)}</strong>
          <div class="meta">${escapeHtml(item.position || "-")}</div>
          <div class="device-code"># ${escapeHtml(item.imei)}</div>
          <div class="meta">🏷 ${escapeHtml(item.brand || "-")}</div>
        </article>
      `
    )
    .join("");
}

function renderStaff() {
  const query = state.query;
  if (!query) {
    el.staffResults.innerHTML = `<div class="empty">Mulai ketik nama, jabatan, atau IMEI untuk menampilkan hasil.</div>`;
    el.datasetBadge.textContent = `${state.data.staff.length} staf tersimpan`;
    return;
  }
  const activeSeizedMap = getActiveSeizedMap();
  const insideImeiSet = getInsideImeiSet();
  const rows = state.data.staff
    .map((staff) => {
      const devices = Array.isArray(staff.devices) ? staff.devices : [];
      const matchedDevices = devices.filter((device) => {
        const stacked = [
          staff.name,
          staff.position,
          staff.note,
          device.label,
          device.brand,
          device.note,
          device.imei,
        ]
          .join(" ")
          .toLowerCase();
        return !query || stacked.includes(query);
      });

      const matchesStaff =
        !query ||
        [staff.name, staff.position, staff.note]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const renderDevices = matchesStaff ? devices : matchedDevices;
      if (!renderDevices.length) {
        return null;
      }

      const hasBlocked = renderDevices.some((device) => activeSeizedMap.has(normalizeImei(device.imei)));
      if (state.filter === "safe" && hasBlocked) {
        return null;
      }
      if (state.filter === "blocked" && !hasBlocked) {
        return null;
      }

      return `
        <article class="card">
          <div class="card-top">
            <div>
              <h3>${escapeHtml(staff.name)}</h3>
              <p class="meta">${escapeHtml(staff.position || "-")}</p>
            </div>
            <span class="badge ${hasBlocked ? "danger" : "ok"}">${hasBlocked ? "Perlu audit" : "Aman"}</span>
          </div>
          ${staff.note ? `<p class="meta">${escapeHtml(staff.note)}</p>` : ""}
          <div class="device-list">
            ${renderDevices
              .map((device) => {
                const linkedRecord = activeSeizedMap.get(normalizeImei(device.imei));
                const normalizedImei = normalizeImei(device.imei);
                const isInside = insideImeiSet.has(normalizedImei);
                return `
                  <div class="device">
                    <div class="device-main">
                      <div><strong>${escapeHtml(device.label || "Perangkat")}</strong></div>
                      <div class="meta">${escapeHtml(device.brand || "-")}</div>
                      <button
                        type="button"
                        class="device-toggle ${isInside ? "active" : ""}"
                        data-action="toggle-inside"
                        data-imei="${escapeHtml(normalizedImei)}"
                      >
                        <span class="device-code">📱 ${escapeHtml(device.imei || "-")}</span>
                      </button>
                    </div>
                    <div class="record-actions">
                      ${
                        linkedRecord
                          ? `<span class="badge danger"><span class="mini-icon">⛔</span>Tercatat sitaan</span>`
                          : `<span class="badge ok"><span class="mini-icon">✓</span>Aman</span>`
                      }
                      <span class="badge ${isInside ? "ok" : ""}"><span class="mini-icon">📱</span>${
                        isInside ? "Di dalam lapas" : "Belum dihitung"
                      }</span>
                      ${
                        state.isAdmin
                          ? `<button type="button" data-action="remove-device" data-staff-id="${escapeHtml(
                              staff.id
                            )}" data-device-id="${escapeHtml(device.id)}">Hapus IMEI</button>`
                          : ""
                      }
                    </div>
                  </div>
                  ${
                    linkedRecord
                      ? `<p class="meta">🔒 Sitaan aktif: ${escapeHtml(linkedRecord.brand)} ${escapeHtml(
                          linkedRecord.model
                        )} | Petugas: ${escapeHtml(linkedRecord.officerName)} | ${escapeHtml(
                          formatDateTime(linkedRecord.seizedAt)
                        )}</p>`
                      : ""
                  }
                `;
              })
              .join("")}
          </div>
        </article>
      `;
    })
    .filter(Boolean);

  el.staffResults.innerHTML = rows.length
    ? rows.join("")
    : `<div class="empty">Tidak ada data yang cocok.</div>`;

  el.datasetBadge.textContent = `${state.data.staff.length} staf tersimpan`;
}

function scheduleAutoToggleFromSearch(rawValue) {
  if (state.autoToggleTimer) {
    clearTimeout(state.autoToggleTimer);
    state.autoToggleTimer = null;
  }

  const normalizedQuery = normalizeImei(rawValue);
  if (normalizedQuery.length < 5) {
    state.lastAutoToggleKey = "";
    return;
  }

  const matchedDevice = findDeviceByPrefixImei(normalizedQuery);
  if (!matchedDevice) {
    state.lastAutoToggleKey = "";
    return;
  }

  const toggleKey = `${matchedDevice.staffId}:${matchedDevice.imei}:${normalizedQuery}`;
  if (state.lastAutoToggleKey === toggleKey) {
    return;
  }

  state.autoToggleTimer = setTimeout(() => {
    toggleInsideImei(matchedDevice.imei);
    state.lastAutoToggleKey = toggleKey;
    state.autoToggleTimer = null;
  }, 1000);
}

function findDeviceByPrefixImei(normalizedPrefix) {
  const matches = [];

  for (const staff of state.data.staff) {
    for (const device of staff.devices || []) {
      const imei = normalizeImei(device.imei);
      if (imei.startsWith(normalizedPrefix)) {
        matches.push({
          staffId: staff.id,
          imei,
        });
      }
    }
  }

  return matches.length === 1 ? matches[0] : null;
}

function renderSeized() {
  const query = state.seizedQuery;
  const records = [...state.data.seizedRecords]
    .filter((record) => {
      if (state.seizedFilter === "active") {
        return record.status === "active";
      }
      if (state.seizedFilter === "released") {
        return record.status !== "active";
      }
      return true;
    })
    .filter((record) => {
      if (!query) {
        return true;
      }

      return [
        record.brand,
        record.model,
        record.imei1,
        record.imei2,
        record.officerName,
        record.officerUnit,
        record.location,
        record.ownerRef,
        record.storageLocation,
        record.notes,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => new Date(b.seizedAt) - new Date(a.seizedAt));
  if (!records.length) {
    el.seizedRecords.innerHTML = `<div class="empty">${
      state.data.seizedRecords.length ? "Tidak ada data sitaan yang cocok." : "Belum ada HP sitaan yang dicatat."
    }</div>`;
    el.seizedBadge.textContent = state.data.seizedRecords.length ? "Filter aktif" : "Belum ada sitaan";
    el.seizedBadge.className = "badge";
    return;
  }

  const activeCount = records.filter((record) => record.status === "active").length;
  el.seizedBadge.textContent = `${activeCount} sitaan aktif`;
  el.seizedBadge.className = `badge ${activeCount ? "warn" : "ok"}`;

  el.seizedRecords.innerHTML = records
    .map(
      (record) => `
        <article class="record">
          <div class="record-top">
            <div>
              <h3>${escapeHtml(record.brand)} ${escapeHtml(record.model)}</h3>
              <p class="meta">IMEI 1: <span class="device-code">${escapeHtml(record.imei1)}</span></p>
              ${record.imei2 ? `<p class="meta">IMEI 2: <span class="device-code">${escapeHtml(record.imei2)}</span></p>` : ""}
            </div>
            <span class="badge ${record.status === "active" ? "danger" : "ok"}"><span class="mini-icon">${
              record.status === "active" ? "🔒" : "✓"
            }</span>${record.status === "active" ? "Masih disita" : "Ditutup"}</span>
          </div>
          <div class="record-meta">
            <span>${escapeHtml(formatDateTime(record.seizedAt))}</span>
            <span>Petugas: ${escapeHtml(record.officerName)}</span>
            <span>Unit: ${escapeHtml(record.officerUnit)}</span>
            <span>Lokasi: ${escapeHtml(record.location)}</span>
            <span>Penyimpanan: ${escapeHtml(record.storageLocation)}</span>
          </div>
          ${record.ownerRef ? `<p class="meta">Dari: ${escapeHtml(record.ownerRef)}</p>` : ""}
          ${record.notes ? `<p class="meta">${escapeHtml(record.notes)}</p>` : ""}
          <div class="record-actions">
            ${
              state.isAdmin && record.status === "active"
                ? `<button class="warn" type="button" data-action="close-seizure" data-record-id="${escapeHtml(
                    record.id
                  )}">Tandai selesai</button>`
                : ""
            }
            ${
              state.isAdmin && record.status === "active"
                ? `<button class="danger" type="button" data-action="delete-seizure" data-record-id="${escapeHtml(
                    record.id
                  )}">Hapus data sitaan</button>`
                : ""
            }
            ${
              state.isAdmin && record.status !== "active"
                ? `<button class="danger" type="button" data-action="delete-seizure" data-record-id="${escapeHtml(
                    record.id
                  )}">Hapus riwayat</button>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");
}

function renderAdmin() {
  el.adminShell.classList.toggle("active", state.isAdmin);
  el.seizedSearchShell.classList.toggle("active", state.isAdmin);
  el.insideShell.classList.toggle("active", state.isAdmin);
  el.adminStatus.className = `badge ${state.isAdmin ? "danger" : ""}`.trim();
  el.adminStatus.textContent = state.isAdmin ? "Mode admin aktif" : "Mode petugas";
  el.adminToggle.textContent = state.isAdmin ? "Keluar admin" : "Masuk admin";
}

function renderStaffSelect() {
  const options = state.data.staff
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name, "id"))
    .map((staff) => `<option value="${escapeHtml(staff.id)}">${escapeHtml(staff.name)} | ${escapeHtml(staff.position)}</option>`)
    .join("");

  el.deviceStaff.innerHTML = options || `<option value="">Belum ada staf</option>`;
}

function handleSeizedSubmit(event) {
  event.preventDefault();
  const record = {
    id: crypto.randomUUID(),
    brand: formValue("seized-brand"),
    model: formValue("seized-model"),
    imei1: normalizeImei(formValue("seized-imei-1")),
    imei2: normalizeImei(formValue("seized-imei-2")),
    officerName: formValue("seized-officer"),
    officerUnit: formValue("seized-unit"),
    seizedAt: formValue("seized-datetime"),
    location: formValue("seized-location"),
    ownerRef: formValue("seized-owner"),
    storageLocation: formValue("seized-storage"),
    notes: formValue("seized-notes"),
    status: "active",
    createdAt: new Date().toISOString(),
  };

  if (!record.imei1 || record.imei1.length < 14) {
    alert("IMEI 1 wajib valid.");
    return;
  }

  const duplicate = state.data.seizedRecords.find(
    (item) =>
      item.status === "active" &&
      [item.imei1, item.imei2].some((imei) => imei && [record.imei1, record.imei2].includes(imei))
  );

  if (duplicate) {
    alert("IMEI sudah tercatat sebagai sitaan aktif.");
    return;
  }

  state.data.seizedRecords.unshift(record);
  persist();
  event.currentTarget.reset();
  renderAll();
}

function handleStaffSubmit(event) {
  event.preventDefault();
  if (!state.isAdmin) {
    return;
  }

  state.data.staff.unshift({
    id: crypto.randomUUID(),
    name: el.staffName.value.trim(),
    position: el.staffPosition.value.trim(),
    note: el.staffNote.value.trim(),
    createdAt: new Date().toISOString(),
    devices: [],
  });

  persist();
  event.currentTarget.reset();
  renderAll();
}

function handleDeviceSubmit(event) {
  event.preventDefault();
  if (!state.isAdmin) {
    return;
  }

  const staff = state.data.staff.find((item) => item.id === el.deviceStaff.value);
  if (!staff) {
    alert("Pilih staf terlebih dahulu.");
    return;
  }

  const imei = normalizeImei(el.deviceImei.value);
  if (!imei || imei.length < 14) {
    alert("IMEI tidak valid.");
    return;
  }

  const imeiExists = state.data.staff.some((item) =>
    (item.devices || []).some((device) => normalizeImei(device.imei) === imei)
  );
  if (imeiExists) {
    alert("IMEI sudah dipakai pada data staf.");
    return;
  }

  const seizedConflict = state.data.seizedRecords.some(
    (record) => record.status === "active" && [record.imei1, record.imei2].some((item) => normalizeImei(item) === imei)
  );
  if (seizedConflict) {
    alert("IMEI masih tercatat sebagai sitaan aktif.");
    return;
  }

  staff.devices.push({
    id: crypto.randomUUID(),
    label: el.deviceLabel.value.trim(),
    imei,
    brand: el.deviceBrand.value.trim(),
    slot: Number(el.deviceSlot.value) || staff.devices.length + 1,
    note: el.deviceNote.value.trim(),
    createdAt: new Date().toISOString(),
  });

  persist();
  event.currentTarget.reset();
  renderAll();
}

async function handlePinChange(event) {
  event.preventDefault();
  if (!state.isAdmin) {
    return;
  }

  const currentHash = await hashText(el.currentPin.value.trim());
  if (currentHash !== state.data.config.adminPinHash) {
    alert("PIN saat ini salah.");
    return;
  }

  const nextPin = el.nextPin.value.trim();
  if (nextPin.length < 4) {
    alert("PIN baru minimal 4 digit.");
    return;
  }

  state.data.config.adminPinHash = await hashText(nextPin);
  persist();
  event.currentTarget.reset();
  alert("PIN admin diperbarui.");
}

function handleStaffActions(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  if (button.dataset.action === "toggle-inside") {
    toggleInsideImei(button.dataset.imei);
    return;
  }

  if (button.dataset.action !== "remove-device" || !state.isAdmin) {
    return;
  }

  const staff = state.data.staff.find((item) => item.id === button.dataset.staffId);
  if (!staff) {
    return;
  }

  staff.devices = (staff.devices || []).filter((device) => device.id !== button.dataset.deviceId);
  persist();
  renderAll();
}

function handleSeizedActions(event) {
  const button = event.target.closest("button[data-action]");
  if (!button || !state.isAdmin) {
    return;
  }

  const recordId = button.dataset.recordId;
  const record = state.data.seizedRecords.find((item) => item.id === recordId);
  if (!record) {
    return;
  }

  if (button.dataset.action === "close-seizure") {
    record.status = "released";
    record.closedAt = new Date().toISOString();
  }

  if (button.dataset.action === "delete-seizure") {
    state.data.seizedRecords = state.data.seizedRecords.filter((item) => item.id !== recordId);
  }

  persist();
  renderAll();
}

function exportData() {
  const payload = JSON.stringify(state.data, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `imei-monitor-backup-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, "-")}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = async () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!Array.isArray(parsed.staff) || !Array.isArray(parsed.seizedRecords)) {
        throw new Error("Format tidak cocok.");
      }

      if (!parsed.config?.adminPinHash) {
        parsed.config = parsed.config || {};
        parsed.config.adminPinHash = await hashText(DEFAULT_PIN);
      }

      state.data = parsed;
      persist();
      renderAll();
      alert("Data berhasil diimport.");
    } catch {
      alert("File import tidak valid.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function openPinModal() {
  el.pinOverlay.classList.add("active");
  el.pinOverlay.setAttribute("aria-hidden", "false");
  el.pinInput.value = "";
  el.pinInput.focus();
}

function closePinModal() {
  el.pinOverlay.classList.remove("active");
  el.pinOverlay.setAttribute("aria-hidden", "true");
}

async function handleAdminLogin() {
  const candidate = el.pinInput.value.trim();
  if (!candidate) {
    return;
  }

  const candidateHash = await hashText(candidate);
  if (candidateHash !== state.data.config.adminPinHash) {
    alert("PIN salah.");
    return;
  }

  state.isAdmin = true;
  renderAdmin();
  closePinModal();
}

function formValue(id) {
  return document.getElementById(id).value.trim();
}

function getInsideImeiSet() {
  const list = Array.isArray(state.data.config?.insideLapasImeis)
    ? state.data.config.insideLapasImeis
    : [];
  return new Set(list.map(normalizeImei).filter(Boolean));
}

function getInsideOwnerEntries() {
  const selected = getInsideImeiSet();
  if (!selected.size) {
    return [];
  }

  const entries = [];
  for (const staff of state.data.staff) {
    for (const device of staff.devices || []) {
      const imei = normalizeImei(device.imei);
      if (!selected.has(imei)) {
        continue;
      }

      entries.push({
        ownerName: staff.name,
        position: staff.position,
        label: device.label || "Perangkat",
        imei,
        brand: device.brand,
      });
    }
  }

  return entries.sort((a, b) => a.ownerName.localeCompare(b.ownerName, "id"));
}

function toggleInsideImei(imei) {
  const normalized = normalizeImei(imei);
  if (!normalized) {
    return;
  }

  const set = getInsideImeiSet();
  if (set.has(normalized)) {
    set.delete(normalized);
  } else {
    set.add(normalized);
  }

  state.data.config.insideLapasImeis = [...set];
  persist();
  renderStats();
  renderInsideOwners();
  renderStaff();
}
