const navbar = document.getElementById('navbar');
const toggleMenuButton = document.getElementById('navbar-toggleMenu');

toggleMenuButton.addEventListener('click', () => {

  if(navbar.classList.contains('disabled')) {
    navbar.classList.replace("disabled", "enabled");
  }
  else {
    navbar.classList.replace("enabled", "disabled");
  }
})