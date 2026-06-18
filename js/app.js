document.addEventListener("DOMContentLoaded", () => {       // run js only when the all the html is fully loaded

    const app = document.querySelector(".main-content");
    const appView = document.querySelector("#appView");

     function dashboardView() {
        app.style.display = "block";
        appView.style.display = "none";
    }

    function tasksView() {
        app.style.display = "none";
        appView.style.display = "block";


        appView.innerHTML = `
            <h1>Tasks</h1>
            <input placeholder="Add task">
            <button>Add</button>
        `;
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