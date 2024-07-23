const textarea = document.querySelector('textarea'); // Select the textarea element
const addButton = document.getElementById('addButton'); // Select the add button by its ID
const todoContainer = document.querySelector('.todoContainer'); // Select the container where the to-do items will be added

let todoList = []; // Initialize an empty array to store the to-do items

// Function to add a new to-do item
function addTodo() {
    const todo = textarea.value;  // Get the value from the textarea
    if (!todo) { return; }  // If the textarea is empty, exit the function 

    console.log('Added todo: ', todo); // Log the added to-do item to the console (for debugging) 
    todoList.push(todo)
    textarea.value = '' // resets to empty
    updateUI()
}

function updateUI() {

}


addButton.addEventListener('click', addTodo)