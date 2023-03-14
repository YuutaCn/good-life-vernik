let menuLevel = '#catalog';
let menuIndex = 0;
let menuStatus = false;

const menuContent = document.querySelector('[data-menu-container]'),
  menuReturn = document.querySelector('[data-menu-return]'),
  menuTitle = document.querySelector('[data-title]'),
  burger = document.querySelector('[data-burger]'),
  burgerMenu = document.querySelector('[data-menu]'),
  menuList = document.querySelectorAll('[data-menu-content="#index"]');

burger.addEventListener('click', () => {
  menuLevel = `#index`;
  if (!menuStatus) {
    menuOpen();
  } else {
    menuClose();
  };
});

document.querySelector('[data-catalog]').addEventListener('click', ()=> {
  menuTitle.href = '#catalog';
  menuTitle.innerHTML = 'Каталог';
  menuLevel = `#catalog`;
  menuIndex = 1;
  if (!menuStatus) {
    menuOpen();
  } else {
    menuClose();
  };
})

document.querySelector('[data-search]').addEventListener('click', ()=> {
  menuTitle.href = '#catalog';
  menuTitle.innerHTML = 'Каталог';
  menuLevel = `#catalog`;
  menuIndex = 1;

  if (!menuStatus) {
    menuOpen();
  } else {
    menuClose();
  };
})

function menuOpen() {
  menuStatus = true;
  burger.classList.add('burger__button_active');
  burgerMenu.classList.add('burger-menu_active');
  getMenuItems();
  document.querySelector('.page__body').classList.add('page__body_disabled')
};

function menuClose() {
  menuStatus = false;
  burger.classList.remove('burger__button_active');
  burgerMenu.classList.remove('burger-menu_active');
};

function getMenuItems() {
  if (menuLevel == '#index') {
    let copy = [...menuList];
    copy.forEach(function (el) {
      menuContent.innerHTML = el.outerHTML;
    });
    document.querySelector('.burger-menu__header').style.display = 'none';
  } else {
    let item = menuList[0].querySelectorAll(`[data-menu-content="${menuLevel}"]`);
    let copy = [...item];
    copy.forEach(function (el) {
      menuContent.innerHTML = el.outerHTML;
    });
    document.querySelector('.burger-menu__header').style.display = '';
  };

  burgerMenu.querySelectorAll('ul li a').forEach(link => {
    link.addEventListener('click', () => {
      menuTitle.href = menuLevel;
      menuTitle.innerHTML = link.innerHTML;
      menuLevel = `${link.hash}`;
      menuIndex++;
      getMenuItems();
      console.log(menuIndex);
    });
  });
};

menuReturn.addEventListener('click', () => {
  if (menuIndex == 1) {
    menuTitle.href = '#';
    menuTitle.innerHTML = '';
    menuLevel = `#index`;
  } else if (menuIndex == 2) {
    menuTitle.href = '#catalog';
    menuTitle.innerHTML = 'Каталог';
    menuLevel = `#catalog`;
  } else {
    menuTitle.getAttribute('href');
  };
  menuIndex--;
  getMenuItems();
  console.log(menuIndex);
});
