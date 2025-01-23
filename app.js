const form=document.querySelector("#todoAddForm");
const addInput=document.querySelector("#todoName");
const todoList=document.querySelector(".list-group");
const clearButton=document.querySelector("#clearButton");



runEvents();
function runEvents(){

    form.addEventListener("submit",addTodo);

    clearButton.addEventListener("click",cleatTodos);

    todoList.addEventListener("click",deleteTodo);
}

function addTodo(e){
    const inputText=addInput.value.trim();
    if(inputText==null || inputText==""){
        alert("Empty Value!!")

    }else{
        addTodoToUI(inputText);
    }
    addInput.value="";
    e.preventDefault();
}


//Add to UI

function addTodoToUI(newTodo){
    const li=document.createElement("li");
    li.className="list-group-item";
    li.textContent=newTodo;

    const a=document.createElement("a");
    a.href="#";
    a.className="delete-item";
    a.textContent="Delete";
    li.appendChild(a);

    todoList.appendChild(li);
   
}

function deleteTodo(e) {
    if (e.target.classList.contains("delete-item")) {
      e.target.parentElement.remove(); // Remove the parent <li>
    }
  }