window.onload = function()
{
    showTasks();
}
function addTasks()
{
    var task = document.getElementById("taskinput").value;
    let tasktext = Input.value.trim();
    if(tasktext != "")
    {
        let tasks = gettasks();
        tasks.push(tasktext);
        saveTasks(tasks);
        showTasks();
        input.value="";
    }
}
function deleteTask(index)
{
    let tasks = getTasks();
    tasks.splice(index,1);
    saveTasks(tasks);
    showTasks();
}
function getTasks()
{
    let tasks = localStorage.getItem("ganeshTasks");
    return tasks ? JSON.parse(tasks) : [];
}
function saveTasks(tasks)
{
    localStorage.setItem("ganeshTasks",JSON.stringify(tasks));
}
function showTasks()
{
    let list = document.getElementById("tasklist");
    list.innerHTML = "";
    let tasks = getTasks();     
 tasks.forEach(function(task,index)
 {
    let li = document.createElement("li");
    li.innerText = task+"";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.onclick = function()
    {
        deleteTask(index);
    }
    li.appendChild(deleteBtn);
    list.appendChild(li);
 });
}
document.getElementById("taskInput").addEventListener("keypress",function(event)
{
    if(event.key === "Enter")
        addTask();
});