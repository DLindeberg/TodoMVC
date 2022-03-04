let enterbutton = document.querySelector("#enterbutton");
let form = document.querySelector("form");
let input = document.querySelector("#input");
let counter = 0;
document.getElementById("todofooter").style.display = "none";
let checkBoxes = document.getElementById("checkall");
let allButton = document.querySelector("#all");
let activeButton = document.querySelector("#active");
let completedButton = document.querySelector("#completed");
let clearCompletedButton = document.querySelector("#clearcompleted");
let list = document.getElementById('todo').getElementsByTagName('li');

form.onsubmit = event => {
    event.preventDefault();
}

checkBoxes.onclick = event => {
    CheckAll();
}

enterbutton.onclick = event => {

    if (!input.value) {
        return;
    }
    const thisTitle = document.createElement("li");
    thisTitle.setAttribute("id", "todolist");
    thisTitle.innerHTML = "<input type='checkbox' class='check'>" + input.value + "<button class='delete'>❌</button>";
    document.querySelector("#todo").appendChild(thisTitle)
    counter++;
    document.getElementById("count").innerHTML = counter + " items left";
    deleteTodo();


    const inputInput = document.getElementById('input');
    inputInput.value = '';
    checkState();

    thisTitle.firstChild.addEventListener('change', function (event) {
        if (this.checked) {
            counter--;
            styleLinethrough();
            
        } else {
            counter++;
            styleLinethrough();
        }

        document.getElementById("count").innerHTML = counter + " items left";
    });
}
allButton.onclick = event =>{
    for (let i = 0; i < list.length; i++) {
        document.getElementById("todo").children[i].style.display = "block"
    }
}


activeButton.onclick = event =>{
    for (let i = 0; i < list.length; i++) {
            let liElement = list[i].firstChild
        if (liElement.checked) {
            document.getElementById("todo").children[i].style.display = "none"
        }
        else{
            document.getElementById("todo").children[i].style.display = "block"
        }
    }
}
completedButton.onclick = event =>{
    for (let i = 0; i < list.length; i++) {
            let liElement = list[i].firstChild
        if (liElement.checked) {
            document.getElementById("todo").children[i].style.display = "block"
        }
        else{
            document.getElementById("todo").children[i].style.display = "none"
        }
    }
}
clearCompletedButton.onclick = event =>{
    for (let i = 0; i < list.length; i++) {
            let liElement = list[i].firstChild
        if (liElement.checked) {
            list[i].remove(list[i])
        }
        else{
            continue;
        }
    }
}

function CheckAll() {
    var shouldChecked = document.getElementById('checkall');
    var todos = document.getElementById('todo').getElementsByTagName('li');

    for (let i = 0; i < todos.length; i++) {
        let liElement = todos[i].firstChild;
        shouldChecked.checked ? liElement.checked = true : liElement.checked = false
        if (shouldChecked.checked) {
            liElement.checked = true;
            counter = 0;
            styleLinethrough();
        } else {
            liElement.checked = false;
            counter = todos.length;
            styleLinethrough();
        }
    }
    document.getElementById("count").innerHTML = counter + " items left";
}

function deleteTodo() {
    var remove = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var li = this.parentElement;
            var elem = li.firstChild;
            li.remove(li);
            if (!elem.checked) {
                counter--;
            }
            document.getElementById("count").innerHTML = counter + " items left";
        }
    }
}

function checkState() {
    var totalItems = document.querySelector("#todo").children.length;
    if (totalItems == 0) {
        document.getElementById("todofooter").style.display = "none";
    } else {
        document.getElementById("todofooter").style.display = "block";
    }
}

function hideFooter() {
    if (counter == 0) {
        document.getElementById("todofooter").style.display = "none";
    }
    else {
        document.getElementById("todofooter").style.display = "block";
    }
}

function styleLinethrough(){
    for (let i = 0; i < list.length; i++) {
        let liElement = list[i].firstChild
        if (liElement.checked) {
            list[i].style.textDecoration = "line-through";
        }
        else{
            list[i].style.textDecoration = "none";
        }
    }
}