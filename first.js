let todos = ['do home works', 'wahs car' , 'buy car'];

todos.forEach(function (taskTitle) {
    let element = document.createElement('div');
    element.innerText = taskTitle ; 
    document.body.appendChild(element);
});