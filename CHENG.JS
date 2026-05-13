/* ===== TRANSLATIONS ===== */
const translations = {
  en: {
    title: "XYZ Hospital",
    home: "HOME",
    services: "SERVICES",
    contact: "CONTACT"
  },

  rw: {
    title: "Ibitaro bya XYZ",
    home: "AHABANZA",
    services: "SERIVISI",
    contact: "TUVUGANE"
  },

  fr: {
    title: "Hôpital XYZ",
    home: "ACCUEIL",
    services: "SERVICES",
    contact: "CONTACT"
  }
};

/* ===== CHANGE LANGUAGE js ===== */
function changeLang(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });

  // change button text
  document.getElementById("langBtn").textContent =
    (lang === "en" ? "English" :
     lang === "rw" ? "Kinyarwanda" : "French") + " ▾";

  localStorage.setItem("lang", lang);
}

/* ===== LOAD SAVED LANGUAGE ===== */
window.onload = function() {
  const saved = localStorage.getItem("lang") || "en";
  changeLang(saved);
};