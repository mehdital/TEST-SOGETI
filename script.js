//Selectors
const titleInput = document.querySelector(".title-input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

//Listeners
addButton.addEventListener("click", addTitle);
todoList.addEventListener("click", checkDelete);


//Functions
function addTitle(event) {
    event.preventDefault();

//create div of the todo list
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//create Items li of the list
const newTodo = document.createElement("li");
newTodo.innerText = titleInput.value;
newTodo.classList.add("Item-todo-list");
todoDiv.appendChild(newTodo);
//Create check button
const checkButton = document.createElement("buttton");
checkButton.innerHTML = '<i class="fas fa-check"></i>';
checkButton.classList.add("check-btn");
todoDiv.appendChild(checkButton);
//Create check button
const deleteButton = document.createElement("buttton");
deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
deleteButton.classList.add("delete-btn");
todoDiv.appendChild(deleteButton);
//Append Item at todo list
todoList.appendChild(todoDiv)
}

function checkDelete(event) {
    const item = event.target;
    //Delete item
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    //Check item
    if (item.classList[0] === "check-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("checked");
    }
}