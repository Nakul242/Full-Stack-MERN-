let nextId = 1;
let todos = [];

function addTask(task) {
    const newTask = {
        id: nextId,
        task: task,
        completed: false
    }

    todos.push(newTask);
    nextId++;
}

function seeTask() {
    todos.forEach(val => {
        console.log(val);
    });
    // console.log(todos);
}

function deleteTask(id) {
    todos = todos.filter(function(val) {
        if ( val.id !== id) return true;
    });
}

function toggleTask(id) {
    todos = todos.map(function(val) {
        if (val.id === id) {
            return {...val, completed: !val.completed };
        }
        return val;
    });
}

function getCompletedTasks() {
    return todos.filter(val => val.completed);
}
    
function getPendingTasks() {
    return todos.filter(val => !val.completed);
}

function searchTask(name) {
    return todos.find(val => name === val.task);
}

function countCompletedTasks() {
    let count = 0;

    todos.forEach(val => {
        if (val.completed) count++;
    });

    return count;
}

function countPendingTasks() {
    return todos.filter(val => !val.completed).length;
}