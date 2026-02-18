const translations = {
  en: {
    logo: "Imam Sajjad (AS) Islamic Centre",
    nav_home: "Home",
    nav_about: "About",
    nav_programs: "Programs",
    nav_events: "Events",
    nav_ramazan: "Ramazan",
    nav_donate: "Donations",
    nav_contact: "Contact",

    hero_title: "Imam Sajjad (AS) Islamic Centre",
    foundation: "Foundation",
    hero_subtitle: "Serving the community with faith and unity",
    address: "📍 Zahurabad, Purani Basti<br>Ghazipur, U.P – 233222",

    ayat: "“And hold firmly to the rope of Allah all together and do not become divided.”<br><small>(Surah Al-Imran 3:103)</small>",

    mission_title: "Our Mission",
    mission_text: "Providing spiritual guidance, community programs, and Islamic education for all ages.",

    community_title: "Our Community",
    community_text: "Serving families in Delhi and surrounding areas with daily prayers and events.",

    values_title: "Our Values",
    values_text: "Faith, unity, education, and service to humanity.",

    footer: "© 2026 Imam Sajjad (AS) Islamic Centre"
  },

  hi: {
    logo: "इमाम सज्जाद (अ.स.) इस्लामिक सेंटर",
    nav_home: "होम",
    nav_about: "परिचय",
    nav_programs: "कार्यक्रम",
    nav_events: "इवेंट्स",
    nav_ramazan: "रमज़ान",
    nav_donate: "दान",
    nav_contact: "संपर्क",

    hero_title: "इमाम सज्जाद (अ.स.) इस्लामिक सेंटर",
    foundation: "संस्थापक",
    hero_subtitle: "ईमान और एकता के साथ समाज की सेवा",
    address: "📍 ज़हूराबाद, पुरानी बस्ती<br>गाज़ीपुर, उ.प्र – 233222",

    ayat: "“और सब मिलकर अल्लाह की रस्सी को मजबूती से पकड़ो और आपस में फूट न डालो।”<br><small>(सूरह आले इमरान 3:103)</small>",

    mission_title: "हमारा मिशन",
    mission_text: "सभी उम्र के लोगों के लिए इस्लामी शिक्षा और सामुदायिक कार्यक्रम प्रदान करना।",

    community_title: "हमारा समुदाय",
    community_text: "दिल्ली और आसपास के क्षेत्रों में नमाज़ और कार्यक्रमों की सेवा।",

    values_title: "हमारे मूल्य",
    values_text: "ईमान, एकता, शिक्षा और मानवता की सेवा।",

    footer: "© 2026 इमाम सज्जाद (अ.स.) इस्लामिक सेंटर"
  },

  ur: {
    logo: "امام سجاد (ع) اسلامک سینٹر",
    nav_home: "ہوم",
    nav_about: "تعارف",
    nav_programs: "پروگرامز",
    nav_events: "ایونٹس",
    nav_ramazan: "رمضان",
    nav_donate: "عطیات",
    nav_contact: "رابطہ",

    hero_title: "امام سجاد (ع) اسلامک سینٹر",
    foundation: "فاؤنڈیشن",
    hero_subtitle: "ایمان اور اتحاد کے ساتھ کمیونٹی کی خدمت",
    address: "📍 ظہورآباد، پرانی بستی<br>غازیپور، یو.پی – 233222",

    ayat: "“اور سب مل کر اللہ کی رسی کو مضبوطی سے تھام لو اور تفرقہ نہ ڈالو۔”<br><small>(سورۃ آل عمران 3:103)</small>",

    mission_title: "ہمارا مشن",
    mission_text: "ہر عمر کے لوگوں کے لیے دینی تعلیم اور کمیونٹی پروگرام فراہم کرنا۔",

    community_title: "ہماری کمیونٹی",
    community_text: "دہلی اور اطراف میں نماز اور تقاریب کی خدمت۔",

    values_title: "ہماری اقدار",
    values_text: "ایمان، اتحاد، تعلیم اور انسانیت کی خدمت۔",

    footer: "© 2026 امام سجاد (ع) اسلامک سینٹر"
  }
};

const languageSwitcher = document.getElementById("languageSwitcher");

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(element => {
    const key = element.getAttribute("data-key");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  if (lang === "ur") {
    document.body.style.direction = "rtl";
  } else {
    document.body.style.direction = "ltr";
  }

  localStorage.setItem("language", lang);
}

languageSwitcher.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});

const savedLang = localStorage.getItem("language") || "en";
languageSwitcher.value = savedLang;
setLanguage(savedLang);

(function () {
  const tbody = document.getElementById("ramadanTableBody");
  if (!tbody) return;

  const days = ["Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday"];

  let sehri = 306;   
  let fajr = 311;    
  let sunrise = 387; 
  let zuhr = 730;    
  let sunset = 353;  
  let iftar = 363;   

  function t(m) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    return String(h).padStart(2,"0") + ":" + String(min).padStart(2,"0");
  }

  for (let i = 0; i < 30; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${days[i % 7]}</td>
      <td>${t(sehri)}</td>
      <td>${t(fajr)}</td>
      <td>${t(sunrise)}</td>
      <td>${t(zuhr)}</td>
      <td>${t(sunset)}</td>
      <td>${t(iftar)}</td>
    `;
    tbody.appendChild(tr);

    sehri--;
    fajr--;
    sunrise--;
    sunset++;
    iftar++;
  }
})();