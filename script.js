let enterbutton = document.querySelector("#enterbutton");
let form = document.querySelector("form");
let input = document.querySelector("#input");

form.onsubmit = event => {
    event.preventDefault();
}

enterbutton.onclick = event => {
    let i = 0;
    const thisTitle = document.createElement("li");
    thisTitle.setAttribute("id", "todolist");
    thisTitle.innerHTML = "<input type='checkbox'>" + input.value + "<button class='delete'>❌</button>";
    document.querySelector("#todo").appendChild(thisTitle)
    addTask();
}

function addTask() {
    var close = document.getElementsByClassName("delete");
    var d;
    for (d = 0; d < close.length; d++) {
        close[d].onclick = function () {
            var div = this.parentElement;
            div.remove(div);
        }
    }
}
