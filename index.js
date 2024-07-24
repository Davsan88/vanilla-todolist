const textarea = document.querySelector('#taskInput'); // Select the textarea element by its ID
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

// Function to update the user interface
function updateUI() {
    // Initialize an empty string to build the new inner HTML
    let newInnerHTML = '';

    // Iterate over each item in the todoList array
    todoList.forEach((todoElement) => {
        // Append a new to-do item to the newInnerHTML string
        newInnerHTML += `
         <div class="todo">
            <p>${todoElement}</p>
            <div class="buttonContainer">
                <button class="iconButton">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="iconButton">
                    <i class="fa-solid fa-eraser"></i>
                </button>
            </div>
        </div>
        `;
    });
    // Set the innerHTML of the todoContainer to the newly built HTML
    todoContainer.innerHTML = newInnerHTML;
}


// Add an event listener to the add button
// When the button is clicked, the addTodo function will be called
addButton.addEventListener('click', addTodo);


console.log('Textarea:', textarea);
console.log('Add Button:', addButton);
console.log('Todo Container:', todoContainer);

if (textarea === null) {
    console.error('Textarea element not found.');
}
if (addButton === null) {
    console.error('Add button element not found.');
}
if (todoContainer === null) {
    console.error('Todo container element not found.');
}