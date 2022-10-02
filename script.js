let englishActualLanguage = true;

let spanishLanguage = document.querySelectorAll('.spanish');

let englishLanguage = document.querySelectorAll('.english');

let buttonLanguage = document.getElementsByClassName('language');

const changeLanguage = () => {
  if (englishActualLanguage) {
    englishLanguage.forEach((e) => {
      e.className = 'hide';
    });

    spanishLanguage.forEach((e) => {
      e.classList.remove('hide');
    });

    buttonLanguage[0].textContent = 'ENG';
  } else {
    spanishLanguage.forEach((e) => {
      e.className = 'hide';
    });
    englishLanguage.forEach((e) => {
      e.classList.remove('hide');
    });
    buttonLanguage[0].textContent = 'ESP';
  }
  englishActualLanguage = !englishActualLanguage;
};
