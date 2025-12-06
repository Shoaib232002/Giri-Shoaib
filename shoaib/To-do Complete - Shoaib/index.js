
addTodo = () => {
const ip = document.getElementById('todo-input').value;
let doc = document.getElementById('cards');

let container = document.createElement("div");
let todo = document.createElement("p");
let deleting = document.createElement("button");
let check = document.createElement("input");

container.className = "container";

todo.className = "card-ip";
todo.innerText = ip;
deleting.className = "delete-todo";
deleting.innerText = "Delete";
deleting.addEventListener("click", ()=>{
    container.remove();
});

check.className = "checking";
check.setAttribute('type','checkbox');

doc.append(container);
container.append(todo, check, deleting);

}