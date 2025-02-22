// Список задач для практики работы с функциями и объектами в JavaScript

// 1. Создайте функцию calculateArea, которая принимает два параметра (ширину и высоту) и возвращает площадь прямоугольника.

function calculateArea(x, y) {
  let c = x * y;
  return c;
}

let calculateAreaReturn = calculateArea(3, 4);
console.log(calculateAreaReturn);

// 2. Напишите функцию greet, которая принимает имя пользователя и выводит в консоль приветствие "Привет, {имя}!".
function greet(name) {
  return "Hello" + " " + name;
}

let greetResult = greet("Beka");
console.log(greetResult);

// 3. Создайте объект student с свойствами name, age, grades (массив оценок) и методом getAverageGrade, который будет возвращать среднюю оценку.
const student = {
  name: "Beka",
  age: 20,
  grades: [4, 2, 3, 5, 4],
  getAverageGrade: function () {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      sum = sum + this.grades[i];
    }
    return sum / this.grades.length;
  },
};

console.log(student.getAverageGrade());

// 4. Напишите функцию countCalls, которая будет считать, сколько раз она была вызвана.
let count = 0;

function countCalls() {
  count++;
  return count;
}

console.log(countCalls());
console.log(countCalls());
console.log(countCalls());

// 5. Создайте объект calculator с методами add, subtract, multiply и divide для выполнения математических операций.
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

console.log(calculator.add(8, 2));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(4, 4));
console.log(calculator.divide(4, 4));

// 6. Напишите функцию createUser, которая принимает имя и возраст и возвращает объект с этими данными и методом getInfo.
function createUser(name, age) {
  const user = {
    userName: name,
    userAge: age,
    getInfo: function () {
      return this.userName + " " + this.userAge;
    },
  };

  return user;
}

console.log(createUser("Oljas", 24));
let userResult = createUser("Beka", 29);
console.log(userResult.getInfo());

// 7. Создайте объект library с массивом books и методами addBook, removeBook и findBook.
const library = {
  books: ["ana tili", "rus yaz", "history", "algebra"],
  addBook: function (book) {
    this.books.push(book);
  },
  removeBook: function (remove) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i] === remove) {
        delete this.books[i];
      }
    }
  },
  findBook: function (find) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i] === find) {
        return this.books[i];
      }
    }
  },
};

console.log(library.books);

library.addBook("geometria");
console.log(library.books);

library.removeBook("ana tili");
console.log(library.books);

console.log(library.findBook("rus yaz"));

// 8. Напишите функцию repeatString, которая принимает строку и число n, и возвращает строку, повторенную n раз.
function repeatString(string, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result = string + result;
  }
  return result;
}

console.log(repeatString("Askar", 4));

// 9. Создайте объект bankAccount с методами deposit, withdraw и getBalance для работы с балансом счета.
const bankAccount = {
  balance: 0,
  deposit: function (cash) {
    this.balance = this.balance + cash;
  },
  withdraw: function (cash) {
    this.balance = this.balance - cash;
  },
  getBalance: function () {
    return this.balance;
  },
};
bankAccount.deposit(1000);
console.log(bankAccount.getBalance());

bankAccount.withdraw(50);
console.log(bankAccount.getBalance());

// 10. Напишите функцию createCounter, которая возвращает объект с методами increment, decrement и getValue.
function createCounter() {
  let value = 0;
  return {
    incrment: function () {
      value = value + 1;
    },
    decrement: function () {
      value = value - 1;
    },
    getValue: function () {
      return value;
    },
  };
}

let counterObj = createCounter();
counterObj.incrment();
counterObj.decrement();
counterObj.decrement();
counterObj.decrement();

console.log(counterObj.getValue());

// 11. Создайте объект car с свойствами brand, model, year и методами start, stop и getAge (возвращает возраст машины).
const car = {
  brand: "toyota",
  model: "camry",
  year: 2004,
  start: function () {
    console.log(this.brand + " " + "startcar");
  },
  stop: function () {
    console.log(this.brand + " " + "stopcar");
  },
  getAge: function (carAge) {
    if (!carAge) {
      return this.year;
    } else {
      return carAge - this.year;
    }
  },
};
console.log(car);

car.start();
car.stop();
console.log(car.getAge());

// 12. Напишите функцию compareObjects, которая принимает два объекта и возвращает true, если они имеют одинаковые свойства и значения.
function compareObjects(obj1, obj2) {}
// 13. Создайте объект todoList с массивом tasks и методами addTask, removeTask и getTasksList.
const todoList = {
  tasks: [],
  addTask: function (task) {
    this.tasks.push(task);
  },
  removeTask: function (task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        delete this.tasks[i];
      }
    }
  },
  getTasksList: function () {
    return this.tasks;
  },
};

console.log(todoList);

todoList.addTask("learn Js");

todoList.addTask("learn HTML");

console.log(todoList.getTasksList());

todoList.removeTask("learn HTML");

console.log(todoList.getTasksList());

// 15. Создайте объект shop с массивом products и методами addProduct, removeProduct, findProduct и getProductsByPrice.
const shop = {
  products: [],
  addProduct: function (product) {
    this.products.push(product);
  },
  removeProduct: function (product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i] === product) {
        delete this.products[i];
      }
    }
  },
  findProduct: function (product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i] === product) {
        return this.products[i];
      }
    }
  },
};

// 17. Создайте объект userProfile с методами setData (для установки данных пользователя) и getData (для получения данных).
const userProfile = {
  setData: function (user) {
    this.setData = user;
  },
  getData: function () {
    return (this.getData = this.setData);
  },
};

userProfile.setData("Beka");
console.log(userProfile.getData());

// 19. Создайте объект playlist с массивом songs и методами addSong, removeSong, play, stop и getNextSong.
const playlist = {
  songs: [],
  addSong: function (songName) {
    this.songs.push(songName);
  },
  removeSong: function (songRemove) {
    for (let i = 0; i < this.songs.length; i++) {
      if (this.songs[i] === songRemove) {
        delete this.songs[i];
      }
    }
  },
  play: function () {
    console.log(this.songs + " " + "play");
  },
  stop: function () {
    console.log(this.songs + " " + "stop");
  },
  getNextSong: function () {},
};
// 20. Напишите функцию createLogger, которая возвращает объект с методами log, warn, error и getHistory для ведения журнала сообщений.
