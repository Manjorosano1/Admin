document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = taskInput.value;

        // Yangi vazifani yaratish
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.innerHTML = `<p>${taskText}</p>`;

        // Vazifani ro'yxatga qo'shish
        taskList.appendChild(taskDiv);

        // Formani tozalash
        taskInput.value = '';
    });
});
