const textarea = document.querySelector('textarea'); // Select the textarea element
const addButton = document.getElementById('addButton'); // Select the add button by its ID
const todoContainer = document.querySelector('.todoContainer'); // Select the container where the to-do items will be added

let todoList = []; // Initialize an empty array to store the to-do items

// Function to add a new to-do item
function addTodo() {
    const todo = textarea.value;  // Get the value from the textarea
    if (!todo) { return; }  // If the textarea is empty, exit the function 

    console.log('Added todo: ', todo); // Log the added to-do item to the console (for debugging) 
    todoList.push(todo);  // Add the to-do item to the todoList array
    textarea.value = ''; // Resets the textarea element to empty
    updateUI();  // Update the user interface
}

function updateUI() {

}


// Add an event listener to the add button
// When the button is clicked, the addTodo function will be called
addButton.addEventListener('click', addTodo);