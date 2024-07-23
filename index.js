const textarea = document.querySelector('textarea'); // Select the textarea element
const addButton = document.getElementById('addButton'); // Select the add button by its ID
const todoContainer = document.querySelector('.todoContainer'); // Select the container where the to-do items will be added

let todoList = []; // Initialize an empty array to store the to-do items

function addTodo() {
    const todo = textarea.value
    if (!todo) { return }

    console.log('Added todo: ', todo)
    todoList.push(todo)
    textarea.value = '' // resets to empty
    updateUI()
}

function updateUI() {

}


addButton.addEventListener('click', addTodo)