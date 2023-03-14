const menuList = document.querySelector('[data-menu-list]'),
  burgerMenu = document.querySelector('[data-menu]'),
  burgerReturn = document.querySelectorAll('[data-menu-return]'),
  burgerButton = document.querySelectorAll('[data-menu-button]');

contentIndex = 0;

function menuNext(button) {
  contentIndex++;
  const container  = document.createElement("div");
  container.className = 'burger-menu__content';
  container.style.zIndex = `10${contentIndex}`;
  let content = button.closest('li').querySelector('[data-content]');
  let copyContent = content.cloneNode(true)
  container.append(copyContent);
  const currentDiv = document.getElementById("23");
  burgerMenu.insertBefore(container, currentDiv);
}

function menuPreview(button) {
  contentIndex--;
  burgerMenu.lastChild.remove();
}

burgerReturn.forEach(button => {
  button.addEventListener('click', () => {
  });
});

createBurgerMenu();
