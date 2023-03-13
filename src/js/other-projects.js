document.querySelector('.projects__title').addEventListener('click', () => {
  document.querySelector('.projects__list').classList.toggle('projects__list_active');
  document.querySelector('.projects__title').classList.toggle('projects__title_active');
});
