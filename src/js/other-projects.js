document.querySelector('.projects .projects__title').addEventListener('click', () => {
  document.querySelector('.projects .projects__list').classList.toggle('list_active');
  document.querySelector('.projects .projects__title').classList.toggle('projects__title_active');
});
