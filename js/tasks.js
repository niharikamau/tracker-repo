//ADD TASKS
const tasks =[];
export function addTask(task){
    tasks.push(task);
    return tasks;
}

//DELETE TASKS
export function deleteTask(task){
    for(let i =0; i<tasks.length; i++){
        if(tasks[i]==task){
            tasks.splice(i,1);
        }
    }
    return tasks;
}

//RETURN TASKS
export function returnTasks(){
  return tasks;
}
