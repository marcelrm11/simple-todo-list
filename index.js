// Your code here
let input = document.querySelector("#addToDo");
let list = document.querySelector("ul");

input.addEventListener("keydown", addTask);
let trashes = document.querySelectorAll("span");
console.log(trashes);
for (let trash of trashes) {
    console.log(trash);
    trash.addEventListener("click", deleteTask);
}

function addTask(event) {
    if (event.key == "Enter") {
        let newTask = event.target.value;
        console.log(event, newTask);
        let newRow = document.createElement("li");
        newRow.innerHTML = '<span><i class="fa fa-trash"></i></span> ' + newTask;
        list.appendChild(newRow);
        newRow.querySelector("span").addEventListener("click", deleteTask);
        input.value = "";
    }
}

function deleteTask(event) {
    let taskElement = event.target.parentNode.parentNode;
    console.log(taskElement);
    list.removeChild(taskElement);
}