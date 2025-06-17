const form = document.getElementById("form");
const text_task = document.getElementById("new_task");
const todo = document.getElementById("ul")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = text_task.value.trim();
    if (text === "")
        return;

    const task_added = document.createElement("li");
    task_added.textContent = text;

    todo.appendChild(task_added);
    text_task.value = "";
})
