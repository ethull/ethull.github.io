const menu = document.querySelector('#navMenubd-main');

document.querySelector(".navbar-burger").addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle('is-active');
});
