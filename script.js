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
    addTask();
    const inputInput = document.getElementById('input');
    inputInput.value = '';
    if(counter == 0){
        document.getElementById("todofooter").style.display = "none";
    }
    else{
        document.getElementById("todofooter").style.display = "block";
    }
    
}

function addTask() {
    var close = document.getElementsByClassName("delete");
    var d;
    for (d = 0; d < close.length; d++) {
        close[d].onclick = function () {
            var div = this.parentElement;
            div.remove(div);
            counter--;
            document.getElementById("count").innerHTML = counter + " items left";
            if(counter == 0){
                document.getElementById("todofooter").style.display = "none";
            }
            else{
                document.getElementById("todofooter").style.display = "block";
            }
        }
    }
}



