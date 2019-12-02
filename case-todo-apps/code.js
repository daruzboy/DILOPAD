let todos = [{
        name: "Sikat Gigi",
        isDone: false
    },
    {
        name: "Makan",
        isDone: true
    }
];

const generateTodo = function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.name

    return p
}

const renderTodos = function(todos) {
    document.querySelector('#todos').innerHTML = ""
    todos.forEach((v, i) => {
        document.querySelector('#todos').appendChild(generateTodo(v));
    });
}

document.querySelector('#new-todos').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e.target.elements.text.value);
    todos.push({
        name: e.target.elements.text.value,
        isDone: false
    })
    renderTodos(todos)
    e.target.elements.text.value = ""
})
renderTodos(todos)