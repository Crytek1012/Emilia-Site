const categoryButtons = document.querySelectorAll('#commands-category button');
import { loadCategory } from './loadCategory.js';

loadCategory('Moderation');

// Add an event listener to each 'command-box' element
categoryButtons.forEach((category) => {
  category.addEventListener('click', (event) => {

    const activeButton = document.querySelector('#commands-category button.active');

    if(!category.classList.contains('active')) {
      activeButton.classList.remove('active');
      category.classList.add('active');
    }

    loadCategory(category.classList[0]);
  });
});