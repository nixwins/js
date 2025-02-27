//1. получить значение из input username
const userValue = document.querySelector("input[name='username']");
console.log(userValue.value);

// получить значение из input password
const userPass = document.querySelector("input[name='password']");
// вывести значения в out-username и out-password

const outUsername = document.querySelector(".out-username");
const outPassword = document.querySelector(".out-password");



const btn = document.querySelector("#form button");

btn.onclick = function (){
    console.log("pirvet");
    outUsername.innerHTML = userValue.value;
    outPassword.innerHTML = userPass.value;
}

//2. получить значение из input  когда нажимается кнопка Add task вывести значение в консоль
const taskValue = document.querySelector("input[name='task']");
const taskBtn = document.querySelector('#btn');
const inputValue = taskValue.value;

//  2.1 добавить значние inputa в массив todoList как объект в объекте должно быть два свойства task и id (id должен быть рандомный  Math.random())
    const todoList =[];
    taskBtn.onclick = function(){
        if (inputValue) {
            const newTask = {
                task:taskValue,
                id:Math.random()
            };
            todoList.push(newTask);
        }
    }
//  2.2 вывести массив todoList в консоль
console.log(todoList);
// 3  Вывести массив todoList в ul как li поле task

//4 Переписать задачу 3. Теперь вместе с текстом (task) добавить кнопку удалить (через createElement)

//4. Добавить событие на кнопку удалить. При нажатии на кнопку удалить, удалять li из ul и из массива todoList

//5. Добавить кнопку очистить список. При нажатии на кнопку очистить список, удалять все li из ul
