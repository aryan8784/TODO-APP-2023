var input = document.getElementById("inp");
var list = document.getElementById("list");

var todoListt = [];

function addTodo() {
    if (input.value == "") {
        alert('Please enter the task');
        return;
    }
    todoListt.push(input.value);
    input.value = "";
    render()
}

function render() {
    list.innerHTML = "";
    for (var i = 0; i < todoListt.length; i++) {
        list.innerHTML += `<ul> ${todoListt[i]} <div class ="editbtn" onclick="editTodo(${i})"><i  class="fa-solid fa-pen-to-square edittask"></i> 
        </div> <div class ="delbtn"  onclick="delTodo(${i})"><i class="fa-solid fa-trash deltask"></i></div> </ul>`
    }
}


function editTodo(i) {
    todoListt[i] = prompt("Enter Your New Value",todoListt[i]);
    render()
}
function delTodo(i) {
    todoListt.splice(i, 1);
    render()
}

function delAll(){
    todoListt =[];
    list.innerHTML ="";
}