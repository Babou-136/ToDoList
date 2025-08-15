const form = document.getElementById("form");
const textTask = document.getElementById("new_task");
const taskList = document.getElementById("ul");
let allTasks = JSON.parse(localStorage.getItem("todolist")) || [];

function saveTasks() {
  localStorage.setItem("todolist", JSON.stringify(allTasks));
}

if (allTasks != null)
  allTasks.forEach(task => { renderTask(task); })

function renderTask(task) {
  const li = document.createElement("li");

  const contentWrapper = document.createElement("div");
  contentWrapper.style.alignItems = "center";
  contentWrapper.style.gap = "8px";

  const taskSpan = document.createElement("span");
  taskSpan.textContent = task.text;
  taskSpan.title = task.text;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(taskSpan);
  contentWrapper.appendChild(label);

  const dateBtn = document.createElement("input");
  dateBtn.type = "date";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "textContent"
  descriptionInput.classList.add("descriptionInput")

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");

  const deleteIcon = document.createElement("img");
  deleteIcon.src = "images/delete.png";
  deleteIcon.alt = "Supprimer";
  deleteIcon.classList.add("deleteIcon");
  deleteBtn.appendChild(deleteIcon);

  checkbox.addEventListener("change", () => {
    task.done = checkbox.checked;
    localStorage.setItem("todolist", JSON.stringify(allTasks));
  });

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
    allTasks = allTasks.filter(t => t !== task);
    localStorage.setItem("todolist", JSON.stringify(allTasks));
  });

  li.appendChild(contentWrapper);
  li.appendChild(dateBtn);
  li.appendChild(descriptionInput);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = textTask.value.trim();
  if (text === "")
    return;

  const taskAdded = {
    text: text,
    done: false
  };

  allTasks.push(taskAdded);
  saveTasks();
  renderTask(taskAdded);
  textTask.value = "";
})
