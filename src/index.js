import cardTemplate from "./templates/cards-food.hbs";
import cardsData from "./menu.json";

const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle'),
    menu: document.querySelector('.js-menu'),
};

// робить розмітку
const markup = cardTemplate(cardsData);

refs.menu.insertAdjacentHTML('beforeend', markup);

// робить тему
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', onBtnChangeTheme);

function onBtnChangeTheme(evt) {
    evt.preventDefault();

    if (evt.target.checked) {
        onDarkTheme();
    }
    else {
        onLightTheme();
    }
};

    getValueLocalStorage();

function onLightTheme() {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    localStorage.setItem("theme", Theme.LIGHT);
    }

function onDarkTheme() {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    localStorage.setItem("theme", Theme.DARK);
}

function getValueLocalStorage() {
    const currentValueLocalStorage = localStorage.getItem('theme');

        if (currentValueLocalStorage === Theme.DARK) {
            refs.body.classList.add(Theme.DARK);
            refs.switch.checked = true;
    }
    
        if (currentValueLocalStorage === Theme.LIGHT) {
            refs.body.classList.add(Theme.LIGHT);
        }
    }

