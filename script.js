const inputBox = document.getElementById("inputBox");
const inputButton = document.getElementById("inputBtn");
const listContainer = document.getElementById("listContainer")

inputButton.addEventListener("click", addTask)
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    }
    else if(inputBox.value != ''){
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasksLocally();
}

listContainer.addEventListener("click", removeAndCheck)

function removeAndCheck(e){
    console.log(e.target.tagName);
    if(e.target.tagName == 'LI'){
        e.target.classList.add("checked");
        saveTasksLocally();
    }
    else if(e.target.tagName == 'SPAN' || e.target.tagName == 'IMG'){
        e.target.parentElement.remove();
        saveTasksLocally();
    }
}

function saveTasksLocally(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function displaySavedTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displaySavedTasks();
