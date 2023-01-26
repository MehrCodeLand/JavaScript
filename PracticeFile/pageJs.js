// TASK 1 : get data and save, show in div
let todo = [];
function add(){
    let dataFromHtml = document.getElementById('todo-title');
    let title = dataFromHtml.value ;
    todo.push(title);
    showAsDiv(title);
}

function showAsDiv( toDoTitle ){
    let element = document.createElement('div');
    element.innerText = toDoTitle ; 
    document.body.appendChild(element);
    changeBtnTxt();
}


// TASK 2 : after add todo, btn change to "done"
function changeBtnTxt(){
    document.getElementById('todo-sub').innerText = 'done';
    setTimeout(() => {
        document.getElementById('todo-sub').innerText = 'Add'
    } , 500)
}

// TASK 3 & 4 : "increases and dicreases btn!" 
let counter = 0 ;
function Up(){
    ++counter;
    document.getElementById('show-up').innerText = counter;
}
function Down(){
    --counter;
    document.getElementById('show-up').innerText = counter;
}
