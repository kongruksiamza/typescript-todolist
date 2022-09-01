"use strict";
const inputEl = document.getElementById("input");
const formEl = document.querySelector("form");
const listEl = document.getElementById("list");
formEl.addEventListener("submit", saveData);
const tasks = readData();
tasks.forEach(createList);
//ลบทุกรายการ
// localStorage.removeItem("myList")
function saveData(e) {
    e.preventDefault();
    const newTask = {
        name: inputEl.value,
        completed: false
    };
    createList(newTask);
    tasks.push(newTask);
    localStorage.setItem("myList", JSON.stringify(tasks));
}
function createList(task) {
    const liEl = document.createElement("li");
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.checked = task.completed;
    checkboxEl.addEventListener("change", function () {
        task.completed = checkboxEl.checked;
        updateData();
    });
    liEl.append(task.name);
    liEl.append(checkboxEl);
    listEl.append(liEl);
    inputEl.value = "";
}
function readData() {
    const myList = localStorage.getItem("myList");
    if (myList == null)
        return [];
    return JSON.parse(myList);
}
function updateData() {
    localStorage.setItem("myList", JSON.stringify(tasks));
}
