const mainElement = document.querySelector('main'); // Remove the <main> element with id 'main'
mainElement.remove();

const newHeader = document.createElement('h1'); // Create a new <h1> element with id 'victory'
newHeader.id = 'victory';

newHeader.textContent = 'YOUR-NAME is the champion'; // Set the text content of the new <h1> element


document.body.appendChild(newHeader);// Append the new <h1> element to the document body