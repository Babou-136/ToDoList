const form = document.getElementById("form");
const text_task = document.getElementById("new_task");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement("li");
    const text = text_task.value.trim();
    if (text === "")
        return;

    const task_added = document.createElement("span");
    task_added.textContent = text;

    const done = document.createElement("button");
    done.textContent = "x";

    done.addEventListener("click", () => {
        task_added.style.textDecoration = "line-through";
    })

    li.appendChild(task_added);
    li.appendChild(done);
    text_task.value = "";

    document.getElementById("ul").appendChild(li);
})