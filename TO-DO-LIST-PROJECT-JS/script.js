const inputBox = document.getElementById("input");
const listContainer = document.getElementById("task-list")

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something...')

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();

    }
}, false);

//to save the data on browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//to save the data after refreshing
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();


//by using arrays
// var todos = [];
// document.getElementById('button').addEventListener('click', function () {
// var list = document.getElementById('task-list');
// list.innerHTML = ''; //resetting the list
//   var todoInput = document.getElementById('input').value;
// todos.push(todoInput)  

//     var item = document.createElement("li");
// for (var i = 0; i < todos.length; i++) {
//     var listItem = document.createTextNode(todos[i]);
//    var li = document.createElement("li");
// li.appendChild(document.createTextNode(todos[i]));
// list.append(li);
// let span = document.createElement("span");
//     span.innerHTML = '\u00d7';
//     li.appendChild(span);
// }

// });




