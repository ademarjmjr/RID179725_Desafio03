document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("create-todo-form");
    const inputDescription = document.getElementById("description");
    const inputTag = document.getElementById("tag");
    const todoList = document.getElementById("todo-list");
    const completedTaskCounter = document.getElementById("completed-task-counter");

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        addTaskToList(task.description, task.tag, task.date, task.completed);
    });

    updateCompletedTaskCounter();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const taskDescription = inputDescription.value.trim();
        const taskTag = inputTag.value.trim();
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("pt-BR");

        if (taskDescription !== "" && taskTag !== "") {
            const task = { description: taskDescription, tag: taskTag, date: formattedDate, completed: false };
            addTaskToList(taskDescription, taskTag, formattedDate, false);

            savedTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

            inputDescription.value = "";
            inputTag.value = "";
        } else {
            alert("Por favor, preencha todos os campos antes de cadastrar a tarefa!");
        }
    });

    function addTaskToList(description, tag, date, completed) {
        const listItem = document.createElement("li");
        
        const descriptionInput = document.createElement("input");
        descriptionInput.type = "text";
        descriptionInput.value = description;
        descriptionInput.readOnly = true;
        descriptionInput.style.textDecoration = completed ? "line-through" : "none";

        const tagSpan = document.createElement("span");
        tagSpan.textContent = ` | ${tag} - criado em ${date}`;

        const completeButton = document.createElement("button");
        completeButton.className = "complete-task-btn";
        completeButton.innerHTML = completed ? "✔️" : "Concluir";
        completeButton.style.color = completed ? "green" : "inherit";
        completeButton.addEventListener("click", function () {
            descriptionInput.style.textDecoration = completed ? "none" : "line-through";
            completeButton.innerHTML = completed ? "Concluir" : "✔️";
            completeButton.style.color = completed ? "inherit" : "green";
            completed = !completed;

            updateTaskInLocalStorage(description, completed);
            updateCompletedTaskCounter();
        });

        listItem.appendChild(descriptionInput);
        listItem.appendChild(tagSpan);
        listItem.appendChild(completeButton);
        todoList.appendChild(listItem);
    }

    function updateTaskInLocalStorage(description, completed) {
        const index = savedTasks.findIndex(task => task.description === description);
        if (index !== -1) {
            savedTasks[index].completed = completed;
            localStorage.setItem("tasks", JSON.stringify(savedTasks));
        }
    }

    function updateCompletedTaskCounter() {
        const completedTasks = savedTasks.filter(task => task.completed).length;
        completedTaskCounter.textContent = `${completedTasks} tarefa(s) concluída(s)`;
    }
});
