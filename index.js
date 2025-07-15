const form = document.getElementById("form");
const text_task = document.getElementById("new_task");
let tasks = JSON.parse(localStorage.getItem("todolist")) || [];

if (tasks != null)
  tasks.forEach(task => { renderTask(task); })

function renderTask(task) {
  const li = document.createElement("li");

  const contentWrapper = document.createElement("div");
  contentWrapper.style.display = "flex";
  contentWrapper.style.alignItems = "center";
  contentWrapper.style.gap = "8px";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = task.text;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(taskSpan);
  contentWrapper.appendChild(label);

  const delete_btn = document.createElement("button");
  delete_btn.classList.add("delete_btn");

  const delete_icon = document.createElement("img");
  delete_icon.src = "images/delete.png";
  delete_icon.alt = "Supprimer";
  delete_icon.classList.add("delete_icon");
  delete_btn.appendChild(delete_icon)

  checkbox.addEventListener("change", () => {
    task.done = checkbox.checked;
    localStorage.setItem("todolist", JSON.stringify(tasks));
  });

  delete_btn.addEventListener("click", () => {
    document.getElementById("ul").removeChild(li);
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("todolist", JSON.stringify(tasks));
  });

  li.appendChild(contentWrapper);
  li.appendChild(delete_btn);

  document.getElementById("ul").appendChild(li);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");

  const contentWrapper = document.createElement("div");
  contentWrapper.style.display = "flex";
  contentWrapper.style.alignItems = "center";
  contentWrapper.style.gap = "8px";

  const text = text_task.value.trim();
  if (text === "")
    return;

  const task_added = document.createElement("span");
  task_added.textContent = text;

  const task = { text, done: false };
  tasks.push(task);
  localStorage.setItem("todolist", JSON.stringify(tasks));

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.addEventListener("change", () => {
    task.done = checkbox.checked;
    localStorage.setItem("todolist", JSON.stringify(tasks));
  });

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(task_added);
  contentWrapper.appendChild(label);

  const delete_btn = document.createElement("button");
  delete_btn.classList.add("delete_btn");

  const delete_icon = document.createElement("img");
  delete_icon.src = "images/delete.png";
  delete_icon.alt = "Supprimer";
  delete_icon.classList.add("delete_icon");
  delete_btn.appendChild(delete_icon)

  delete_btn.addEventListener("click", () => {
    document.getElementById("ul").removeChild(li);
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("todolist", JSON.stringify(tasks));
  })

  li.appendChild(contentWrapper);
  li.appendChild(delete_btn);
  text_task.value = "";

  document.getElementById("ul").appendChild(li);
})
