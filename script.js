let enterbutton = document.querySelector("#enterbutton");
let form = document.querySelector("form");
let input = document.querySelector("#input");
let counter = 0;
document.getElementById("todofooter").style.display = "none";
let checkBoxes = document.getElementById("checkall")

form.onsubmit = event => {
    event.preventDefault();
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
    checkBox();
    const inputInput = document.getElementById('input');
    inputInput.value = '';
    toggleFooter();
}
checkBoxes.onclick = event =>{
    checkAll();
}

function deleteTodo() {
    
    var remove = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var li = this.parentElement;
            var elem = li.firstChild;
            console.log(elem.checked);
            li.remove(li);
            if (!elem.checked) {
                counter--;
            }
            document.getElementById("count").innerHTML = counter + " items left";
            toggleFooter();
        }
    }
}

function checkBox() {
    var check = document.getElementsByClassName("check");
    var i;
    for (i = 0; i < check.length; i++) {
        check[i].onclick = function () {
            if (this.checked) {
                counter--;
                document.getElementById("count").innerHTML = counter + " items left";
                // lägg till i css??? för att överstryka/fadea
            }
            else {
                counter++;
                document.getElementById("count").innerHTML = counter + " items left";
                // lägg till i css??? för att överstryka/fadea
            }
        }
    }
}

function toggleFooter(){
    var totalItems = document.querySelector("#todo").children.length;
    if(totalItems == 0){
        document.getElementById("todofooter").style.display = "none";
    }
    else{
        document.getElementById("todofooter").style.display = "block";
    }
}

function checkAll(){
    let isChecked = document.getElementById('checkall')
    let todos = document.getElementById('todo').getElementsByTagName('li');
    let i= 0;
    for (i = 0; i < todos.length; i++){
        let liElement = todos[i].firstChild;
        liElement.checked = true;
        if(isChecked.checked){
            liElement.checked = true;
        }
        else{
            liElement.checked = false;
        }
    }
}