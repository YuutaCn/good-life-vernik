const menuList = document.querySelector('[data-menu-list]'),
  burgerMenu = document.querySelector('[data-menu]'),
  burgerButton = document.querySelectorAll('[data-burger]');

let contentIndex = 0;
let menuStatus = false;

function menuNext(button) {
  contentIndex++;
  const container = document.createElement("div");
  container.className = 'burger-menu__container';
  container.style.zIndex = `10${contentIndex}`;
  let content = button.closest('li').querySelector('[data-content]');
  let copyContent = content.cloneNode(true)
  container.append(copyContent);
  const currentDiv = document.getElementById("23");
  burgerMenu.insertBefore(container, currentDiv);
};

function menuPreview() {
  contentIndex--;
  burgerMenu.lastChild.remove();
};

function menuOpen(button) {
  const page = button.getAttribute('data-open-page')
  if (page) {
    contentIndex++;
    const container = document.createElement("div");
    container.className = 'burger-menu__container';
    container.style.zIndex = `10${contentIndex}`;
    let content = document.querySelector(`[data-content="${page}"]`);
    let copyContent = content.cloneNode(true);
    container.append(copyContent);
    const currentDiv = document.getElementById("23");
    burgerMenu.insertBefore(container, currentDiv);
  };
  menuStatus = true;
  burgerButton.forEach(el => {
    el.classList.add('burger__button_active');
  })
  burgerMenu.classList.add('burger-menu_active');
  document.querySelector('.page__body').classList.add('page__body_disabled');
};

function menuClose(button) {
  menuStatus = false;
  if (contentIndex > 0) {
    for (let i = contentIndex; i > 0; i--) {
      burgerMenu.lastChild.remove();
    }
    contentIndex = 0;
  };
  burgerButton.forEach(el => {
    el.classList.remove('burger__button_active');
  })
  burgerMenu.classList.remove('burger-menu_active');
  document.querySelector('.page__body').classList.remove('page__body_disabled');
};

function callBurger(button) {
  if (!menuStatus) {
    menuOpen(button);
  } else {
    menuClose(button);
  };
}
;
