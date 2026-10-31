const langSwitch = document.getElementById('langSwitch');
let currentLang = 'fr';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-fr][data-en]').forEach((element) => {
    element.innerHTML = element.dataset[lang];
  });
  langSwitch.textContent = lang === 'fr' ? 'EN' : 'FR';
  langSwitch.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
}

langSwitch.addEventListener('click', () => {
  setLanguage(currentLang === 'fr' ? 'en' : 'fr');
});

document.getElementById('year').textContent = new Date().getFullYear();
