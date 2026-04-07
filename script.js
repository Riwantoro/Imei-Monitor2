const STORAGE = {
  logo: "wcpp.booklet.logo",
  photos: "wcpp.booklet.photos",
  checklist: "wcpp.booklet.checklist",
  language: "wcpp.booklet.language",
};

const COPY = {
  id: {
    topbarTitle: "Digital Booklet • WCPP 2026",
    splashTitle: "Digital Booklet WCPP 2026",
    navCover: "Cover",
    navRoute: "Route Atlas",
    navTransport: "Transport",
    navGallery: "Bali Lens",
    heroEyebrow: "World Congress • Bali 2026",
    heroTitle: "Digital Booklet WCPP 2026",
    heroDesc:
      "Format baru ini dibuat seperti travel journal editorial: clean, terasa premium di HP, khas Bali, dan langsung menunjukkan perjalanan delegasi dari airport sampai venue.",
    chipDateLabel: "Tanggal",
    chipLocationLabel: "Lokasi",
    chipThemeLabel: "Tema",
    chipMoodLabel: "Nuansa",
    chipMoodValue: "Editorial, clean, khas Bali",
    logoSlotTitle: "Tempat Logo WCPP",
    logoSlotHint: "Tap upload untuk memasukkan logo resmi versi PNG/SVG/JPG.",
    logoCardTitle: "Logo block",
    logoCardHint: "Logo ini diperlakukan seperti cover masthead agar tampil lebih premium.",
    uploadLogo: "Upload logo",
    upload: "Upload",
    reset: "Reset",
    overviewLabel: "Overview",
    arrivalNav: "Arrival",
    specialNav: "Special",
    galleryNav: "Gallery",
    overviewTitle: "Info umum yang langsung menjawab “ini acara apa dan kenapa penting?”",
    overviewDesc:
      "WCPP 2026 mempertemukan global leaders, practitioners, researchers, dan policymakers dalam probation, parole, dan community-based justice. Bali dipilih bukan sekadar destinasi, tetapi panggung yang selaras dengan tema healing, reintegration, dan cultural hospitality.",
    overviewCard1Title: "Congress Snapshot",
    overviewCard1Desc:
      "Keynote, panel, workshop, networking global, dan pertukaran praktik terbaik.",
    overviewCard2Title: "Venue Character",
    overviewCard2Desc:
      "BICC within The Westin di Nusa Dua memberi rasa internasional yang rapi, aman, dan visual.",
    overviewCard3Title: "Bali Edge",
    overviewCard3Desc:
      "Local warmth, culture, dan resort geography membuat delegate journey terasa lebih spesial.",
    overviewCard4Title: "Audience Fit",
    overviewCard4Desc:
      "Cocok untuk delegasi kementerian, correctional leaders, akademisi, mitra pembangunan, praktisi re-entry, dan stakeholders komunitas.",
    coverKicker: "Healing Hearts, Safer Societies",
    coverTitle: "Justice in a Balinese frame.",
    coverText: "Kongres global dengan rasa tempat yang kuat: warm, cultural, and highly visual.",
    formatLabel: "Format",
    formatValue: "Keynote, panel, workshop, cultural visit",
    contactLabel: "Official Contact",
    venueLabel: "Venue",
    venueTitle: "Nusa Dua sebagai zona tenang, premium, dan mudah dibaca delegasi.",
    venueDesc:
      "Untuk booklet ini, venue diposisikan sebagai pengalaman: area yang premium, aman, mudah dijangkau dari hotel sekitar, dan kuat secara visual untuk tamu internasional.",
    venueCard1Desc:
      "Venue resmi WCPP 2026 adalah Bali International Convention Centre within The Westin, di enclave resort Nusa Dua yang dekat hotel, dining, dan white-sand beachfront.",
    venueCard2Title: "8 Room Experience",
    venueCard2Desc:
      "Format kongres dibagi ke delapan ruang untuk Inspirational Talk, Deep Talk, dan Out of The Box, sehingga alur acara terasa dinamis dan tidak monoton.",
    arrivalLabel: "Arrival Flow",
    arrivalTitle: "Checklist kedatangan tetap ada, tapi sekarang terasa lebih editorial.",
    arrivalDesc:
      "Disusun untuk peserta internasional agar tahu urutan praktis: dokumen, proses bandara, dan keputusan transport setelah keluar terminal.",
    routeLabel: "Route Atlas",
    routeTitle: "Titik lokasi utama dan alur kedatangan dibuat visual, bukan sekadar list.",
    routeDesc: "Ini versi yang lebih mudah dipahami: delegasi tiba di airport, bertemu help desk, memilih sarana transport, bergerak ke hotel zone Nusa Dua, lalu menuju venue dan opsi cultural visit.",
    pointAirportTitle: "Ngurah Rai Airport",
    pointAirportDesc: "Pintu kedatangan internasional.",
    pointHelpdeskTitle: "WCPP Help Desk",
    pointHelpdeskDesc: "Dekat baggage claim untuk orientasi awal.",
    pointTransitTitle: "Transit Pick-up",
    pointTransitDesc: "Taxi resmi, Grab Lounge, Gojek Lounge.",
    pointHotelTitle: "Hotel Zone",
    pointHotelDesc: "Cluster hotel Nusa Dua dan nearby resorts.",
    pointVenueTitle: "BICC Venue",
    pointVenueDesc: "Main congress area within The Westin.",
    pointCultureTitle: "Cultural Visit",
    pointCultureDesc: "Bangli visit dan local reintegration practice.",
    legendTaxi: "Resmi dan paling mudah untuk tamu asing.",
    legendRide: "Pakai lounge resmi di area airport.",
    legendShuttle: "Paling relevan jika panitia atau hotel menyiapkan transfer.",
    legendWalk: "Last-mile sekitar venue bisa tenang dan pendek.",
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
    transportTitle: "Sarana transport utama yang sebaiknya langsung ditonjolkan.",
    transportDesc:
      "Bali belum berbasis mass transit besar seperti MRT. Untuk booklet, alur transport umum dibingkai sebagai kombinasi layanan publik bandara, ride-hailing resmi, shuttle hotel, dan pergerakan singkat di kawasan Nusa Dua.",
    transportTaxi: "Opsi aman dan mudah dipahami peserta internasional dari arrival area.",
    transportGrab: "Gunakan lounge resmi di airport untuk pick-up yang lebih terarah.",
    transportGojek: "Alternatif ride-hailing dengan titik tunggu resmi dari airport.",
    transportShuttle: "Paling ideal untuk delegate journey jika tersedia dari hotel atau event.",
    transportWalk: "Sangat berguna di cluster Nusa Dua untuk last-mile yang santai.",
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
    specialTitle: "Bali bukan tempelan visual, tapi bagian dari pengalaman delegasi.",
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
    galleryTitle: "Tampilan spread-style dengan foto Bali yang kuat dan clean.",
    galleryDesc:
      "Tiga frame ini dipakai seperti editorial spread: satu untuk landscape, satu untuk culture, satu untuk journey. Semuanya masih bisa Anda ganti dari perangkat Anda.",
    gallerySlot1Title: "Coastline",
    gallerySlot1Hint: "Ideal untuk hero visual: laut, sunrise, atau aerial Nusa Dua.",
    galleryCard1Title: "Opening Mood",
    galleryCard1Desc: "Laut, tebing, dan ruang napas yang memberi kesan premium sejak awal.",
    gallerySlot2Title: "Culture",
    gallerySlot2Hint: "Ideal untuk budaya: tari, arsitektur, atau detail ornament Bali.",
    galleryCard2Title: "Cultural Accent",
    galleryCard2Desc: "Budaya dipakai sebagai aksen visual, bukan dekorasi tempelan.",
    gallerySlot3Title: "Journey",
    gallerySlot3Hint: "Ideal untuk ambience delegasi: resort, meeting zone, atau city arrival.",
    galleryCard3Title: "Delegate Journey",
    galleryCard3Desc: "Landscape hijau memberi penutup yang lebih lembut dan khas Bali.",
    quickAccessTitle: "Quick Access",
    quickAccessDesc:
      "Link penting tetap disediakan agar microsite ini mudah dipakai tim internal maupun calon peserta.",
    officialSite: "Official Site",
    register: "Register",
    openMap: "Open Map",
    invitationLetter: "Invitation Letter",
    contactBoxTitle: "Kontak",
    footerTitle: "Satu booklet, cukup untuk briefing cepat, presentasi, dan PDF.",
    footerNote:
      "Rekomendasi lanjutan: masukkan logo resmi WCPP, foto Bali resolusi tinggi, dan jika panitia sudah final, tambahkan detail shuttle hotel atau route transfer resmi agar booklet ini siap publish.",
    splashDesc: "Memuat booklet interaktif, siap untuk mobile briefing dan PDF export.",
    downloadPdf: "Download PDF",
  },
  en: {
    topbarTitle: "Digital Booklet • WCPP 2026",
    splashTitle: "Digital Booklet WCPP 2026",
    navCover: "Cover",
    navRoute: "Route Atlas",
    navTransport: "Transport",
    navGallery: "Bali Lens",
    heroEyebrow: "World Congress • Bali 2026",
    heroTitle: "Digital Booklet WCPP 2026",
    heroDesc:
      "This new format is designed like an editorial travel journal: clean, premium on mobile, distinctly Balinese, and focused on the delegate journey from airport to venue.",
    chipDateLabel: "Date",
    chipLocationLabel: "Location",
    chipThemeLabel: "Theme",
    chipMoodLabel: "Mood",
    chipMoodValue: "Editorial, clean, Balinese",
    logoSlotTitle: "WCPP Logo Slot",
    logoSlotHint: "Tap upload to place the official logo in PNG/SVG/JPG format.",
    logoCardTitle: "Logo block",
    logoCardHint: "The logo is treated like a cover masthead so it feels more premium.",
    uploadLogo: "Upload logo",
    upload: "Upload",
    reset: "Reset",
    overviewLabel: "Overview",
    arrivalNav: "Arrival",
    specialNav: "Special",
    galleryNav: "Gallery",
    overviewTitle: "General information that answers “what is this event and why does it matter?”",
    overviewDesc:
      "WCPP 2026 brings together global leaders, practitioners, researchers, and policymakers in probation, parole, and community-based justice. Bali is framed not merely as a destination, but as a stage aligned with healing, reintegration, and cultural hospitality.",
    overviewCard1Title: "Congress Snapshot",
    overviewCard1Desc:
      "Keynotes, panels, workshops, global networking, and exchange of best practices.",
    overviewCard2Title: "Venue Character",
    overviewCard2Desc:
      "BICC within The Westin gives the event a polished, secure, and highly visual international feel.",
    overviewCard3Title: "Bali Edge",
    overviewCard3Desc:
      "Local warmth, culture, and resort geography make the delegate journey feel more special.",
    overviewCard4Title: "Audience Fit",
    overviewCard4Desc:
      "Suitable for ministry delegates, correctional leaders, academics, development partners, re-entry practitioners, and community stakeholders.",
    coverKicker: "Healing Hearts, Safer Societies",
    coverTitle: "Justice in a Balinese frame.",
    coverText: "A global congress with a strong sense of place: warm, cultural, and highly visual.",
    formatLabel: "Format",
    formatValue: "Keynotes, panels, workshops, cultural visit",
    contactLabel: "Official Contact",
    venueLabel: "Venue",
    venueTitle: "Nusa Dua as a calm, premium, easy-to-read delegate zone.",
    venueDesc:
      "In this booklet, the venue is framed as an experience: premium, secure, easy to access from nearby hotels, and visually strong for international delegates.",
    venueCard1Desc:
      "The official venue is Bali International Convention Centre within The Westin, inside the Nusa Dua resort enclave close to hotels, dining, and white-sand beachfront.",
    venueCard2Title: "8 Room Experience",
    venueCard2Desc:
      "The congress uses eight rooms for Inspirational Talk, Deep Talk, and Out of The Box sessions, creating a dynamic event flow instead of a flat one-room format.",
    arrivalLabel: "Arrival Flow",
    arrivalTitle: "The arrival checklist remains, but now feels more editorial.",
    arrivalDesc:
      "Designed for international participants who need a practical sequence: documents, airport process, and transport decisions after leaving the terminal.",
    routeLabel: "Route Atlas",
    routeTitle: "Main locations and arrival flow are presented visually, not just as a list.",
    routeDesc: "A clearer version of the delegate journey: airport arrival, help desk, transport choice, hotel zone in Nusa Dua, venue arrival, then cultural visit option.",
    pointAirportTitle: "Ngurah Rai Airport",
    pointAirportDesc: "International arrival gateway.",
    pointHelpdeskTitle: "WCPP Help Desk",
    pointHelpdeskDesc: "Near baggage claim for first orientation.",
    pointTransitTitle: "Transit Pick-up",
    pointTransitDesc: "Official taxi, Grab Lounge, Gojek Lounge.",
    pointHotelTitle: "Hotel Zone",
    pointHotelDesc: "Nusa Dua hotel cluster and nearby resorts.",
    pointVenueTitle: "BICC Venue",
    pointVenueDesc: "Main congress area within The Westin.",
    pointCultureTitle: "Cultural Visit",
    pointCultureDesc: "Bangli visit and local reintegration practice.",
    legendTaxi: "Official and easiest for overseas guests.",
    legendRide: "Use the official airport lounges.",
    legendShuttle: "Most relevant when hotel or event transfers are provided.",
    legendWalk: "The venue last-mile can be calm and short.",
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
    transportTitle: "The main transport options that should be highlighted immediately.",
    transportDesc:
      "Bali is not built around large-scale mass transit like MRT systems. In this booklet, public mobility is framed as a combination of airport public services, official ride-hailing, hotel shuttles, and short-distance movement inside Nusa Dua.",
    transportTaxi: "A safe and easy option for international participants from the arrival area.",
    transportGrab: "Use the official airport lounge for more directed pick-up.",
    transportGojek: "An alternative ride-hailing option with an official waiting point.",
    transportShuttle: "Most ideal for the delegate journey when provided by hotel or event.",
    transportWalk: "Very useful inside the Nusa Dua cluster for a relaxed last-mile.",
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
    specialTitle: "Bali is not a pasted-on visual theme, but part of the delegate experience.",
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
    galleryTitle: "A spread-style layout with stronger, cleaner Bali imagery.",
    galleryDesc:
      "These three frames work like an editorial spread: one for landscape, one for culture, one for journey. All can still be replaced from your device.",
    gallerySlot1Title: "Coastline",
    gallerySlot1Hint: "Ideal for the hero visual: sea, sunrise, or a Nusa Dua aerial mood.",
    galleryCard1Title: "Opening Mood",
    galleryCard1Desc: "Sea, cliffs, and breathing room that create a premium first impression.",
    gallerySlot2Title: "Culture",
    gallerySlot2Hint: "Ideal for culture: dance, architecture, or ornamental Balinese detail.",
    galleryCard2Title: "Cultural Accent",
    galleryCard2Desc: "Culture is used as a visual accent, not pasted decoration.",
    gallerySlot3Title: "Journey",
    gallerySlot3Hint: "Ideal for delegate ambience: resort, meeting zone, or arrival context.",
    galleryCard3Title: "Delegate Journey",
    galleryCard3Desc: "Green landscape creates a softer closing that still feels Balinese.",
    quickAccessTitle: "Quick Access",
    quickAccessDesc:
      "Fast links to turn this booklet into a compact briefing tool: register, check the official site, open the map, or access the invitation letter.",
    officialSite: "Official Site",
    register: "Register",
    openMap: "Open Map",
    invitationLetter: "Invitation Letter",
    contactBoxTitle: "Contact",
    footerTitle: "One booklet is enough for quick briefing, presentation, and PDF export.",
    footerNote:
      "Recommended next step: insert the official WCPP logo, use high-resolution Bali imagery, and once finalized by the committee, add hotel shuttle or official transfer details so the booklet is ready to publish.",
    splashDesc: "Loading the interactive booklet, ready for mobile briefing and PDF export.",
    downloadPdf: "Download PDF",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  setupSplashScreen();
  setupLanguageSwitch();
  setupLogoSlot();
  setupPhotoSlots();
  setupChecklist();
  setupPrintButton();
});

const DEFAULT_LOGO = "./assets/wcpp-logo.jpeg";

function setupSplashScreen() {
  const splash = document.getElementById("splash-screen");
  if (!splash) {
    return;
  }

  document.body.classList.add("is-locked");
  window.setTimeout(() => {
    splash.classList.add("is-hidden");
    document.body.classList.remove("is-locked");
  }, 1200);
}

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
  const frame = document.getElementById("logo-frame");

  if (!input || !image || !placeholder || !reset || !frame) {
    return;
  }

  const savedLogo = localStorage.getItem(STORAGE.logo);
  if (savedLogo) {
    applyMedia(frame, image, placeholder, savedLogo);
  } else {
    applyMedia(frame, image, placeholder, DEFAULT_LOGO);
  }

  input.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const dataUrl = await readAsDataUrl(file);
    localStorage.setItem(STORAGE.logo, dataUrl);
    applyMedia(frame, image, placeholder, dataUrl);
    input.value = "";
  });

  reset.addEventListener("click", () => {
    localStorage.removeItem(STORAGE.logo);
    applyMedia(frame, image, placeholder, DEFAULT_LOGO);
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

function setupPrintButton() {
  const button = document.getElementById("print-booklet");
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    window.print();
  });
}

function setPhotoCard(card, image, src) {
  image.src = src;
  image.hidden = false;
  card.classList.add("has-image");
}

function applyMedia(frame, image, placeholder, dataUrl) {
  image.src = dataUrl;
  image.hidden = false;
  if (placeholder) {
    placeholder.hidden = true;
  }
  if (frame) {
    frame.classList.add("has-brand");
  }
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
