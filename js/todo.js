const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = []; //let 으로 해야 계속 값이 바뀔수 있음.

function saveTodos() {
  localStorage.setItem("toDos", JSON.stringify(toDos)); //localstorage는 array 형태로 저장을 못해서 일단은 이렇게 string 형태로 저장하게 함.
}

function deleteTodo(event) {
  const li = event.target.parentElement; //여러개의 li 중에서 지울 li를 찾음.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter 안의 조건에 대한 것을 걸러서 새로운 array를 만듦.
  saveTodos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innterText = "✔";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //날짜를 밀리세컨 단위로 가져와서 랜덤한 수를 가져오는걸로 보면 됨.
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //string으로 저장되어 있는 형태를 array로 바꿔줌
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //parsedToDos에 있는 것 각 아이템들에 대하여 괄호 안의 함수를 실행시킴.
}
//이전에 저장했던것들은 localstorage에 들어있고, 새로고침할때는 todos가 초기화되어 비어있는 array에 값이 계속 저장되는 것임.
//그리고나서 localstorage에 있는 것들은 뿌리고, todos array에 있는 것들도 같이 보여줌.
