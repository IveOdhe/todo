var task = document.getElementById("task"),
    taskList = document.getElementById("task-list");

function addTask (event) {
    event.preventDefault();

    if(event.which === 13) {
        var liItem = document.createElement("li"),
            newTask = document.createElement("article"),
            text = document.createElement("span"),
            checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        text.textContent = this.value;

        liItem.appendChild(newTask);
        newTask.appendChild(checkbox);
        newTask.appendChild(text);
        taskList.appendChild(liItem);
        this.value = "";
        taskComplete();
    }
}

function taskComplete() {
    for(var i = 0; i < taskList.children.length; i++) {
        var check = taskList.children[i].querySelector("input");
        check.addEventListener("change", function (){
            if(this.checked) {
                this.parentElement.parentElement.classList.add("complete");
            }

            else {
                this.parentElement.parentElement.classList.remove("complete");
            }
        });
    }
}

task.addEventListener("keyup", addTask);
