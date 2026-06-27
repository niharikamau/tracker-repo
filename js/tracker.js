//START TIMER
let sec = 0;
let minute = 0;
let hour = 0;

let timer = null;
export function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        sec++
        if (sec == 60) {
            sec = 0;
            minute++;
        }

        if (minute == 60) {
            minute = 0;
            sec = 0;
            hour++;
        }

    }, 1000)
}


//GET TIMER
export function getTime() {
    let time = [hour, minute, sec];
    return time;
}

//STOP TIMER
export function stopTimer() {
    clearInterval(timer)
    timer = null;
}

//RESET TIMER 
export function resetTimer() {
    sec = 0;
    minute = 0;
    hour = 0;
    clearInterval(timer);
    timer = null;
}

let progress =0;
let streaks =0;

//CALCULATE PROGRESS
export function getProgress(tasksDone,totalTasks){
    progress  = Math.round((tasksDone/totalTasks)*100)
    return progress
}

//CALCULATE STREAKS
export function getStreaks(){
    if(progress==100){
        streaks++;
    }
    return streaks;
}

