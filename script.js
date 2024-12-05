// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // If the input is empty, alert the user
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Get the task list <ul> element
    const taskList = document.getElementById("taskList");

    // Create a new list item (<li>)
    const newTask = document.createElement("li");

    // Add the task text to the list item
    newTask.textContent = taskText;

    // Create the "Complete" button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        newTask.classList.toggle("completed");
    };

    // Create the "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        taskList.removeChild(newTask);
    };

    // Append buttons to the new task
    newTask.appendChild(completeButton);
    newTask.appendChild(deleteButton);

    // Add the new task to the task list
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = "";
}
