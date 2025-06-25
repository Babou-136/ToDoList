const form = document.getElementById("form");
const text_task = document.getElementById("new_task");
let saved_tasks = JSON.parse(localStorage.getItem("todolist")) || [];

if (tasks != null) {
  let tasks = JSON.parse(saved_tasks);
} else {
  let tasks = [];
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

  tasks.push({ text, done: false });
  localStorage.setItem("todolist", JSON.stringify(tasks));

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("label");
  label.appendChild(checkbox);
  label.appendChild(task_added);

  contentWrapper.appendChild(label);

  const delete_btn = document.createElement("button");
  delete_btn.classList.add("delete_btn")
  delete_btn.addEventListener("click", () => {
    document.getElementById("ul").removeChild(li);
  })

  li.appendChild(contentWrapper);
  li.appendChild(delete_btn);
  text_task.value = "";

  document.getElementById("ul").appendChild(li);
  localStorage.setItem()
})
