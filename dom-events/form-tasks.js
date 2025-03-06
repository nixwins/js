//1. получить значение из input username
const userValue = document.querySelector("input[name='username']");
console.log(userValue.value);

// получить значение из input password
const userPass = document.querySelector("input[name='password']");
// вывести значения в out-username и out-password

const outUsername = document.querySelector(".out-username");
const outPassword = document.querySelector(".out-password");

const btn = document.querySelector("#form button");

btn.onclick = function (e) {
  e.preventDefault();
  console.log("pirvet");
  outUsername.innerHTML = userValue.value;
  outPassword.innerHTML = userPass.value;
};

const link = document.querySelector("#link");
link.onclick = function (e) {
  e.preventDefault();
  console.log(e);
  console.log("pirvet");}
//2. получить значение из input  когда нажимается кнопка Add task вывести значение в консоль
const taskValue = document.querySelector("input[name='task']");
const taskBtn = document.querySelector("#btn");

//  2.1 добавить значние inputa в массив todoList как объект в объекте должно быть два свойства task и id (id должен быть рандомный  Math.random())
let todoList = [];
var ulList = document.querySelector('#list')



taskBtn.onclick = function (s) {

  const inputValue = taskValue.value;
  s.preventDefault();
  if (inputValue) {
    const newTask = {
      task: inputValue,
      id: Math.random(),
    };
    todoList.push(newTask)
    renderUl()
};
//  вывести массив todoList в консоль
console.log(todoList);
// 3  Вывести массив todoList в ul как li поле task

  function renderUl (){
  ulList.innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
      renderLiElement(todoList[i])
}
}
};

function renderLiElement(taskObj){
  let liEl = document.createElement("li");
    liEl.innerText = taskObj.task
    ulList.appendChild(liEl);
    renderDeleteBtn(liEl, taskObj.id)
}

function renderDeleteBtn(liEl,id){
  let btnEl = document.createElement("button");
    btnEl.onclick = function (){
      ulList.removeChild(liEl)
      let counterId;
      for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
          counterId = i;
          todoList.splice(counterId,1);
        }
      }
    }
    btnEl.innerText = "Delete";
    liEl.appendChild(btnEl)
  }

  
//4 Переписать задачу 3. Теперь вместе с текстом (task) добавить кнопку удалить (через createElement)


//4. Добавить событие на кнопку удалить. При нажатии на кнопку удалить, удалять li из ul и из массива todoList



//5. Добавить кнопку очистить список. При нажатии на кнопку очистить список, удалять все li из ul
const toDoWrapper = document.querySelector(".todo-wrapper");
const btnAll = document.createElement("button");
btnAll.innerText = "Delete All";

toDoWrapper.append(btnAll);

function deleteAll (){
  console.log("hi");
  ulList.innerHTML = '';
todoList.splice(0, todoList.length);
}


btnAll.onclick = deleteAll