const navbarContainer = document.createElement('nav');
navbarContainer.setAttribute("id", "navbar");
navbarContainer.setAttribute("class", "disabled");

// JavaScript code for target.html
document.addEventListener('DOMContentLoaded', async function() {

  // keeping it here instead of fetching it
  const navbarHtml = `<div id="navbar-container">
  <div id="navbar-header">
  <a id="navbar-logo" href="/index.html">Emilia-tan</a>
  <button id="toggle-DarkMode" class='bx bx-moon'></button>
  <button id="navbar-toggleMenu" class='bx-fw bx bx-menu'></button>
   </div>
  <div id="navbar-links">

  <a class="link" href="/commands.html">Commands</a>
  <a class="link" href="">Discord</a>
  <a class="link" href="">Invite</a>
  <a class="link" href="">Log-in</a>

  </div>
  </div>`

  navbarContainer.innerHTML = navbarHtml;

  const body = document.body; // Replace with your desired parent element

  const bodyMode = localStorage.getItem('mode');
  if(bodyMode) localStorage.setItem("mode", "dark-mode")
  body.classList.replace(body.classList[0], bodyMode);

  
  // for CSS

  const iconsLink = document.createElement('link');
  iconsLink.rel = "stylesheet";
  iconsLink.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
  // Create a new link element for the CSS file
  const cssLink = document.createElement("link");
  cssLink.rel = "stylesheet"; // Specify that it's a stylesheet
  cssLink.href = "../navbar/navbar.css"; // Replace with the actual path to your CSS file
  cssLink.type = "text/css"; // Specify the type of the stylesheet
  
  document.head.appendChild(cssLink);
  document.head.appendChild(iconsLink);
  body.appendChild(navbarContainer);

  navbarHandler();
  
});


function navbarHandler() {

  const navbar = document.getElementById('navbar');
  const toggleMenuButton = document.getElementById('navbar-toggleMenu');
  const toggleDarkModeButton = document.getElementById('toggle-DarkMode');
  
  // navbar
  toggleMenuButton.addEventListener('click', () => {
  
    if(navbar.classList.contains('disabled')) {
      navbar.classList.replace("disabled", "enabled");
      document.body.style.overflow = 'hidden';
    }
    else {
      navbar.classList.replace("enabled", "disabled");
      document.body.style.overflow = 'auto';
    }
  });

  // dark mode
  toggleDarkModeButton.addEventListener('click', () => {
  
    // from dark to light
    if(document.body.classList.contains('dark-mode')) {
      toggleDarkModeButton.classList.replace("bxs-moon", "bx-moon");
      document.body.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('mode', 'light-mode');
    }
    // from light to dark
    else {
      toggleDarkModeButton.classList.replace("bx-moon", "bxs-moon");
      document.body.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('mode', 'dark-mode');
    }
  });

  }
