let enterbutton = document.querySelector("#enterbutton");
let form = document.querySelector("form");
let input = document.querySelector("#input");
let counter = 0;
document.getElementById("todofooter").style.display = "none";

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
    hideFooter();    
}

function deleteTodo() {
    var remove = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            var li = this.parentElement;
            li.remove(li);
            counter--;
            document.getElementById("count").innerHTML = counter + " items left";
            hideFooter();
        }
    }
}

function checkBox(){
    var check = document.getElementsByClassName("check");
    var i;
    for (i = 0; i < check.length; i++) {
        check[i].onclick = function () {
            counter--;
            document.getElementById("count").innerHTML = counter + " items left";
        }
    }
}

function hideFooter(){
    if(counter == 0){
        document.getElementById("todofooter").style.display = "none";
    }
    else{
        document.getElementById("todofooter").style.display = "block";
    }
}