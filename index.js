const textarea = document.querySelector('#taskInput'); // Select the textarea element by its ID
const addButton = document.getElementById('addButton'); // Select the add button by its ID
const todoContainer = document.querySelector('.todoContainer'); // Select the container where the to-do items will be added
const toggleBtn = document.getElementById('toggleBtn'); // Select the toggle button element
const body = document.querySelector('body'); // Select the body element to apply the theme classes


let todoList = []; // Initialize an empty array to store the to-do items

// Function to load the initial data from local storage
function initialLoad() {
    // Check if 'todos' data exists in local storage
    if (!localStorage.getItem('todos')) { return; }
    // Parse the 'todos' data and assign it to the todoList array
    todoList = JSON.parse(localStorage.getItem('todos')).todoList;
    // Update the user interface to reflect the loaded data
    updateUI();
}

// Call initialLoad to populate the UI with saved data on page load
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

    // Save the current state of the todoList to local storage
    localStorage.setItem('todos', JSON.stringify({ todoList }));
};

// Function to toggle between light and dark mode
function toggleMode() {
    // Check if the body currently has the 'dark-mode' class
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode'); // Remove 'dark-mode' class
        body.classList.add('light-mode'); // Add 'light-mode' class
        localStorage.setItem('theme', 'light'); // Save 'light' theme to local storage
    }  else { 
        body.classList.remove('light-mode'); // Remove 'light-mode' class
        body.classList.add('dark-mode'); // Add 'dark-mode' class
        localStorage.setItem('theme', 'dark'); // Save 'dark' theme to local storage
    }
}

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme + '-mode')
    } else { 
        body.classList.add('light-mode'); // Default to light mode

    }
})


// Add an event listener to the add button
// When the button is clicked, the addTodo function will be called
addButton.addEventListener('click', addTodo);


// Add an event listener to the toggle mode button
// When the button is clicked, the toggleMode function will be called
toggleBtn.addEventListener('click', toggleMode);


// Debugging
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