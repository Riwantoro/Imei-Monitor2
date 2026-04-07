const STORAGE = {
  logo: "wcpp.booklet.logo",
  photos: "wcpp.booklet.photos",
  checklist: "wcpp.booklet.checklist",
  language: "wcpp.booklet.language",
};

const COPY = {
  id: {
    topbarTitle: "WCPP 2026 • Bali Booklet",
    heroEyebrow: "World Congress • Bali 2026",
    heroTitle: "WCPP 2026",
    heroDesc:
      "Booklet mobile-first untuk memperkenalkan 7th World Congress on Probation and Parole: ringkas, visual, mudah dibaca di layar HP, dan siap diperkaya dengan logo resmi serta foto Bali.",
    chipDateLabel: "Tanggal",
    chipLocationLabel: "Lokasi",
    chipThemeLabel: "Tema",
    chipMoodLabel: "Nuansa",
    chipMoodValue: "Modern, warm, khas Bali",
    logoSlotTitle: "Tempat Logo WCPP",
    logoSlotHint: "Tap upload untuk memasukkan logo resmi versi PNG/SVG/JPG.",
    logoCardTitle: "Cover Brand Slot",
    logoCardHint: "Dipakai untuk preview booklet tanpa backend. Logo tersimpan lokal di browser perangkat ini.",
    uploadLogo: "Upload logo",
    upload: "Upload",
    reset: "Reset",
    overviewLabel: "Overview",
    arrivalNav: "Arrival",
    specialNav: "Special",
    galleryNav: "Gallery",
    overviewTitle: "Info umum yang langsung menjawab “ini acara apa dan kenapa penting?”",
    overviewDesc:
      "WCPP 2026 adalah kongres biennial global yang mempertemukan pemimpin, praktisi, peneliti, dan pembuat kebijakan di bidang probation, parole, dan community-based justice. Bali dipilih bukan hanya sebagai destinasi, tetapi sebagai panggung dialog internasional tentang keadilan restoratif, reintegrasi, dan solusi yang lebih manusiawi.",
    overviewCard1Title: "Congress Snapshot",
    overviewCard1Desc:
      "Forum internasional untuk keynote, panel ahli, workshop interaktif, networking lintas negara, dan pertukaran praktik terbaik correctional services.",
    overviewCard2Title: "Value Utama",
    overviewCard2Desc:
      "Fokus pada restorative and inclusive justice, dengan percakapan yang menghubungkan kebijakan, riset, implementasi lapangan, dan dampak sosial.",
    overviewCard3Title: "Momentum Indonesia",
    overviewCard3Desc:
      "Setelah London, Los Angeles, Tokyo, Sydney, Ottawa, dan The Hague, edisi 2026 menempatkan Indonesia sebagai tuan rumah global justice dialogue berikutnya.",
    overviewCard4Title: "Audience Fit",
    overviewCard4Desc:
      "Cocok untuk delegasi kementerian, correctional leaders, akademisi, mitra pembangunan, praktisi re-entry, dan stakeholders komunitas.",
    formatLabel: "Format",
    formatValue: "Keynote, panel, workshop, cultural visit",
    contactLabel: "Official Contact",
    venueLabel: "Venue",
    venueTitle: "Pusat kegiatan di kawasan Nusa Dua yang ramah event internasional",
    venueDesc:
      "Untuk booklet ini, venue diposisikan sebagai pengalaman: area yang premium, aman, mudah dijangkau dari hotel sekitar, dan kuat secara visual untuk tamu internasional.",
    venueCard1Desc:
      "Venue resmi WCPP 2026 adalah Bali International Convention Centre within The Westin, di enclave resort Nusa Dua yang dekat hotel, dining, dan white-sand beachfront.",
    venueCard2Title: "8 Room Experience",
    venueCard2Desc:
      "Format kongres dibagi ke delapan ruang untuk Inspirational Talk, Deep Talk, dan Out of The Box, sehingga alur acara terasa dinamis dan tidak monoton.",
    arrivalLabel: "Arrival Flow",
    arrivalTitle: "Alur kedatangan dari sebelum terbang sampai siap menuju venue",
    arrivalDesc:
      "Disusun untuk peserta internasional agar tahu urutan praktis: dokumen, proses bandara, dan keputusan transport setelah keluar terminal.",
    arrivalStep1Title: "1. Sebelum berangkat",
    arrivalStep1Desc:
      "Siapkan paspor aktif minimal 6 bulan, tiket pulang/lanjutan, cek kelayakan VOA/e-VOA, dan isi Electronic Customs Declaration maksimal 72 jam sebelum tiba.",
    arrivalStep2Title: "2. Tiba di Ngurah Rai Airport",
    arrivalStep2Desc:
      "Lalui immigration, ambil bagasi, lalu tunjukkan QR Electronic Customs Declaration di area bea cukai sebelum keluar dari bandara.",
    arrivalStep3Title: "3. Orientasi delegasi",
    arrivalStep3Desc:
      "Cari Airport Help Desk dekat baggage claim dengan identitas 7th WCPP untuk bantuan arah, informasi transport, dan koordinasi awal menuju hotel atau venue.",
    arrivalStep4Title: "4. Menuju Nusa Dua",
    arrivalStep4Desc:
      "Opsi paling praktis adalah official airport taxi, Grab Lounge, Gojek Customer Lounge, atau hotel transfer yang sudah diatur sebelumnya.",
    transportLabel: "Transport",
    transportTitle: "Transportasi umum dan bersama: versi yang realistis untuk Bali",
    transportDesc:
      "Bali belum berbasis mass transit besar seperti MRT. Untuk booklet, alur transport umum dibingkai sebagai kombinasi layanan publik bandara, ride-hailing resmi, shuttle hotel, dan pergerakan singkat di kawasan Nusa Dua.",
    transportCard1Title: "Rute Delegasi Paling Aman",
    transportRoute1Desc: "Opsi paling mudah dibaca tamu asing karena ada titik tunggu resmi di area bandara.",
    transportRoute2Desc: "Gunakan ride-hailing resmi, taxi bandara, atau shuttle hotel jika sudah tersedia.",
    transportRoute3Desc: "Pilih jalan kaki, shuttle hotel, atau short ride dalam kawasan Nusa Dua.",
    transportCard2Title: "Catatan untuk booklet",
    transportHighlight1Title: "Transport umum Bali bersifat terbatas",
    transportHighlight1Desc:
      "Karena itu narasi booklet lebih kuat jika menonjolkan kemudahan transfer resmi ketimbang janji rute bus detail yang bisa berubah.",
    transportHighlight2Title: "Shuttle adalah senjata utama",
    transportHighlight2Desc:
      "Tambahkan info shuttle hotel atau shuttle event jika nanti tersedia, karena ini paling relevan untuk delegasi konferensi.",
    transportHighlight3Title: "Walkable zone menjadi nilai jual",
    transportHighlight3Desc:
      "Cluster Nusa Dua membuat last-mile lebih tenang, aman, dan tidak melelahkan setelah penerbangan panjang.",
    checklistTitle: "Checklist kedatangan pribadi",
    checklistDesc: "Fitur spesial: checklist bisa dicentang dan tersimpan lokal di browser HP.",
    check1Title: "Visa, paspor, tiket pulang siap",
    check1Desc: "Gunakan untuk memastikan entry requirement tidak tertinggal sebelum berangkat.",
    check2Title: "Electronic Customs Declaration selesai",
    check2Desc: "Idealnya diisi sebelum tiba agar proses keluar bandara lebih singkat.",
    check3Title: "Pilihan transfer dari airport sudah diputuskan",
    check3Desc: "Tentukan lebih awal: official taxi, Grab, Gojek, atau shuttle hotel.",
    check4Title: "Rute hotel ke venue sudah jelas",
    check4Desc: "Cek jalan kaki, drop-off point, atau shuttle internal kawasan Nusa Dua.",
    specialLabel: "Special Edge",
    specialTitle: "Hal yang membuat WCPP 2026 terasa spesial, bukan sekadar konferensi biasa",
    specialDesc:
      "Bagian ini dibuat seperti selling points booklet: kuat untuk pitching, sponsor deck, maupun komunikasi ke calon peserta.",
    specialCard1Title: "Justice Meets Bali",
    specialCard1Desc:
      "WCPP 2026 menyatukan percakapan serius tentang keadilan dengan atmosfer healing, hospitality, dan cultural warmth yang hanya kuat jika dibingkai dari Bali.",
    specialCard2Title: "Limited Cultural Visit",
    specialCard2Desc:
      "Ada cultural and technical visit di hari akhir, termasuk observasi praktik reintegrasi lokal, dengan kuota terbatas untuk 100 peserta terdaftar pertama.",
    specialCard3Title: "Global Voices, Local Texture",
    specialCard3Desc:
      "Pembicara internasional dan nasional ditempatkan dalam panggung yang tetap menunjukkan identitas Indonesia, bukan venue netral tanpa karakter.",
    specialCard4Title: "Booklet Ini Interaktif",
    specialCard4Desc:
      "Logo bisa diunggah, foto bisa diganti, checklist bisa disimpan lokal. Jadi booklet terasa seperti microsite presentasi, bukan PDF statis.",
    galleryLabel: "Gallery Slots",
    galleryTitle: "Tempat foto-foto Bali yang indah untuk memperkaya suasana",
    galleryDesc:
      "Setiap slot bisa diisi dari galeri HP. Cocok untuk sunrise beach, gerbang khas Bali, budaya, atau landscape resort area.",
    gallerySlot1Title: "Photo Slot 01",
    gallerySlot1Hint: "Ideal untuk hero visual: laut, sunrise, atau aerial Nusa Dua.",
    galleryCard1Title: "Opening Mood",
    galleryCard1Desc: "Visual pertama yang membentuk impresi elegan.",
    gallerySlot2Title: "Photo Slot 02",
    gallerySlot2Hint: "Ideal untuk budaya: tari, arsitektur, atau detail ornament Bali.",
    galleryCard2Title: "Cultural Accent",
    galleryCard2Desc: "Untuk menegaskan nuansa lokal yang hangat.",
    gallerySlot3Title: "Photo Slot 03",
    gallerySlot3Hint: "Ideal untuk ambience delegasi: resort, meeting zone, atau city arrival.",
    galleryCard3Title: "Delegate Journey",
    galleryCard3Desc: "Menutup booklet dengan rasa perjalanan yang lengkap.",
    quickAccessTitle: "Quick Access",
    quickAccessDesc:
      "Link cepat untuk mengubah booklet ini menjadi alat briefing singkat: daftar, cek situs resmi, buka peta, atau ambil invitation letter.",
    officialSite: "Official Site",
    register: "Register",
    openMap: "Open Map",
    invitationLetter: "Invitation Letter",
    contactBoxTitle: "Kontak",
    footerNote:
      "Rekomendasi lanjutan: masukkan logo resmi WCPP, foto Bali resolusi tinggi, dan jika panitia sudah final, tambahkan detail shuttle hotel atau route transfer resmi agar booklet ini siap publish.",
  },
  en: {
    topbarTitle: "WCPP 2026 • Bali Booklet",
    heroEyebrow: "World Congress • Bali 2026",
    heroTitle: "WCPP 2026",
    heroDesc:
      "A mobile-first booklet introducing the 7th World Congress on Probation and Parole: concise, visual, easy to read on phones, and ready to be enriched with the official logo and beautiful Bali imagery.",
    chipDateLabel: "Date",
    chipLocationLabel: "Location",
    chipThemeLabel: "Theme",
    chipMoodLabel: "Mood",
    chipMoodValue: "Modern, warm, Balinese",
    logoSlotTitle: "WCPP Logo Slot",
    logoSlotHint: "Tap upload to place the official logo in PNG/SVG/JPG format.",
    logoCardTitle: "Cover Brand Slot",
    logoCardHint: "Used for instant booklet preview without a backend. The logo is stored locally in this browser.",
    uploadLogo: "Upload logo",
    upload: "Upload",
    reset: "Reset",
    overviewLabel: "Overview",
    arrivalNav: "Arrival",
    specialNav: "Special",
    galleryNav: "Gallery",
    overviewTitle: "General information that answers “what is this event and why does it matter?”",
    overviewDesc:
      "WCPP 2026 is a global biennial congress bringing together leaders, practitioners, researchers, and policymakers in probation, parole, and community-based justice. Bali is positioned not only as a destination, but as an international stage for restorative justice, reintegration, and more humane solutions.",
    overviewCard1Title: "Congress Snapshot",
    overviewCard1Desc:
      "An international forum for keynotes, expert panels, interactive workshops, cross-border networking, and exchange of best practices in correctional services.",
    overviewCard2Title: "Core Value",
    overviewCard2Desc:
      "Focused on restorative and inclusive justice, connecting policy, research, field implementation, and social impact.",
    overviewCard3Title: "Indonesia Momentum",
    overviewCard3Desc:
      "After London, Los Angeles, Tokyo, Sydney, Ottawa, and The Hague, the 2026 edition positions Indonesia as the next host of a global justice dialogue.",
    overviewCard4Title: "Audience Fit",
    overviewCard4Desc:
      "Suitable for ministry delegates, correctional leaders, academics, development partners, re-entry practitioners, and community stakeholders.",
    formatLabel: "Format",
    formatValue: "Keynotes, panels, workshops, cultural visit",
    contactLabel: "Official Contact",
    venueLabel: "Venue",
    venueTitle: "A conference hub in Nusa Dua designed for international events",
    venueDesc:
      "In this booklet, the venue is framed as an experience: premium, secure, easy to access from nearby hotels, and visually strong for international delegates.",
    venueCard1Desc:
      "The official venue is Bali International Convention Centre within The Westin, inside the Nusa Dua resort enclave close to hotels, dining, and white-sand beachfront.",
    venueCard2Title: "8 Room Experience",
    venueCard2Desc:
      "The congress uses eight rooms for Inspirational Talk, Deep Talk, and Out of The Box sessions, creating a dynamic event flow instead of a flat one-room format.",
    arrivalLabel: "Arrival Flow",
    arrivalTitle: "Arrival journey from pre-departure to being ready for the venue",
    arrivalDesc:
      "Designed for international participants who need a practical sequence: documents, airport process, and transport decisions after leaving the terminal.",
    arrivalStep1Title: "1. Before departure",
    arrivalStep1Desc:
      "Prepare a passport valid for at least six months, a return/onward ticket, check VOA/e-VOA eligibility, and complete the Electronic Customs Declaration within 72 hours before arrival.",
    arrivalStep2Title: "2. Arrive at Ngurah Rai Airport",
    arrivalStep2Desc:
      "Pass immigration, collect baggage, then show the Electronic Customs Declaration QR code at customs before exiting the airport.",
    arrivalStep3Title: "3. Delegate orientation",
    arrivalStep3Desc:
      "Look for the 7th WCPP Airport Help Desk near baggage claim for directions, transport information, and first coordination to your hotel or venue.",
    arrivalStep4Title: "4. Continue to Nusa Dua",
    arrivalStep4Desc:
      "The most practical options are official airport taxi, Grab Lounge, Gojek Customer Lounge, or a pre-arranged hotel transfer.",
    transportLabel: "Transport",
    transportTitle: "Public and shared transport: the realistic Bali version",
    transportDesc:
      "Bali is not built around large-scale mass transit like MRT systems. In this booklet, public mobility is framed as a combination of airport public services, official ride-hailing, hotel shuttles, and short-distance movement inside Nusa Dua.",
    transportCard1Title: "Safest Delegate Route",
    transportRoute1Desc: "The easiest option for overseas guests because there are official pick-up and waiting points at the airport.",
    transportRoute2Desc: "Use official ride-hailing, airport taxi, or a hotel shuttle if available.",
    transportRoute3Desc: "Choose walking, hotel shuttle, or a short ride inside the Nusa Dua area.",
    transportCard2Title: "Booklet Notes",
    transportHighlight1Title: "Bali public transit is limited",
    transportHighlight1Desc:
      "That is why the booklet is stronger when it highlights official transfer ease instead of promising detailed bus routes that may change.",
    transportHighlight2Title: "Shuttles are the key weapon",
    transportHighlight2Desc:
      "Add hotel shuttle or event shuttle details once finalized, because they are the most relevant mobility layer for conference delegates.",
    transportHighlight3Title: "Walkable zones are a selling point",
    transportHighlight3Desc:
      "The Nusa Dua cluster makes the last mile calmer, safer, and less tiring after a long flight.",
    checklistTitle: "Personal arrival checklist",
    checklistDesc: "Special feature: the checklist can be ticked and is saved locally in the phone browser.",
    check1Title: "Visa, passport, and return ticket ready",
    check1Desc: "Use this to make sure no entry requirement is left behind before departure.",
    check2Title: "Electronic Customs Declaration completed",
    check2Desc: "Ideally completed before arrival to shorten the airport exit process.",
    check3Title: "Airport transfer option decided",
    check3Desc: "Decide early between official taxi, Grab, Gojek, or hotel shuttle.",
    check4Title: "Hotel-to-venue route is clear",
    check4Desc: "Check walking access, drop-off points, or internal shuttle options in Nusa Dua.",
    specialLabel: "Special Edge",
    specialTitle: "What makes WCPP 2026 feel special, not just another conference",
    specialDesc:
      "This section is designed like a booklet selling point: strong for pitching, sponsor decks, and communication to prospective participants.",
    specialCard1Title: "Justice Meets Bali",
    specialCard1Desc:
      "WCPP 2026 combines serious justice conversations with healing, hospitality, and cultural warmth that become especially strong when framed in Bali.",
    specialCard2Title: "Limited Cultural Visit",
    specialCard2Desc:
      "The final day includes a cultural and technical visit, including observation of local reintegration practices, with limited capacity for the first 100 registered participants.",
    specialCard3Title: "Global Voices, Local Texture",
    specialCard3Desc:
      "International and national speakers are placed on a stage that still expresses Indonesian identity, not a neutral venue with no character.",
    specialCard4Title: "This Booklet Is Interactive",
    specialCard4Desc:
      "The logo can be uploaded, photos can be changed, and the checklist is saved locally. It feels like a presentation microsite rather than a static PDF.",
    galleryLabel: "Gallery Slots",
    galleryTitle: "Beautiful Bali photo spaces to enrich the atmosphere",
    galleryDesc:
      "Each slot can be replaced from a phone gallery. Ideal for beach sunrise, iconic Balinese gateways, culture, or resort landscapes.",
    gallerySlot1Title: "Photo Slot 01",
    gallerySlot1Hint: "Ideal for the hero visual: sea, sunrise, or a Nusa Dua aerial mood.",
    galleryCard1Title: "Opening Mood",
    galleryCard1Desc: "The first visual that creates an elegant impression.",
    gallerySlot2Title: "Photo Slot 02",
    gallerySlot2Hint: "Ideal for culture: dance, architecture, or ornamental Balinese detail.",
    galleryCard2Title: "Cultural Accent",
    galleryCard2Desc: "Used to reinforce the warmth of the local atmosphere.",
    gallerySlot3Title: "Photo Slot 03",
    gallerySlot3Hint: "Ideal for delegate ambience: resort, meeting zone, or arrival context.",
    galleryCard3Title: "Delegate Journey",
    galleryCard3Desc: "Closes the booklet with a more complete travel feeling.",
    quickAccessTitle: "Quick Access",
    quickAccessDesc:
      "Fast links to turn this booklet into a compact briefing tool: register, check the official site, open the map, or access the invitation letter.",
    officialSite: "Official Site",
    register: "Register",
    openMap: "Open Map",
    invitationLetter: "Invitation Letter",
    contactBoxTitle: "Contact",
    footerNote:
      "Recommended next step: insert the official WCPP logo, use high-resolution Bali imagery, and once finalized by the committee, add hotel shuttle or official transfer details so the booklet is ready to publish.",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitch();
  setupLogoSlot();
  setupPhotoSlots();
  setupChecklist();
});

function setupLanguageSwitch() {
  const buttons = [...document.querySelectorAll("[data-lang]")];
  const savedLanguage = localStorage.getItem(STORAGE.language);
  const activeLanguage = savedLanguage && COPY[savedLanguage] ? savedLanguage : "id";

  applyLanguage(activeLanguage);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.lang;
      if (!COPY[nextLanguage]) {
        return;
      }
      localStorage.setItem(STORAGE.language, nextLanguage);
      applyLanguage(nextLanguage);
    });
  });
}

function applyLanguage(language) {
  const copy = COPY[language] || COPY.id;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
  });
}

function setupLogoSlot() {
  const input = document.getElementById("logo-input");
  const image = document.getElementById("logo-image");
  const placeholder = document.getElementById("logo-placeholder");
  const reset = document.getElementById("logo-reset");

  if (!input || !image || !placeholder || !reset) {
    return;
  }

  const savedLogo = localStorage.getItem(STORAGE.logo);
  if (savedLogo) {
    applyMedia(image, placeholder, savedLogo);
  } else {
    applyMedia(image, placeholder, "./assets/wcpp-logo.jpeg");
  }

  input.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const dataUrl = await readAsDataUrl(file);
    localStorage.setItem(STORAGE.logo, dataUrl);
    applyMedia(image, placeholder, dataUrl);
    input.value = "";
  });

  reset.addEventListener("click", () => {
    localStorage.removeItem(STORAGE.logo);
    image.hidden = true;
    image.removeAttribute("src");
    placeholder.hidden = false;
  });
}

function setupPhotoSlots() {
  const savedPhotos = readJson(STORAGE.photos, {});
  document.querySelectorAll("[data-photo-card]").forEach((card) => {
    const inputId = card.getAttribute("data-photo-card");
    const input = document.getElementById(inputId);
    const image = card.querySelector(".photo-preview");
    const defaultSrc = card.dataset.defaultSrc;
    if (!input || !image) {
      return;
    }

    if (savedPhotos[inputId]) {
      setPhotoCard(card, image, savedPhotos[inputId]);
    } else if (defaultSrc) {
      setPhotoCard(card, image, defaultSrc);
    }

    input.addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      const dataUrl = await readAsDataUrl(file);
      const nextPhotos = { ...readJson(STORAGE.photos, {}), [inputId]: dataUrl };
      localStorage.setItem(STORAGE.photos, JSON.stringify(nextPhotos));
      setPhotoCard(card, image, dataUrl);
      input.value = "";
    });
  });
}

function setupChecklist() {
  const savedChecklist = readJson(STORAGE.checklist, {});
  document.querySelectorAll(".checklist-item").forEach((item) => {
    const key = item.dataset.key;
    const input = item.querySelector(".check-toggle");
    if (!key || !input) {
      return;
    }

    const checked = Boolean(savedChecklist[key]);
    input.checked = checked;
    item.classList.toggle("done", checked);

    input.addEventListener("change", () => {
      const nextChecklist = { ...readJson(STORAGE.checklist, {}), [key]: input.checked };
      localStorage.setItem(STORAGE.checklist, JSON.stringify(nextChecklist));
      item.classList.toggle("done", input.checked);
    });
  });
}

function setPhotoCard(card, image, src) {
  image.src = src;
  image.hidden = false;
  card.classList.add("has-image");
}

function applyMedia(image, placeholder, dataUrl) {
  image.src = dataUrl;
  image.hidden = false;
  placeholder.hidden = true;
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}

function readAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}
