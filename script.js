const menus = document.querySelectorAll('.header-menu a');

const activeOnScroll = () => {
  const [home, about, guide, products] = Array.from(menus);

  const homeTop = document.querySelector('#home').scrollHeight - 180;
  const aboutTop = document.querySelector('#about').scrollHeight + homeTop;
  const guideTop = document.querySelector('#guide').scrollHeight + aboutTop;

  const scrollY = window.scrollY;

  if (scrollY < homeTop) {
    home.classList.add('menu-active');
    about.classList.remove('menu-active');
    guide.classList.remove('menu-active');
    products.classList.remove('menu-active');
  } else if (scrollY < aboutTop) {
    about.classList.add('menu-active');
    home.classList.remove('menu-active');
    guide.classList.remove('menu-active');
    products.classList.remove('menu-active');
  } else if (scrollY < guideTop) {
    guide.classList.add('menu-active');
    home.classList.remove('menu-active');
    about.classList.remove('menu-active');
    products.classList.remove('menu-active');
  } else {
    products.classList.add('menu-active');
    home.classList.remove('menu-active');
    about.classList.remove('menu-active');
    guide.classList.remove('menu-active');
  }

}

activeOnScroll();
window.addEventListener('scroll',activeOnScroll);
