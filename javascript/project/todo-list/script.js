const form = document.querySelector("form");
const allTask = document.querySelector("#allTask");
const input = document.querySelector("input");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const text = input.value.trim();

    if(text ==""){
        return;
    }

    const parent = document.createElement("div");
    const task = document.createElement("span");
    task.textContent = text;
    task.style.marginRight = "90px"

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done"
    doneBtn.style.backgroundColor = "green";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.backgroundColor = "red";

    doneBtn.style.marginRight = "30px";
    doneBtn.style.marginBottom = "30px";



    parent.append(task, doneBtn, deleteBtn);
    allTask.append(parent);

    deleteBtn.addEventListener("click", (e)=>{
        parent.remove();
    })

    doneBtn.addEventListener("click", (e)=>{
        task.style.textDecoration = "line-through";
        task.style.color = "grey;"
    })

    form.reset();

})