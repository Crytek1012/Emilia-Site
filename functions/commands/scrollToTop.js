// Add this to your JavaScript file (e.g., script.js)
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Show the button when the user scrolls down 300px from the top
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
});
