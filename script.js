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
    thisTitle.innerHTML = "<input type='checkbox'>" + input.value + "<button class='delete'>❌</button>";
    document.querySelector("#todo").appendChild(thisTitle)
    counter++;
    document.getElementById("count").innerHTML = counter + " items left";
    deleteTodo();
    const inputInput = document.getElementById('input');
    inputInput.value = '';
    hideFooter();    
}

function deleteTodo() {
    var close = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var li = this.parentElement;
            li.remove(li);
            counter--;
            document.getElementById("count").innerHTML = counter + " items left";
            hideFooter();
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