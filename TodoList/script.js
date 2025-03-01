const todoInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-btn')
const ulList = document.getElementById('ul-list')

addBtn.addEventListener('click', () => {
    const value = todoInput.value;
    console.log("user entered", value);
    const li = document.createElement('li');
    li.innerText = value;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
    li.appendChild(deleteBtn);
    ulList.appendChild(li);
    todoInput.value = '';

});