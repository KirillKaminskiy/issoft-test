const addTaskBtn = document.getElementById("addTaskBtn");
const input = document.getElementById("taskTextInput");
const list = document.querySelector(".list");

list.addEventListener("click", (e) => {
  const taskClsName = "list-item";
  const isCheckedClsName = "title-checked";
  const isTargetChecked = e.target.classList.contains(isCheckedClsName);
  e.target.className = !isTargetChecked
    ? `${taskClsName} ${isCheckedClsName}`
    : taskClsName;
});

addTaskBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function formTaskAsHtml() {
  const newTask = document.createElement("li");
  newTask.innerText = input.value;
  newTask.className = "list-item";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.className = "delete-btn";
  newTask.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });
  return newTask;
}

function isInputEmpty() {
  if (input.value.trim() === "") {
    throw new Error("Can't add empty task");
  }
}

function addTask() {
  try {
    isInputEmpty();
    const newTask = formTaskAsHtml();
    setTimeout(() => {
      list.insertBefore(newTask, list.firstChild);
    }, 100);
    input.value = "";
  } catch (err) {
    console.error(err);
  }
}
