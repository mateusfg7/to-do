const listElement = document.getElementById('mainList');
const inputElement = document.getElementById('inputTodo');

const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

function renderTodos() {
    listElement.innerHTML = '';

    todos.map(todo => {
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(todo);

        const linkElement = document.createElement('a');

        linkElement.setAttribute('href', '#');

        const pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', `deleteTodo(${pos})`)

        const linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    })
}

function addTodo() {
    const todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    
    renderTodos();
    saveToStorage();
}


function deleteTodo(pos){
    todos.splice(pos, 1);
    
    renderTodos();
    saveToStorage();
}

