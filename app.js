const introCurtain = document.getElementById("introCurtain");
const introLoaderBar = document.getElementById("introLoaderBar");
const mainViewport = document.getElementById("mainViewport");
const replayIntroLogo = document.getElementById("replayIntroLogo");

let introTimer = null;

function revealMainStage() {
  if (!introCurtain) return;
  if (introTimer) clearTimeout(introTimer);
  introCurtain.classList.add("slide-up");
  introCurtain.setAttribute("aria-hidden", "true");
  if (mainViewport) mainViewport.classList.add("revealed");
  document.body.classList.remove("intro-locked");
}

function playIntroSequence() {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('nointro')) {
    document.body.classList.add('no-intro');
    revealMainStage();
    return;
  }
  if (!introCurtain) return;
  document.body.classList.add("intro-locked");
  introCurtain.classList.remove("slide-up");
  introCurtain.setAttribute("aria-hidden", "false");
  if (mainViewport) mainViewport.classList.remove("revealed");

  if (introLoaderBar) {
    introLoaderBar.classList.remove("is-loading");

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        introLoaderBar.classList.add("is-loading");

      });
    });
  }

  introTimer = setTimeout(revealMainStage, 800);
}

window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has("nointro")) {
    revealMainStage();
  } else {
    playIntroSequence();
  }
});

if (introCurtain) {
  introCurtain.addEventListener("click", revealMainStage);
}

if (replayIntroLogo) {
  replayIntroLogo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    playIntroSequence();
  });
}

// Deduplicated roster of all 60 official L3 Remix & DJ Team members.
const rawMembersList = [
  {
    id: "willy",
    name: "Willy L3",
    isLeader: true,
    photo: "assets/willy-l3.jpg?v=3",
    city: "Jakarta",
    province: "DKI Jakarta",
    role: "Ketua L3 • Domisili Jakarta",
    soundcloudUrl: "https://soundcloud.com/aliando-remix",
    tiktokUrl: "https://www.tiktok.com/@willy_l3",
    bio: "Ketua L3 Remix & DJ Team sekaligus penggerak utama kolektif di ibu kota Jakarta. Memimpin arah kreatif dan solidaritas seluruh personel L3 lintas provinsi.",
    quote: "Musik adalah soal rasa, persaudaraan, dan energi yang menyatu di lantai dansa."
  },
  {
    id: "fariz",
    name: "Fariz L3",
    photo: "assets/fariz-l3.jpg?v=4",
    city: "Jakarta",
    province: "DKI Jakarta",
    role: "Domisili Jakarta",
    soundcloudUrl: "https://soundcloud.com/farizl3rmx",
    tiktokUrl: "https://www.tiktok.com/@farizl3rmx",
    bio: "Personel L3 Remix & DJ Team asal Jakarta yang dikenal lewat racikan musik dan aransemen panggung yang dinamis serta presisi mixing tinggi.",
    quote: "Menghadirkan racikan musik yang bersih, enerjik, dan berkarakter khas L3."
  },
  {
    id: "use",
    name: "Use L3",
    photo: "assets/use-l3.jpg",
    city: "Jakarta",
    province: "DKI Jakarta",
    role: "Domisili Jakarta",
    soundcloudUrl: "https://soundcloud.com/user-324138404",
    tiktokUrl: "https://www.tiktok.com/@use_l3rmx",
    bio: "Memperkuat lini Jakarta bersama Willy L3, Fariz L3, Agas L3, dan DTo L3 dengan karakter aransemen modern serta standar produksi audio kelas klub.",
    quote: "Satu bendera L3 Remix, berkarya dengan dedikasi penuh."
  },
  {
    id: "fatah",
    name: "Fatah L3",
    photo: "assets/fatah-l3.jpg",
    city: "Palembang",
    province: "Sumatera Selatan",
    role: "Domisili Palembang",
    soundcloudUrl: "https://soundcloud.com/fvcktah",
    tiktokUrl: "https://www.tiktok.com/@fatahlthree",
    bio: "Representatif L3 Remix & DJ Team dari Palembang yang dikenal dengan aransemen ketukan rapat, kualitas mastering yang bertenaga, dan produktivitas karya digital.",
    quote: "Dari Palembang membawa warna musik L3 yang padat dan penuh energi."
  },
  {
    id: "agas",
    name: "Agas L3",
    photo: "assets/agas-l3.jpg",
    city: "Jakarta",
    province: "DKI Jakarta",
    role: "Domisili Jakarta",
    soundcloudUrl: "https://soundcloud.com/fannie-deng-huan-ni",
    tiktokUrl: "https://www.tiktok.com/@agassi_09",
    bio: "Personel L3 Remix & DJ Team asal Jakarta dengan presisi mixing tinggi serta karakter aransemen panggung yang enerjik.",
    quote: "Setiap frekuensi dan transisi dirancang untuk menghidupkan lantai dansa bersama L3."
  },
  {
    id: "djorgie",
    name: "Djorgie L3",
    photo: "assets/djorgie-l3.jpg",
    city: "Pekanbaru",
    province: "Riau",
    role: "Domisili Pekanbaru",
    soundcloudUrl: "https://soundcloud.com/djorgiel3_1st",
    tiktokUrl: "https://www.tiktok.com/@djorgie_l3",
    bio: "Personel L3 Remix & DJ Team asal Pekanbaru yang memperkuat lini Riau bersama Wandri L3, Riski Melvo L3, dan Adit L3 dengan sentuhan aransemen panggung yang dinamis serta kualitas mixing yang solid.",
    quote: "Dari Pekanbaru menghadirkan getaran dan energi panggung terbaik bersama keluarga besar L3 Remix."
  },
  {
    id: "wilchi",
    name: "Wilchi L3",
    photo: "assets/wilchi-l3.jpg",
    city: "Medan",
    province: "Sumatera Utara",
    role: "Domisili Medan",
    bio: "Personel L3 Remix & DJ Team asal Medan dengan karakter aransemen elegan dan standar kualitas produksi audio profesional.",
    quote: "Dari Medan menyatukan kualitas audio dan energi terbaik bersama keluarga besar L3."
  },
  {
    id: "echo",
    name: "Echo L3",
    photo: "assets/echo-l3.jpg",
    city: "Banjarmasin",
    province: "Kalimantan Selatan",
    role: "Domisili Banjarmasin",
    bio: "Personel L3 Remix & DJ Team asal Banjarmasin yang dikenal dengan karakter produksi modern dan dinamika suara panggung yang tajam.",
    quote: "Membawa dentuman dan estetika musik elektronik L3 Remix dari Banjarmasin."
  },
  {
    id: "dto",
    name: "DTo L3",
    photo: "assets/dto-l3.jpg",
    city: "Jakarta",
    province: "DKI Jakarta",
    role: "Domisili Jakarta",
    soundcloudUrl: "https://soundcloud.com/dto_l3",
    tiktokUrl: "https://www.tiktok.com/@dto.l3",
    bio: "Personel L3 Remix & DJ Team asal Jakarta dengan gaya aransemen berkelas serta kualitas produksi klub malam yang solid.",
    quote: "Dari Jakarta menghadirkan standar kualitas produksi terbaik bersama keluarga besar L3."
  },
  {
    id: "wandri",
    name: "Wandri L3",
    photo: "assets/wandri-l3.jpg",
    city: "Pekanbaru",
    province: "Riau",
    role: "Domisili Pekanbaru",
    soundcloudUrl: "https://soundcloud.com/wandri-zainudin-735410592",
    tiktokUrl: "https://www.tiktok.com/@wandril3",
    bio: "Personel L3 Remix & DJ Team asal Pekanbaru dengan sentuhan aransemen khas dan kualitas mixing yang matang.",
    quote: "Dari Pekanbaru mempersembahkan harmoni dan dentuman terbaik bersama L3 Remix."
  },
  {
    id: "rain",
    name: "Rain L3",
    photo: "assets/rain-l3.jpg",
    city: "Kalimantan Utara",
    province: "Kalimantan Utara",
    role: "Domisili Kalimantan Utara",
    bio: "Personel L3 Remix & DJ Team asal Kalimantan Utara dengan karakter aransemen elegan dan presisi mixing panggung yang solid.",
    quote: "Dari Kalimantan Utara menghadirkan energi dan kualitas produksi terbaik bersama keluarga besar L3."
  },
  {
    id: "riski-melvo",
    name: "Riski Melvo L3",
    photo: "assets/riski-melvo-l3.jpg",
    city: "Pekanbaru",
    province: "Riau",
    role: "Domisili Pekanbaru",
    soundcloudUrl: "https://soundcloud.com/melvo-channel",
    tiktokUrl: "https://www.tiktok.com/@riskimelvo",
    bio: "Personel L3 Remix & DJ Team asal Pekanbaru yang memperkuat lini Riau bersama Wandri L3, Djorgie L3, dan Adit L3 dengan karakter aransemen modern.",
    quote: "Dari Pekanbaru menghadirkan racikan musik berkualitas tinggi bersama keluarga besar L3 Remix."
  },
  {
    id: "teddy-yang",
    name: "Teddy Yang L3",
    photo: "assets/teddy-yang-l3.jpg?v=2",
    city: "Pontianak, Kalbar",
    province: "Kalimantan Barat",
    role: "Domisili Pontianak, Kalbar",
    bio: "Personel L3 Remix & DJ Team asal Pontianak yang memperkuat lini Kalimantan Barat bersama NSPutra L3, Ihsan L3, dan Ekky L3 dengan karakter produksi modern dan penampilan panggung berkelas.",
    quote: "Dari Pontianak membawa standar produksi dan energi panggung terbaik bersama keluarga besar L3 Remix."
  },
  {
    id: "adit",
    name: "Adit L3",
    photo: "assets/adit-l3.jpg",
    city: "Pekanbaru",
    province: "Riau",
    role: "Domisili Pekanbaru, Riau"
  },
  {
    id: "adtyastya",
    name: "Adtyastya L3",
    photo: "assets/adtyastya-l3.jpg?v=2",
    city: "Lampung",
    province: "Lampung",
    role: "Domisili Lampung"
  },
  {
    id: "adyartha",
    name: "Adyartha L3",
    photo: "assets/adyartha-l3.jpg",
    city: "Kediri",
    province: "Jawa Timur",
    role: "Domisili Kediri"
  },
  {
    id: "alam",
    name: "Alam L3",
    photo: "assets/alam-l3.jpg",
    city: "Tangerang",
    province: "Banten",
    role: "Domisili Tangerang"
  },
  {
    id: "arjun",
    name: "Arjun L3",
    photo: "assets/arjun-l3.jpg",
    city: "Denpasar, Bali",
    province: "Bali",
    role: "Domisili Denpasar, Bali"
  },
  {
    id: "arthur",
    name: "Arthur L3",
    photo: "assets/arthur-l3.jpg",
    city: "Gresik",
    province: "Jawa Timur",
    role: "Domisili Gresik"
  },
  {
    id: "riskydefay",
    name: "Riskydefay L3",
    photo: "assets/riskydefay-l3.jpg",
    city: "Manado",
    province: "Sulawesi Utara",
    role: "Domisili Manado"
  },
  {
    id: "deff",
    name: "Deff L3",
    photo: "assets/deff-l3.jpg",
    city: "Yogyakarta",
    province: "DI Yogyakarta",
    role: "Domisili Yogyakarta"
  },
  {
    id: "dion-rulmelta",
    name: "Dion Rulmelta L3",
    photo: "assets/dion-rulmelta-l3.jpg",
    city: "Padang",
    province: "Sumatera Barat",
    role: "Domisili Padang"
  },
  {
    id: "dion-tualaka",
    name: "Dion Tualaka L3",
    photo: "assets/dion-tualaka-l3.jpg",
    city: "Kupang",
    province: "Nusa Tenggara Timur",
    role: "Domisili Kupang"
  },
  {
    id: "ekky",
    name: "Ekky L3",
    photo: "assets/ekky-l3.jpg",
    city: "Kalbar",
    province: "Kalimantan Barat",
    role: "Domisili Kalbar"
  },
  {
    id: "endra",
    name: "Endra L3",
    photo: "assets/endra-l3.jpg",
    city: "Batam & Karimun",
    province: "Kepulauan Riau",
    role: "Domisili Batam & Karimun"
  },
  {
    id: "exorcism",
    name: "Exorcism (Fadhill) L3",
    photo: "assets/exorcism-l3.jpg",
    city: "Barabai",
    province: "Kalimantan Selatan",
    role: "Domisili Barabai"
  },
  {
    id: "fikri",
    name: "Fikri L3",
    photo: "assets/fikri-l3.jpg",
    city: "Banjarmasin",
    province: "Kalimantan Selatan",
    role: "Domisili Banjarmasin"
  },
  {
    id: "gusraex",
    name: "Gusraex L3",
    photo: "assets/gusraex-l3.jpg",
    city: "Karangasem, Bali",
    province: "Bali",
    role: "Domisili Karangasem, Bali"
  },
  {
    id: "hendra",
    name: "Hendra L3",
    photo: "assets/hendra-l3.jpg",
    city: "Banjarmasin",
    province: "Kalimantan Selatan",
    role: "Domisili Banjarmasin"
  },
  {
    id: "ihsan",
    name: "Ihsan L3",
    photo: "assets/ihsan-l3.jpg",
    city: "Pontianak, Kalbar",
    province: "Kalimantan Barat",
    role: "Domisili Pontianak, Kalbar"
  },
  {
    id: "indrazka",
    name: "Indrazka L3",
    photo: "assets/indrazka-l3.jpg",
    city: "Balikpapan",
    province: "Kalimantan Timur",
    role: "Domisili Balikpapan"
  },
  {
    id: "iqball",
    name: "Iqball L3",
    photo: "assets/iqball-l3.jpg",
    city: "Balangan, Kalsel",
    province: "Kalimantan Selatan",
    role: "Domisili Balangan, Banjarmasin"
  },
  {
    id: "laith",
    name: "Laith L3",
    photo: "assets/laith-l3.jpg",
    city: "Johor, Malaysia",
    province: "Malaysia",
    role: "Domisili Johor, Malaysia"
  },
  {
    id: "masdy",
    name: "MasDy L3",
    photo: "assets/masdy-l3.jpg",
    city: "Kotabaru",
    province: "Kalimantan Selatan",
    role: "Domisili Kotabaru"
  },
  {
    id: "nasky",
    name: "Nasky L3",
    photo: "assets/nasky-l3.jpg",
    city: "Banda Aceh",
    province: "Aceh",
    role: "Domisili Banda Aceh"
  },
  {
    id: "rafael",
    name: "Rafael L3",
    photo: "assets/rafael-l3.jpg",
    city: "Tangerang Selatan",
    province: "Banten",
    role: "Domisili Tangerang Selatan"
  },
  {
    id: "riecky",
    name: "Riecky L3",
    photo: "assets/riecky-l3.jpg",
    city: "Banjarmasin",
    province: "Kalimantan Selatan",
    role: "Domisili Banjarmasin"
  },
  {
    id: "rival",
    name: "Rival L3",
    photo: "assets/rival-l3.jpg",
    city: "Padang",
    province: "Sumatera Barat",
    role: "Domisili Padang"
  },
  {
    id: "rivaldii",
    name: "Rivaldii L3",
    photo: "assets/rivaldii-l3.jpg",
    city: "Marabahan, Kalsel",
    province: "Kalimantan Selatan",
    role: "Domisili Marabahan, Kalsel"
  },
  {
    id: "sahrul-agam",
    name: "Sahrul Agam L3",
    photo: "assets/sahrul-agam-l3.jpg",
    city: "Medan",
    province: "Sumatera Utara",
    role: "Domisili Medan"
  },
  {
    id: "weiliang",
    name: "Weiliang L3",
    photo: "assets/weiliang-l3.jpg",
    city: "Batam",
    province: "Kepulauan Riau",
    role: "Domisili Batam"
  },
  {
    id: "xsan",
    name: "X'San L3",
    photo: "assets/xsan-l3.jpg",
    city: "Kotabaru",
    province: "Kalimantan Selatan",
    role: "Domisili Kotabaru"
  },
  {
    id: "zikry",
    name: "Zikry L3",
    photo: "assets/zikry-l3.jpg",
    city: "Asam-Asam",
    province: "Kalimantan Selatan",
    role: "Domisili Asam-Asam"
  },
  {
    id: "delon",
    name: "Delon L3",
    photo: "assets/delon-l3.jpg",
    city: "Denpasar, Bali",
    province: "Bali",
    role: "Domisili Denpasar, Bali",
    bio: "Personel L3 Remix & DJ Team asal Denpasar yang memperkuat formasi Bali bersama Yogik L3, Arjun L3, Arief L3, dan Gusraex L3 dengan aransemen panggung modern dan dinamika audio klub yang solid.",
    quote: "Dari Denpasar Bali menghadirkan energi dan racikan musik terbaik bersama keluarga besar L3 Remix."
  },
  {
    id: "nsputra",
    name: "NSPutra L3",
    photo: "assets/nsputra-l3.jpg",
    city: "Pontianak, Kalbar",
    province: "Kalimantan Barat",
    role: "Domisili Pontianak, Kalbar",
    bio: "Personel L3 Remix & DJ Team asal Pontianak yang memperkuat lini Kalimantan Barat bersama Teddy Yang L3, Ihsan L3, dan Ekky L3 dengan karakter aransemen panggung modern.",
    quote: "Dari Pontianak Kalimantan Barat menghadirkan ritme dan dentuman audio terbaik bersama keluarga besar L3 Remix."
  },
  {
    id: "naz",
    name: "Naz L3",
    photo: "assets/naz-l3.jpg?v=2",
    city: "Manado",
    province: "Sulawesi Utara",
    role: "Domisili Manado",
    bio: "Personel L3 Remix & DJ Team asal Manado yang memperkuat lini Sulawesi Utara bersama Riskydefay L3 dengan karakter musik elektronik yang enerjik dan dinamis.",
    quote: "Dari Manado menyatukan energi dan kreasi audio terbaik bersama keluarga besar L3 Remix."
  },
  {
    id: "faisal",
    name: "Faisal L3",
    photo: "assets/faisal-l3.jpg",
    city: "Batam",
    province: "Kepulauan Riau",
    role: "Domisili Batam",
    bio: "Personel L3 Remix & DJ Team asal Batam yang memperkuat lini Kepulauan Riau bersama Weiliang L3, Andrea L3, dan Endra L3 dengan karakter aransemen panggung modern dan presisi mixing tinggi.",
    quote: "Dari Batam menghadirkan dentuman dan kualitas musik elektronik terbaik bersama keluarga besar L3 Remix."
  },
  {
    id: "digo",
    name: "Digo L3",
    city: "Padang",
    province: "Sumatera Barat",
    role: "Domisili Padang"
  },
  {
    id: "amin",
    name: "Amin L3",
    city: "Martapura",
    province: "Kalimantan Selatan",
    role: "Domisili Martapura"
  },
  {
    id: "yogik",
    name: "Yogik L3",
    city: "Badung, Bali",
    province: "Bali",
    role: "Domisili Badung, Bali"
  },
  {
    id: "pay",
    name: "Pay L3",
    city: "Medan",
    province: "Sumatera Utara",
    role: "Domisili Medan"
  },
  {
    id: "cagi",
    name: "Cagi L3",
    city: "Banjarmasin",
    province: "Kalimantan Selatan",
    role: "Domisili Banjarmasin"
  },
  {
    id: "kinyo",
    name: "Kinyo L3",
    city: "Surabaya",
    province: "Jawa Timur",
    role: "Domisili Surabaya"
  },
  {
    id: "rassid",
    name: "Rassid L3",
    city: "Payakumbuh, Sumbar",
    province: "Sumatera Barat",
    role: "Domisili Payakumbuh, Sumbar"
  },
  {
    id: "arief",
    name: "Arief L3",
    city: "Denpasar, Bali",
    province: "Bali",
    role: "Domisili Denpasar, Bali"
  },
  {
    id: "fathir",
    name: "Fathir L3",
    city: "Payakumbuh, Sumbar",
    province: "Sumatera Barat",
    role: "Domisili Payakumbuh, Sumbar"
  },
  {
    id: "jordan",
    name: "Jordan L3",
    city: "Denpasar, Bali",
    province: "Bali",
    role: "Domisili Denpasar, Bali"
  },
  {
    id: "andrea",
    name: "Andrea L3",
    city: "Batam",
    province: "Kepulauan Riau",
    role: "Domisili Batam"
  },
  {
    id: "ferdy",
    name: "Ferdy L3",
    city: "Sidrap",
    province: "Sulawesi Selatan",
    role: "Domisili Sidrap"
  },
  {
    id: "aki",
    name: "Aki L3",
    city: "Japan",
    province: "Japan",
    role: "Domisili Japan",
    bio: "Representatif internasional L3 Remix & DJ Team asal Jepang (Japan) yang memperluas jangkauan kolaborasi musik elektronik dan remixer L3 ke tingkat global.",
    quote: "Dari Jepang membawa kreasi dan energi musik elektronik bersama keluarga besar L3 Remix."
  }
];

const membersData = rawMembersList.map((m, idx) => ({
  ...m,
  numCode: String(idx + 1).padStart(2, "0"),
  soundcloudUrl: m.soundcloudUrl || `https://soundcloud.com/search?q=${encodeURIComponent(m.name)}`,
  tiktokUrl: m.tiktokUrl || `https://www.tiktok.com/search?q=${encodeURIComponent(m.name)}`,
  bio: m.bio || `Anggota resmi keluarga besar L3 Remix & DJ Team yang berdomisili di ${m.city} (${m.province}).`,
  quote: m.quote || `Membawa semangat dan kualitas produksi audio L3 Remix dari ${m.city} untuk skena musik elektronik.`
}));

const membersGridEl = document.getElementById("membersGrid");
const membersStatusEl = document.getElementById("membersStatus");
const cityFilterBar = document.getElementById("cityFilterBar");
const memberSearchInput = document.getElementById("memberSearchInput");

let activeCityFilter = "all";
let searchQuery = "";
let lastFocusedElement = null;

function setCityFilter(city) {
  activeCityFilter = city;
  if (cityFilterBar) {
    cityFilterBar.querySelectorAll(".filter-chip").forEach(c => {
      const isMatch = c.dataset.city === city;
      c.classList.toggle("active", isMatch);
      c.setAttribute("aria-pressed", isMatch ? "true" : "false");
    });
  }
  renderMembers();
}

function buildCityFilters() {
  if (!cityFilterBar) return;

  const cityCounts = {};
  membersData.forEach(m => {
    cityCounts[m.city] = (cityCounts[m.city] || 0) + 1;
  });

  const sortedCities = Object.keys(cityCounts).sort((a, b) => cityCounts[b] - cityCounts[a]);

  const buttonsHtml = [
    `<button type="button" class="filter-chip active" data-city="all" aria-pressed="true">Semua Anggota (${membersData.length})</button>`,
    ...sortedCities.map(city => `
      <button type="button" class="filter-chip" data-city="${city}" aria-pressed="false">${city} (${cityCounts[city]})</button>
    `)
  ].join("");

  cityFilterBar.innerHTML = buttonsHtml;

  cityFilterBar.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      setCityFilter(chip.dataset.city);
    });
  });
}

function showStatusState(type, message, detail) {
  if (!membersStatusEl) return;
  membersStatusEl.hidden = false;
  membersStatusEl.innerHTML = `
    <h3>${message}</h3>
    <p>${detail}</p>
    ${type === "empty" ? `<button type="button" class="btn-reset-filter" id="resetFilterBtn">Tampilkan Semua ${membersData.length} Anggota</button>` : ""}
  `;
  const resetBtn = document.getElementById("resetFilterBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchQuery = "";
      if (memberSearchInput) memberSearchInput.value = "";
      setCityFilter("all");
    });
  }
}

function renderMembers() {
  if (!membersGridEl) return;

  try {
    const q = searchQuery.trim().toLowerCase();

    const list = membersData.filter(m => {
      const matchCity = activeCityFilter === "all" || m.city.toLowerCase() === activeCityFilter.toLowerCase();
      const matchQuery = !q || m.name.toLowerCase().includes(q) || m.city.toLowerCase().includes(q) || m.province.toLowerCase().includes(q);
      return matchCity && matchQuery;
    });

    if (list.length === 0) {
      membersGridEl.innerHTML = "";
      showStatusState(
        "empty",
        "Tidak ada anggota yang cocok dengan pencarian",
        `Pencarian "${searchQuery || activeCityFilter}" belum menemukan personel yang sesuai. Silakan ubah kata kunci atau tampilkan seluruh daftar.`
      );
      return;
    }

    if (membersStatusEl) {
      membersStatusEl.hidden = true;
      membersStatusEl.innerHTML = "";
    }

    membersGridEl.innerHTML = list.map(member => `
      <article class="member-card ${member.isLeader ? "leader-card" : ""}" id="member-${member.id}">
        <div class="card-backdrop">
          ${member.photo
            ? `<img src="${member.photo}" alt="Potret ${member.name}" width="400" height="465" loading="lazy" decoding="async" />`
            : `<div class="card-backdrop-monogram">
                 <img src="assets/l3-logo.png" alt="Lambang L3 Remix untuk ${member.name}" width="130" height="118" loading="lazy" decoding="async" />
                 <small>L3 REMIX • #${member.numCode}</small>
               </div>`
          }
        </div>
        <div class="card-shade" aria-hidden="true"></div>

        <div class="card-top-pills">
          <span class="city-badge">${member.city.toUpperCase()}</span>
          ${member.isLeader
            ? `<span class="leader-badge">KETUA L3</span>`
            : `<span class="city-badge">#${member.numCode}</span>`
          }
        </div>

        <div class="card-bottom-overlay">
          <h3 class="member-name">${member.name}</h3>
          <div class="member-role">${member.role}</div>

          <div class="card-action-bar">
            <button type="button" class="btn-card-action primary-act" data-member-id="${member.id}" aria-label="Lihat profil ${member.name}">
              Profil
            </button>
            <a href="${member.soundcloudUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action" aria-label="SoundCloud ${member.name}">
              SoundCloud
            </a>
            <a href="${member.tiktokUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action" aria-label="TikTok ${member.name}">
              TikTok
            </a>
          </div>
        </div>
      </article>
    `).join("");

    membersGridEl.querySelectorAll("[data-member-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const member = membersData.find(m => m.id === btn.dataset.memberId);
        if (member) {
          lastFocusedElement = btn;
          showMemberModal(member);
        }
      });
    });
  } catch (err) {
    membersGridEl.innerHTML = "";
    showStatusState(
      "error",
      "Gagal memuat daftar anggota",
      "Terjadi kendala saat menampilkan data anggota. Silakan muat ulang halaman."
    );
  }
}

if (memberSearchInput) {
  memberSearchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMembers();
  });
}

const portraitMosaicGrid = document.getElementById("portraitMosaicGrid");
const mosaicCount = document.getElementById("mosaicCount");

let mosaicSearchQuery = "";

function renderPortraitMosaic() {
  if (!portraitMosaicGrid) return;
  // 3 baris x 4 kolom = 12 personel teratas yang memiliki foto studio
  const photographed = membersData.filter(m => m.photo).slice(0, 12);
  portraitMosaicGrid.innerHTML = photographed.map((m, idx) => {
    const place = m.city.split(",")[0];
    const roleLabel = m.isLeader ? `Ketua • ${place}` : place;
    const loadAttrs = idx < 4 ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"';
    return `
      <a href="#members" class="mosaic-item${m.isLeader ? " leader-mosaic" : ""}" data-focus-member="${m.id}">
        <img src="${m.photo}" alt="Potret ${m.name}, ${place}" width="320" height="400" ${loadAttrs} />
        <div class="mosaic-caption">
          <span class="mosaic-role">${roleLabel}</span>
          <strong>${m.name}</strong>
        </div>
      </a>`;
  }).join("");

  portraitMosaicGrid.querySelectorAll("[data-focus-member]").forEach(item => {
    item.addEventListener("click", (e) => {
      const memberId = item.getAttribute("data-focus-member");
      const member = membersData.find(m => m.id === memberId);
      if (member) {
        e.preventDefault();
        lastFocusedElement = item;
        showMemberModal(member);
      }
    });
  });
}

renderPortraitMosaic();

const mosaicQuickSearch = document.getElementById("mosaicQuickSearch");
if (mosaicQuickSearch) {
  mosaicQuickSearch.addEventListener("input", (e) => {
    mosaicSearchQuery = e.target.value;
    renderPortraitMosaic();
  });
}

if (portraitMosaicGrid) {
  portraitMosaicGrid.querySelectorAll(".mosaic-item").forEach((el, i) => el.style.setProperty("--i", i));
  const syncMosaicFade = () => {
    const g = portraitMosaicGrid;
    g.classList.toggle("at-end", g.scrollTop + g.clientHeight >= g.scrollHeight - 4);
  };
  portraitMosaicGrid.addEventListener("scroll", syncMosaicFade, { passive: true });
  window.addEventListener("resize", syncMosaicFade);
  syncMosaicFade();
}

document.querySelectorAll("[data-focus-member]").forEach(item => {
  item.addEventListener("click", (e) => {
    const memberId = item.getAttribute("data-focus-member");
    const member = membersData.find(m => m.id === memberId);
    if (member) {
      e.preventDefault();
      lastFocusedElement = item;
      showMemberModal(member);
    }
  });
});

const citiesBentoGrid = document.getElementById("citiesBentoGrid");

function renderCitiesNetwork() {
  if (!citiesBentoGrid) return;

  const grouped = {};
  membersData.forEach(m => {
    if (!grouped[m.city]) {
      grouped[m.city] = {
        city: m.city,
        province: m.province,
        members: []
      };
    }
    grouped[m.city].members.push(m.isLeader ? `${m.name} (Ketua L3)` : m.name);
  });

  const cityList = Object.values(grouped).sort((a, b) => {
    if (a.city === "Jakarta") return -1;
    if (b.city === "Jakarta") return 1;
    return b.members.length - a.members.length;
  });

  citiesBentoGrid.innerHTML = cityList.map(item => `
    <button type="button" class="city-ledger-item ${item.city === "Jakarta" ? "featured-city" : ""}" data-network-city="${item.city}" aria-label="Filter anggota domisili ${item.city} (${item.members.length} anggota)">
      <span class="city-ledger-name">${item.city}</span>
      <span class="city-count-badge">${item.members.length}</span>
    </button>
  `).join("");

  citiesBentoGrid.querySelectorAll("[data-network-city]").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetCity = btn.getAttribute("data-network-city");
      searchQuery = "";
      if (memberSearchInput) memberSearchInput.value = "";
      setCityFilter(targetCity);
      const membersSection = document.getElementById("members");
      if (membersSection) {
        membersSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

buildCityFilters();
renderMembers();
renderCitiesNetwork();

const modalBackdrop = document.getElementById("modalBackdrop");
const modalBody = document.getElementById("modalBody");
const modalCloseBtn = document.getElementById("modalCloseBtn");

function showMemberModal(member) {
  modalBody.innerHTML = `
    ${member.photo ? `
      <div class="modal-portrait-wrap">
        <img src="${member.photo}" alt="Potret ${member.name}" width="450" height="270" />
      </div>
    ` : `
      <div class="modal-logo-wrap">
        <img src="assets/l3-logo.png" alt="Lambang L3 Remix" width="120" height="110" />
      </div>
    `}

    <div class="modal-meta-row">
      <span class="modal-city-label">
        ${member.city.toUpperCase()} • ${member.province.toUpperCase()}
      </span>
      ${member.isLeader ? `<span class="leader-badge">KETUA L3</span>` : ""}
    </div>

    <h3 id="modalTitle" class="modal-member-title">
      ${member.name}
    </h3>
    <div class="modal-member-role">
      ${member.role}
    </div>

    <p class="modal-member-bio">
      ${member.bio}
    </p>

    <blockquote class="modal-member-quote">
      "${member.quote}"
    </blockquote>

    <div class="modal-actions-grid">
      <a href="${member.soundcloudUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action primary-act modal-btn">
        SoundCloud Resmi
      </a>
      <a href="${member.tiktokUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-action modal-btn">
        TikTok Resmi
      </a>
    </div>
  `;

  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  if (modalCloseBtn) modalCloseBtn.focus();
}

function closeModal() {
  if (!modalBackdrop.classList.contains("open")) return;
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

modalCloseBtn.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

const sidebar = document.getElementById("sidebar");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const menuLinks = document.querySelectorAll(".menu-link");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    mobileMenuBtn.textContent = isOpen ? "Tutup" : "Menu";
  });
}

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    sidebar.classList.remove("open");
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      mobileMenuBtn.textContent = "Menu";
    }
  });
});

const trackedSections = ["home", "members", "history", "network", "album"]
  .map(id => document.getElementById(id))
  .filter(Boolean);

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + window.innerHeight * 0.32;
  let currentId = "home";

  trackedSections.forEach(sec => {
    if (scrollPos >= sec.offsetTop) {
      currentId = sec.id;
    }
  });

  menuLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
}, { passive: true });


// ==========================================
// Preview Audio Player (L3 Remix Tracks)
// ==========================================
const previewTracks = [
  {
    id: "fatah-goodbye-2026",
    title: "Goodbye 2026 #LOCKED",
    artist: "Fatah L3 (Palembang)",
    tag: "PREVIEW REMIX",
    file: "assets/fatah-l3-goodbye-2026.mp3"
  }
];

let currentTrackIndex = 0;
const audioPlayer = new Audio();
audioPlayer.preload = "none";

const sidebarPlayBtn = document.getElementById("sidebarPlayBtn");
const sidebarPlayBtnText = document.getElementById("sidebarPlayBtnText");
const playIconSvg = document.getElementById("playIconSvg");
const playerMiniDisc = document.getElementById("playerMiniDisc");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerDuration = document.getElementById("playerDuration");
const playerProgressBar = document.getElementById("playerProgressBar");
const playerProgressFill = document.getElementById("playerProgressFill");
const sidebarPlayerTitle = document.getElementById("sidebarPlayerTitle");
const sidebarPlayerArtist = document.getElementById("sidebarPlayerArtist");
const sidebarPlayerTag = document.getElementById("sidebarPlayerTag");

function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
}

function updatePlayUi(isPlaying) {
  if (!sidebarPlayBtn) return;
  if (isPlaying) {
    sidebarPlayBtn.classList.add("is-playing");
    if (sidebarPlayBtnText) sidebarPlayBtnText.textContent = "Pause";
    if (playIconSvg) {
      playIconSvg.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    }
    if (playerMiniDisc) playerMiniDisc.classList.add("spinning");
  } else {
    sidebarPlayBtn.classList.remove("is-playing");
    if (sidebarPlayBtnText) sidebarPlayBtnText.textContent = "Play Preview";
    if (playIconSvg) {
      playIconSvg.innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
    if (playerMiniDisc) playerMiniDisc.classList.remove("spinning");
  }
}

if (sidebarPlayBtn) {
  sidebarPlayBtn.addEventListener("click", () => {
    if (!audioPlayer.src) {
      audioPlayer.src = previewTracks[currentTrackIndex].file;
    }
    if (audioPlayer.paused) {
      audioPlayer.play().then(() => {
        updatePlayUi(true);
      }).catch(err => {
        console.warn("Audio play prevented:", err);
      });
    } else {
      audioPlayer.pause();
      updatePlayUi(false);
    }
  });
}

audioPlayer.addEventListener("timeupdate", () => {
  if (playerCurrentTime) {
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
  }
  if (playerDuration && audioPlayer.duration) {
    playerDuration.textContent = formatTime(audioPlayer.duration);
    const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    if (playerProgressFill) {
      playerProgressFill.style.setProperty("--progress-pct", `${pct}%`);
    }
    if (playerProgressBar) {
      playerProgressBar.setAttribute("aria-valuenow", Math.round(pct));
    }
  }
});

audioPlayer.addEventListener("loadedmetadata", () => {
  if (playerDuration) {
    playerDuration.textContent = formatTime(audioPlayer.duration);
  }
});

audioPlayer.addEventListener("ended", () => {
  updatePlayUi(false);
  if (playerProgressFill) playerProgressFill.style.setProperty("--progress-pct", "0%");
  if (playerCurrentTime) playerCurrentTime.textContent = "0:00";
});

if (playerProgressBar) {
  playerProgressBar.addEventListener("click", (e) => {
    const rect = playerProgressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    if (audioPlayer.duration && width > 0) {
      const seekRatio = Math.max(0, Math.min(1, clickX / width));
      audioPlayer.currentTime = seekRatio * audioPlayer.duration;
    }
  });
}
