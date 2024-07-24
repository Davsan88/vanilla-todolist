const textarea = document.querySelector('#taskInput'); // Select the textarea element by its ID
const addButton = document.getElementById('addButton'); // Select the add button by its ID
const todoContainer = document.querySelector('.todoContainer'); // Select the container where the to-do items will be added

let todoList = []; // Initialize an empty array to store the to-do items

// Function to load the initial data from local storage
function initialLoad() {
    if (!localStorage.getItem('todos')) { return };
    todoList = JSON.parse(localStorage.getItem('todos')).todoList;
    updateUI();
}

initialLoad();


// Function to add a new to-do item
function addTodo() {
    const todo = textarea.value;  // Get the value from the textarea
    if (!todo) { return; }  // If the textarea is empty, exit the function 

    console.log('Added todo: ', todo); // Log the added to-do item to the console (for debugging) 
    todoList.push(todo);  // Add the to-do item to the todoList array
    textarea.value = ''; // Resets the textarea element to empty
    updateUI();  // Update the user interface
}

// Function to edit a to-do item
function editTodo(index) {
    // Get the current to-do text
    const todo = todoList[index];
    // Set the textarea value to the current to-do text
    textarea.value = todo;
    // Remove the to-do item from the list
    todoList.splice(index, 1);
    // Update the UI
    updateUI();
}

// Function to delete a to-do item
function deleteTodo(index) {
    // Remove the to-do item from the list
    todoList.splice(index, 1);
    // Update the UI
    updateUI();
}

// Function to update the user interface
function updateUI() {
    // Initialize an empty string to build the new inner HTML
    let newInnerHTML = '';

    // Iterate over each item in the todoList array
    todoList.forEach((todoElement, todoIndex) => {
        // Append a new to-do item to the newInnerHTML string
        newInnerHTML += `
         <div class="todo">
            <p>${todoElement}</p>
            <div class="buttonContainer">
                <button class="iconButton" onclick="editTodo(${todoIndex})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="iconButton" onclick="deleteTodo(${todoIndex})">
                    <i class="fa-solid fa-eraser"></i>
                </button>
            </div>
        </div>
        `;
    });
    // Set the innerHTML of the todoContainer to the newly built HTML
    todoContainer.innerHTML = newInnerHTML;

    // Save data to localstorage
    localStorage.setItem('todos', JSON.stringify({ todoList }));
};


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