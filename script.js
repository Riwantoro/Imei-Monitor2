const STORAGE_KEY = "kolase.imei-monitor.v2";
const DEFAULT_PIN = "123456";

const seedState = {
  config: {
    adminPinHash: null,
    version: 2,
    updatedAt: new Date().toISOString(),
  },
  staff: [
    {
      id: crypto.randomUUID(),
      name: "Azwar Riwantoro",
      position: "Minkamtib",
      note: "",
      createdAt: new Date().toISOString(),
      devices: [
        {
          id: crypto.randomUUID(),
          label: "HP Dinas 1",
          imei: "351272391804507",
          brand: "Infinix 40 Pro",
          slot: 1,
          note: "",
          createdAt: new Date().toISOString(),
        },
        {
          id: crypto.randomUUID(),
          label: "HP Dinas 2",
          imei: "356174095873157",
          brand: "iPhone Xs",
          slot: 2,
          note: "",
          createdAt: new Date().toISOString(),
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "I Nyoman Nata Suryawan",
      position: "Minkamtib",
      note: "",
      createdAt: new Date().toISOString(),
      devices: [
        {
          id: crypto.randomUUID(),
          label: "HP Pribadi",
          imei: "355913106815447",
          brand: "Samsung Galaxy A70",
          slot: 1,
          note: "",
          createdAt: new Date().toISOString(),
        },
      ],
    },
  ],
  seizedRecords: [],
};

const state = {
  data: null,
  isAdmin: false,
  query: "",
  filter: "all",
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
  el.staffResults = document.getElementById("staff-results");
  el.searchInput = document.getElementById("search-input");
  el.searchFilter = document.getElementById("search-filter");
  el.datasetBadge = document.getElementById("dataset-badge");
  el.seizedBadge = document.getElementById("seized-badge");
  el.seizedForm = document.getElementById("seized-form");
  el.seizedRecords = document.getElementById("seized-records");
  el.seizedReset = document.getElementById("seized-reset");
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
    renderStaff();
  });

  el.searchFilter.addEventListener("change", (event) => {
    state.filter = event.target.value;
    renderStaff();
  });

  el.seizedForm.addEventListener("submit", handleSeizedSubmit);
  el.seizedReset.addEventListener("click", () => el.seizedForm.reset());

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
      persist(parsed);
    }
    parsed.staff = Array.isArray(parsed.staff) ? parsed.staff : [];
    parsed.seizedRecords = Array.isArray(parsed.seizedRecords) ? parsed.seizedRecords : [];
    return parsed;
  } catch {
    const fallback = structuredClone(seedState);
    fallback.config.adminPinHash = await hashText(DEFAULT_PIN);
    persist(fallback);
    return fallback;
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
  const totalSeized = state.data.seizedRecords.length;
  const activeSeized = state.data.seizedRecords.filter((record) => record.status === "active").length;

  return [
    { label: "Total staf", value: totalStaff },
    { label: "Total IMEI staf", value: totalDevices },
    { label: "HP sitaan aktif", value: activeSeized },
    { label: "Total log sitaan", value: totalSeized },
  ];
}

function renderAll() {
  renderStats();
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
          <small>${escapeHtml(item.label)}</small>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `
    )
    .join("");
}

function renderStaff() {
  const query = state.query;
  const activeSeizedMap = getActiveSeizedMap();
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
                return `
                  <div class="device">
                    <div>
                      <div><strong>${escapeHtml(device.label || "Perangkat")}</strong></div>
                      <div class="meta">${escapeHtml(device.brand || "-")}</div>
                      <div class="device-code">${escapeHtml(device.imei || "-")}</div>
                    </div>
                    <div class="record-actions">
                      ${
                        linkedRecord
                          ? `<span class="badge danger">Tercatat sitaan</span>`
                          : `<span class="badge ok">Tidak disita</span>`
                      }
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
                      ? `<p class="meta">Sitaan aktif: ${escapeHtml(linkedRecord.brand)} ${escapeHtml(
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

function renderSeized() {
  const records = [...state.data.seizedRecords].sort((a, b) => new Date(b.seizedAt) - new Date(a.seizedAt));
  if (!records.length) {
    el.seizedRecords.innerHTML = `<div class="empty">Belum ada HP sitaan yang dicatat.</div>`;
    el.seizedBadge.textContent = "Belum ada sitaan";
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
            <span class="badge ${record.status === "active" ? "danger" : "ok"}">${
              record.status === "active" ? "Masih disita" : "Ditutup"
            }</span>
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
              state.isAdmin
                ? `<button class="danger" type="button" data-action="delete-seizure" data-record-id="${escapeHtml(
                    record.id
                  )}">Hapus</button>`
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
  const button = event.target.closest("button[data-action='remove-device']");
  if (!button || !state.isAdmin) {
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
