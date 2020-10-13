import cardsTemplates from "./templates/cards-food.hbs";
import cardsData from "./menu.json";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle'),
    menu: document.querySelector('.js-menu'),
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


const template = templating.compile(cardsTemplates);
refs.menu.insertAdjacentHTML('beforeend', template(cardsData));
