window.onload = function () {
    displayTasks();
};

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var task = taskInput.value.trim();
    var tasks = getTasksFromStorage();
    tasks.push(task);
    saveTasksToStorage(tasks);
    taskInput.value = '';
    displayTasks();
}

function displayTasks() {
    var tasks = getTasksFromStorage();
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(function (task, index) {
        var listItem = document.createElement('li');
        listItem.textContent = task;
        listItem.onclick = function () {  //remove
            tasks.splice(index, 1);
            saveTasksToStorage(tasks);
            displayTasks();
        };
        taskList.appendChild(listItem);
    });
}

function getTasksFromStorage() {
    var tasks = localStorage.getItem('tasks');
    if (tasks) {
        return JSON.parse(tasks);
    } else {
        return [];
    }
}

function saveTasksToStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}