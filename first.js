let todos = ['do home works', 'wahs car' , 'buy car'];

todos.forEach(function (taskTitle) {
    let element = document.createElement('div');
    element.innerText = taskTitle ; 
    document.body.appendChild(element);
});

function add(){
    let textbox = document.getElementById('todo-title');
    let title = textbox.value ;
    todos.push(title);
}