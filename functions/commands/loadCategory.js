// const { getCommandCategory } = require('./commands');
import { getCommandCategory } from './filterCommands.js';

// Function to display commands for a selected category
function loadCategory(category = 'Moderation') {
  const categoryData = getCommandCategory(category);

  if (!categoryData) return;

  const commandsList = document.getElementById('commands-list');
  commandsList.innerHTML = ''; // Clear previous content

  // Loop through the commands in the selected category
  for (const command of categoryData) {
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

export { loadCategory };