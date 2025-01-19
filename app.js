const form=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const clearButton=document.querySelector("#clearButton");



runEvents();
function runEvents(){
    form.addEventListener("submit",addTodo)
}

function addTodo(e){
    const inputText=addInput.value.trim();
    if(inputText==null || inputText==""){
        alert("Empty Value!!")

    }else{
        addTodoToUI(inputText);
    }
    e.preventDefault();
}


//Add to UI

function addTodoToUI(){
    const li=document.createElement("li");
    li.className="list-group-item";
    li.textContent=newTodo;

    const a=document.createElement("a");
    a.href="#";
    a.className="delete-item";


    const i=document.createElement("i");
    i.className="removeTodo";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li)
;}