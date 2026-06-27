import { addTask, deleteTask, returnTasks } from './tasks.js'
import { startTimer, stopTimer, getTime, resetTimer } from './tracker.js';
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

        const showMotivation = document.querySelector("#motivationalText")

        const xhr = new XMLHttpRequest();       //old method for js acessing apis
        xhr.open('GET', 'https://dummyjson.com/quotes');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    const response = JSON.parse(xhr.responseText);          //random quote generator from an api
                    //          setInterval(() => {
                    let motivation = response.quotes[Math.floor(Math.random() * 30)].quote;
                    showMotivation.textContent = motivation;
                    //       }, 5000)

                } else {
                    console.log(xhr.status)
                }

            }

        }

        xhr.send();


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
                    <span>${taskArray[taskArray.length - 1]}</span>
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
<div class="goals-page">

    <div class="page-header">
        <div>
            <h1>Goals</h1>
            <p>Track your learning journey.</p>
        </div>

        <button id="addGoalBtn">+ New Goal</button>
    </div>


    <section class="goal-stats">

        <div class="goal-stat-card">
            <h3>Active</h3>
            <span id="activeGoalCount">0</span>
            <!-- JS -->
        </div>

        <div class="goal-stat-card">
            <h3>Completed</h3>
            <span id="completedGoalCount">0</span>
            <!-- JS -->
        </div>

        <div class="goal-stat-card">
            <h3>Completion</h3>
            <span id="completionRate">0%</span>
            <!-- JS -->
        </div>

        <div class="goal-stat-card">
            <h3>Overdue</h3>
            <span id="overdueGoals">0</span>
            <!-- JS -->
        </div>

    </section>


    <div class="goal-content">

        <div class="left-column">

            <section>

                <h2>Active Goals</h2>

                <div id="goalContainer">

                    <!-- JS: Render Goal Cards -->

                    <div class="goal-card">

                        <div class="goal-top">

                            <div>
                                <h3>JavaScript Mastery</h3>
                                <p>Web Development</p>
                            </div>

                            <span class="goal-badge active">
                                Active
                            </span>

                        </div>

                        <div class="progress-bar">

                            <div class="progress-fill" style="width:65%;">
                                <!-- JS -->
                            </div>

                        </div>

                        <div class="goal-info">

                            <span>65%</span>

                            <span>Deadline : 30 Sept</span>

                        </div>

                        <div class="goal-actions">

                            <button>Edit</button>

                            <button>Complete</button>

                            <button>Delete</button>

                        </div>

                    </div>

                </div>

            </section>



            <section class="completed-section">

                <h2>Completed Goals</h2>

                <div id="completedGoalContainer">

                    <!-- JS -->

                </div>

            </section>

        </div>



        <div class="right-column">

            <div class="side-card">

                <h3>Upcoming Deadlines</h3>

                <div id="deadlineContainer">

                    <!-- JS -->

                </div>

            </div>



            <div class="side-card">

                <h3>Achievements</h3>

                <div id="achievementContainer">

                    <!-- JS -->

                </div>

            </div>



            <div class="side-card">

                <h3>Quick Actions</h3>

                <button class="action-btn">+ Add Goal</button>

                <button class="action-btn">Import Goals</button>

                <button class="action-btn">Export Progress</button>

                <!-- JS -->

            </div>

        </div>

    </div>

</div>
`;
    }

    function timerView() {
        app.style.display = "none";
        appView.style.display = "block";

        appView.innerHTML = `
        <section class="timer-section">
            <h1>Study Timer</h1>
            <div id ="timer" class="timer-display">00:00:00</div>
            <div class="timer-buttons">
             <button id ="startTimer" >start</button>
            <button id = "stopTimer" >stop</button>
            <button id = "resetTimer">reset</botton>
            </div
           
        </section>
        `;

        const timerDisplay = document.querySelector("#timer");
        const startBtn = document.querySelector("#startTimer");
        const stopBtn = document.querySelector("#stopTimer");
        const resetBtn = document.querySelector("#resetTimer");

        let timerclicked = null;
        startBtn.addEventListener('click', () => {
            if (timerclicked) return;
            startTimer();
            timerclicked = setInterval(() => {
                let time = getTime();
                const h = String(time[0]).padStart(2, '0');
                const m = String(time[1]).padStart(2, '0');     //.padStart newstuff
                const s = String(time[2]).padStart(2, '0');

                timerDisplay.textContent = `${h}:${m}:${s}`;
            }, 1000)
        })  //{once:true}third parameter new stuff

        stopBtn.addEventListener('click', () => {
            stopTimer();
            clearInterval(timerclicked);        //stops the ongoing useless updation after stop
            timerclicked = null;
        })

        resetBtn.addEventListener('click', () => {
            resetTimer();
            timerDisplay.textContent = `00:00:00`
            clearInterval(timerclicked);        //stops the ongoing useless updation after stop
            timerclicked = null;
        })

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