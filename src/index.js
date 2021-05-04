import './sass/main.scss';
import './css/style.css';
import menuTemplate from './template/menuTemplate.hbs';
import menu from './menu.json';

const refs = {
  menu: document.querySelector('.js-menu'),
  input: document.querySelector('.theme-switch__toggle'),
  body: document.body,
};

const markup = menuTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);

refs.input.addEventListener('click', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme(e) {
  if (e.target.checked) {
    onChange(Theme.DARK, Theme.LIGHT);
  } else {
    onChange(Theme.LIGHT, Theme.DARK);
  }
}

function onChange(add, rem) {
  refs.body.classList.add(add);
  refs.body.classList.remove(rem);
  localStorage.setItem('theme', add);
}

refs.body.classList.add(
  localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
);

refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
