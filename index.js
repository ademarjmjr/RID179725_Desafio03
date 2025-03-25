/*
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

        const containerDiv = document.createElement("div"); // Cria a div encapsuladora
        containerDiv.className = "task-container"; // Classe para estilo opcional

        const tagSpan = document.createElement("span");
        tagSpan.textContent = `  ${tag} `;

        const tagDiv = document.createElement("div");
        tagDiv.textContent = `  - Criado em ${date}`;

        const completeButton = document.createElement("button");
        completeButton.className = "complete-task-btn";
        completeButton.innerHTML = completed
            ? `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16.5" r="16" fill="#00D8A7"/>
                <path d="M10.6667 17.1667L14 20.5L21.3334 13.1667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`
            : "Concluir";
        completeButton.style.border = "none";
        completeButton.style.background = " none";
        completeButton.addEventListener("click", function () {
            descriptionInput.style.textDecoration = completed ? "none" : "line-through";
            completeButton.innerHTML = completed
                ? "Concluir"
                : `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16.5" r="16" fill="#00D8A7"/>
                    <path d="M10.6667 17.1667L14 20.5L21.3334 13.1667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>`;
            completed = !completed;

            updateTaskInLocalStorage(description, completed);
            updateCompletedTaskCounter();
        });

        containerDiv.appendChild(tagSpan);
        containerDiv.appendChild(tagDiv);
        containerDiv.appendChild(completeButton);

        listItem.appendChild(descriptionInput);
        listItem.appendChild(containerDiv);

        todoList.appendChild(listItem);

        if (completed) {
            descriptionInput.style.textDecoration = "line-through";
            completeButton.innerHTML = `<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16.5" r="16" fill="#00D8A7"/>
                <path d="M10.6667 17.1667L14 20.5L21.3334 13.1667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`;
            completeButton.style.color = "green";
        }
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
*/

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

        const containerDiv = document.createElement("div");
        containerDiv.className = "task-container";

        const tagSpan = document.createElement("span");
        tagSpan.textContent = `  ${tag} `;

        const tagDiv = document.createElement("div");
        tagDiv.textContent = `  - Criado em ${date}`;

        const completeButton = document.createElement("button");
        completeButton.className = "complete-task-btn";
        updateButtonStyle(completeButton, completed);

        completeButton.addEventListener("click", function () {
            completed = !completed;

            descriptionInput.style.textDecoration = completed ? "line-through" : "none";
            updateButtonStyle(completeButton, completed);

            updateTaskInLocalStorage(description, completed);
            updateCompletedTaskCounter();
        });

        containerDiv.appendChild(tagSpan);
        containerDiv.appendChild(tagDiv);
        containerDiv.appendChild(completeButton);

        listItem.appendChild(descriptionInput);
        listItem.appendChild(containerDiv);

        todoList.appendChild(listItem);
    }

    function updateButtonStyle(button, completed) {
        if (completed) {
            button.innerHTML = `<svg width="2rem" height="2rem" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16.5" r="16" fill="#00D8A7"/>
                <path d="M10.6667 17.1667L14 20.5L21.3334 13.1667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`;
            button.style.width = "2.75rem";
            button.style.height = "2.75rem";
            button.style.border = "none";
            button.style.background = "none";
        } else {
            button.innerHTML = "Concluir";
            button.style.width = "7.5rem"; // Ajuste proporcional
            button.style.height = "2.75rem";
            button.style.border = "0.0625rem solid #2D70FD"; // Borda com rem
            button.style.borderRadius = "0.25rem"; // Arredondamento com rem
            button.style.background = "#2D70FD";
            button.style.color = "#FFFFFF";
            button.style.fontFamily = "Inter";
            button.style.fontWeight = "500";
            button.style.fontSize = "1.125rem"; // Fonte responsiva
            button.style.textAlign = "center";
            button.style.padding = "0.75rem 1.5rem"; // Ajuste proporcional no padding
        }
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

