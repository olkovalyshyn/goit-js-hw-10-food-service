import cardTemplate from "./templates/cards-food.hbs";
import cardsData from "./menu.json";

const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle'),
    menu: document.querySelector('.js-menu'),
};

const markup = cardTemplate(cardsData);

refs.menu.insertAdjacentHTML('beforeend', markup);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


refs.switch.addEventListener('change', onBtnChange);

const isChecked = refs.switch.checked;

function onBtnChange() {
    if (isChecked) {
        refs.body.classList.add(Theme.DARK);
    }
    else {
        refs.body.classList.add(Theme.LIGHT);

    }
};


