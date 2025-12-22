const task = document.querySelector("#todo-input");
const addtask = document.querySelector("#todo-button");
let tasks_container = document.querySelector("#right-side-bar");
addtask.addEventListener("click", () => {

    tasks_container.insertAdjacentHTML("beforeend", //good learning point
     `
    <label>
      <input type="checkbox"> 
      <span class ="tasks"> ${task.value}</span>
    </label><br>
    `
    )
});
