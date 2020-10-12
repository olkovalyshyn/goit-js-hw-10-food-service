
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle'),
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