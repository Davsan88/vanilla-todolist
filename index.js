const textarea = document.querySelector('textarea'); // Select the textarea element
const addButton = document.getElementById('addButton'); // Select the add button by its ID
const todoContainer = document.querySelector('.todoContainer');

let todoList = []

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