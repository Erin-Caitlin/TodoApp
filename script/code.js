let sortBtn = document.querySelector('[sort]')
let task = document.querySelector('[task-input]')
let addBtn = document.querySelector('[add]')
let displayTasks = document.querySelector('[tasks]')

sortBtn.addEventListener('click', sortTasks)
addBtn.addEventListener('click', addTasks)

let tasks = [];
function renderTasks() {
    displayTasks.innerHTML = "";
    tasks.forEach(task => {
        let listItem = document.createElement("li");
    })
}








