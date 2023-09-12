// Add this code to your existing JavaScript
import { getCommandCategory } from './filterCommands.js';

const allCommands = []; // An array to hold all commands from all categories

// Loop through all categories and collect all commands
const categories = ['Moderation', 'Utility', 'Interactions', 'Music', 'Ship', 'Misc']; // Add more categories as needed
for (const category of categories) {
  const categoryData = getCommandCategory(category);
  if (categoryData) {
    allCommands.push(...categoryData);
  }
}

  const searchInput = document.querySelector('#search-bar input');
  
  // Add an event listener to the input field
  searchInput.addEventListener('input', () => {
    // Get the value entered by the user
    const searchValue = searchInput.value.toLowerCase(); // Convert to lowercase for case-insensitive search
    
    // Call the function to filter and display commands based on the search value
    filterAndDisplayCommands(searchValue);
  });



// Add this function to your JavaScript code
function filterAndDisplayCommands(searchValue) {

  const commandsList = document.getElementById('commands-list');
  commandsList.innerHTML = ''; // Clear previous content

  for (const command of allCommands) {
    // Check if the command name or description contains the search value
    if (command.name.toLowerCase().includes(searchValue) || command.aliases.includes(searchValue)) {
      const commandBox = document.createElement('div');
    commandBox.classList.add('command-box');

    const header = document.createElement('div');
    header.classList.add('command-header');

    const nameElement = document.createElement('div');
    nameElement.classList.add('command-name');
    nameElement.textContent = command.name;

    const descriptionElement = document.createElement('div');
    descriptionElement.classList.add('command-description');
    descriptionElement.textContent = command.description;

    const usageElement = document.createElement('div');
    usageElement.classList.add('command-usage');
    usageElement.textContent = 'Usage: ' + command.usage;
    usageElement.style.display = 'none'; // Initially hide the usage

    const aliasesElement = document.createElement('div');
    aliasesElement.classList.add('command-aliases');
    aliasesElement.textContent = 'Aliases: ' + command.aliases.join(', ');
    aliasesElement.style.display = 'none'; // Initially hide the usage
    aliasesElement.style.textAlign = 'center'
  

    // Add a click event listener to toggle the usage
    commandBox.addEventListener('click', () => {
      usageElement.style.display = usageElement.style.display === 'none' ? 'block' : 'none';
      aliasesElement.style.display = aliasesElement.style.display === 'none' ? 'block' : 'none';
    });

    // Append elements to the command box
    header.appendChild(nameElement);
    header.appendChild(descriptionElement);
    commandBox.appendChild(header);
    commandBox.appendChild(usageElement);
    if(command.aliases.length > 0) commandBox.appendChild(aliasesElement);

    commandsList.appendChild(commandBox);
    }
  }
}
