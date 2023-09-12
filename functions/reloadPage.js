let isReloading = false;
let prevScrollPosition = 0;

window.addEventListener('scroll', () => {
  // Get the height of the page content
  const pageHeight = document.body.scrollHeight;

  // Get the current scroll position
  const scrollPosition = window.innerHeight + window.pageYOffset;

  // Check if the user has scrolled to the bottom of the page and is scrolling upwards,
  // and if the current scroll position is at the top of the page
  if (scrollPosition >= pageHeight && scrollPosition < prevScrollPosition && scrollPosition === window.innerHeight && !isReloading) {
    // Display the reload indicator
    const reloadIndicator = document.getElementById('reload-indicator');
    reloadIndicator.style.display = 'block';

    // Set a flag to prevent multiple reloads
    isReloading = true;

    // Reload the page after a delay (e.g., 1 second)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  // Update the previous scroll position
  prevScrollPosition = scrollPosition;
});
