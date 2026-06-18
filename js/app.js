import { addTask, deleteTask, returnTasks } from './tasks.js'

document.addEventListener("DOMContentLoaded", () => {       // run js only when the all the html is fully loaded

    const app = document.querySelector(".main-content");
    const appView = document.querySelector("#appView");
    const availbleTasks = returnTasks();

    function dashboardView() {
        app.style.display = "block";
        appView.style.display = "none";

        const showTask = document.querySelector(".tasks-section");
        for (let i = 0; i < availbleTasks.length; i++) {

            showTask.innerHTML += `
                <div class="task">
                    <span>${availbleTasks[i]}</span>
                </div>

        `
        }

    }

    function tasksView() {
        app.style.display = "none";
        appView.style.display = "block";


        appView.innerHTML = `
        <div class="tasks-page">

        <div class="tasks-header">
            <h1>Tasks</h1>
            <p>Manage your daily study tasks.</p>
        </div>

        <div class="task-input-container">
            <input
                id="taskInput"
                type="text"
                placeholder="Enter a task..."
            >

            <button id="taskAdd">
                Add Task
            </button>
        </div>

        <div id="taskPanel" style = "display: none;">
        </div>

       </div>
    `;
        const task = document.querySelector("#taskInput");
        const taskAdd = document.querySelector("#taskAdd");
        const taskPanel = document.querySelector("#taskPanel");
        let numberOftasks = 0;

        taskAdd.addEventListener('click', (e) => {
            taskPanel.style.display = "block";
            console.log("its clicking")
            let taskText = task.value.trim().toLowerCase();
            let taskArray = addTask(taskText);
            numberOftasks++;
            if (numberOftasks == 1) {
                taskPanel.innerHTML = ``;
            }
                taskPanel.innerHTML += `
                  <div class="task-item">
                    <input type="checkbox">
                    <span>${taskArray[taskArray.length-1]}</span>
                  </div>
                 `
            

        })
        if (numberOftasks == 0) {
            taskPanel.style.display = "block";
            for (let i = 0; i < availbleTasks.length; i++) {


                taskPanel.innerHTML += `
                <div class="task-item">

                    <input type="checkbox">
                    <span>${availbleTasks[i]}</span>
               </div>
        `
            }

        }


    }

    function goalsView() {
        app.style.display = "none";
        appView.style.display = "block";

        appView.innerHTML = `
            <h1>Goals</h1>
            <p>Goal screen here</p>
        `;
    }

    function timerView() {
        app.style.display = "none";
        appView.style.display = "block";

        appView.innerHTML = `
            <h1>Study Timer</h1>
            <p>00:00:00</p>
        `;
    }

    // sidebar clicks
    document.querySelector(".sidebar").addEventListener("click", (e) => {

        const text = e.target.textContent.trim().toLowerCase();     //"  Tasks "-> "tasks"

        if (text.includes("dashboard")) dashboardView();
        if (text.includes("tasks")) tasksView();
        if (text.includes("goals")) goalsView();
        if (text.includes("timer")) timerView();

    });

    // default view
    dashboardView();

});