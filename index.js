const textarea = document.querySelector('textarea');
const addButton = document.getElementById('addButton');
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