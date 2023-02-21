const menus = document.querySelectorAll('.header-menu a');

const activeOnScroll = () => {
  const [home, about, guide, products] = Array.from(menus);

  const aboutTop = document.getElementById('about').offsetTop;
  const guideTop = document.getElementById('guide').offsetTop;
  const productsTop = document.getElementById('products').offsetTop;

  const scrollMarginTop = 120;

  const scrollYPosition = window.scrollY + scrollMarginTop;

  if (scrollYPosition < aboutTop) {
    home.classList.add('menu-active');
    about.classList.remove('menu-active');
    guide.classList.remove('menu-active');
    products.classList.remove('menu-active');
  } else if (scrollYPosition < guideTop) {
    home.classList.remove('menu-active');
    about.classList.add('menu-active');
    guide.classList.remove('menu-active');
    products.classList.remove('menu-active');
  } else if (scrollYPosition < productsTop) {
    home.classList.remove('menu-active');
    about.classList.remove('menu-active');
    guide.classList.add('menu-active');
    products.classList.remove('menu-active');
  } else {
    home.classList.remove('menu-active');
    about.classList.remove('menu-active');
    guide.classList.remove('menu-active');
    products.classList.add('menu-active');
  }

}

window.addEventListener('scroll',activeOnScroll);
