document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const priorityInput = document.getElementById('priority');
    const dueDateInput = document.getElementById('due-date');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, priorityInput.value, dueDateInput.value, categoryInput.value);
        taskForm.reset();
    });

    function addTask(task, priority, dueDate, category) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task} - ${priority} - ${category} - ${dueDate}</span>
            <div>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const completeBtn = taskItem.querySelector('.complete-btn');
        completeBtn.addEventListener('click', () => {
            taskItem.querySelector('span').classList.toggle('task-complete');
        });

        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    }
});