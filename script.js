const input = document.querySelector(".input-box");
const button = document.querySelector(".fa-solid");
const todoList = document.querySelector(".todo-list"); // const todoList - it's just name of variable

button.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(event) {
    event.preventDefault();

    // console.log(input.value)
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    todoDiv.appendChild(completeButton);

    todoList.appendChild(todoDiv);
    input.value = "";
}

function deleteTodo(event) {
    console.log(event.target);

    const item = event.target;
    if (item.classList[0] === "delete-btn") {
        const delItem = item.parentElement;
        delItem.remove();
    }
    if (item.classList[0] === "complete-btn") {
        const delItem = item.parentElement;
        delItem.classList.toggle("completed");
    }
}