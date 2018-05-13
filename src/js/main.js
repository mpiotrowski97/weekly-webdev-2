import '../sass/main.sass';
import 'normalize-css';

let header = document.querySelector('.header');
let banner = document.querySelector('.banner');
let hamburgerIcon = document.querySelector('.nav-btn');
let navItems = document.querySelectorAll('.header-nav .nav-item');

window.addEventListener('scroll', () => {
  if (0 < window.scrollY) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

hamburgerIcon.addEventListener('click', (event) => {
  event.preventDefault();
  header.classList.toggle('nav-open');
});

navItems.forEach(item => {
  item.addEventListener('click', (event) => {
    if (header.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
    }

    let id = event.target.href.split("#")[1];
    let offset = 139;
    let target = document.querySelector(`#${id}`).offsetTop - offset;
    window.scroll({
      top: target,
      left: 0,
      behavior: 'smooth'
    });

    event.preventDefault();
  });
});
