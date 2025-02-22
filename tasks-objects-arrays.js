// Задачи для практики работы с объектами и массивами

// Данные для заданий:
const products = [
  { name: "Телефон", price: 110000, inStock: true },
  { name: "Ноутбук", price: 105000, inStock: false },
  { name: "Наушники", price: 15000, inStock: true },
  { name: "Мышка", price: 120000, inStock: true },
];

const students = [
  { name: "Алекс", age: 20, grade: 5 },
  { name: "Мария", age: 19, grade: 2 },
  { name: "Джон", age: 31, grade: 3 },
  { name: "Анна", age: 16, grade: 3 },
];

// Задача 1: Создайте объект person с свойствами name, age и city

const person = {
  name: "Alex",
  age: 20,
  city: "Piter",
};

// Задача 2: Добавьте в объект person новое свойство email

person.email = "gmail";

console.log(person);

// Задача 3: Удалите свойство city из объекта person

delete person.city;

console.log(person);
// Задача 4: Создайте массив из трех объектов с свойствами name и age

const persons = [
  {
    name: "David",
    age: 22,
  },

  {
    name: "Jhon",
    age: 21,
  },

  {
    name: "Alex",
    age: 24,
  },
];

console.log(persons);

// Задача 5: Выведите в консоль name второго элемента из массива products

console.log(products[1]);

// Задача 6: Измените цену первого продукта в массиве products на 55000

// var firstEl =
products[0].price = 3000;
// firstEl.price = 4000;
console.log(products);

// Задача 7: Добавьте новый продукт в массив products используя push()

const newProduct = {
  name: "Macbook",
  price: 100000,
  inStock: true,
};

products.push(newProduct);

console.log(products);

// Задача 8: Выведите в консоль все имена студентов из массива students используя цикл for

for (let index = 0; index < students.length; index++) {
  let element = students[index];
  console.log(element.name);
}

// Задача 9: Создайте новый массив только с теми продуктами, которые есть в наличии (inStock: true)
const product = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].inStock) product.push(products[i]);
}

console.log(product);

// Задача 10: Выведите в консоль имена всех студентов, у которых grade равен 5
const element = [];

for (let i = 0; i < students.length; i++) {
  // const element = students[index];
  if (students[i].grade === 5) {
    element.push(students[i].name);
  }
}

console.log(element);
// Задача 11: Создайте объект car с свойствами model, year и color

const car = {
  model: "toyota",
  year: 2004,
  color: "gray",
};

// Задача 12: Добавьте в массив students нового студента

const newStudent = {
  name: "Beka",
  age: 33,
  grade: 4,
};

students.push(newStudent);

// Задача 13: Выведите в консоль количество продуктов в массиве products

console.log(products.length);
// Задача 14: Создайте массив из трех объектов books с свойствами title и author

const books = [
  { title: "Русский язык", author: "Пушкин" },
  { title: "Казахский язык", author: "Абай" },
  { title: "Англиский язык", author: "Шекспир" },
];

console.log(books);
// Задача 15: Измените возраст первого студента в массиве students

students[0].age = 26;

console.log(students);

// Задача 16: Выведите в консоль все цены продуктов используя цикл for

for (let index = 0; index < products.length; index++) {
  // const element = products[index];
  console.log(products[index].price);
}

// Задача 17: Создайте объект student с свойствами name, course и grade. Измените значение grade

const student = {
  name: "Oral",
  course: 3,
  grade: 2,
};

student.grade = 7;

console.log(student);
// Задача 18: Выведите в консоль имена всех студентов, чей возраст больше 19

for (let index = 0; index < students.length; index++) {
  // const element = array[index];
  if (students[index].age >= 21) {
    console.log(students[index].name);
  }
}

// Задача 19: Добавьте всем продуктам новое свойство category со значением "electronics"

for (let index = 0; index < products.length; index++) {
  products[index].category = "electronics";
}

// products['category'] = 'electronics'

console.log(products);

// Задача 20: Посчитайте средний возраст всех студентов используя цикл for
let totalAge = 0;

for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age;
}

const avargeAge = totalAge / students.length;

console.log(avargeAge);
// Задача 21: Создайте объект smartphone с свойствами brand, model и price

const smartphone = {
  brand: "iPhone",
  model: 14,
  price: 150000,
};

// Задача 22: Создайте объект user с свойствами firstName, lastName, age и поменяйте значение age

const user = {
  firstName: "Oljas",
  lastName: "Kudretov",
  age: 23,
};

user.age = 25;

console.log(user);
// Задача 23: Создайте объект computer с свойствами cpu, ram, storage и добавьте новое свойство gpu

const computer = {
  cpu: "intel",
  ram: 6,
  storage: 500,
};

computer.gpu = 600;

console.log(computer);
// Задача 24: Создайте объект room с свойствами width, length и height. Удалите свойство height

const room = {
  width: 100,
  length: 150,
  heigth: 3,
};

delete room.heigth;

console.log(room);

// Задача 25: Создайте объект movie с свойствами title, director и year. Измените значение year

const movie = {
  title: "Avatar",
  director: "Cameron",
  year: 2015,
};

movie.year = 2019;

console.log(movie);

// Задача 26: Создайте объект game с свойствами name и price, затем создайте его точную копию в новой переменной

const game = {
  name: "Dota 2",
  price: "free",
};

// Задача 27: Создайте объект address с свойствами city, street и house. Поменяйте значение street

const address = {
  city: "Piter",
  street: "international",
  house: 40,
};

address.street = "pobeda";

console.log(address);
// Задача 28: Создайте объект employee с свойствами name, position и salary. Добавьте свойство department

const employee = {
  name: "atlant",
  position: "top",
  salary: 1500,
};

employee.departament = 12;

console.log(employee);
// Задача 29: Создайте объект food с свойствами name и price. Увеличьте значение price на 20

const food = {
  name: "apple",
  price: 500,
};

food.price += 20;

console.log(food);

// Задача 30: Создайте объект weather с свойствами temperature, humidity и добавьте свойство windSpeed
const weather = {
  temperature: 50,
  humidity: "gradus",
};

weather.windSpeed = 100;

console.log(weather);

// Задача 31: Используя цикл for, найдите самый дорогой продукт в массиве products
let productPrice = 0;
console.log(products);

for (let i = 0; i < products.length; i++) {
  if (products[i].price >= productPrice) {
    productPrice = products[i].price;
  }
}

console.log(productPrice);
// Задача 32: С помощью цикла for выведите в консоль имена всех студентов, у которых grade больше 3
console.log(students);

for (let i = 0; i < students.length; i++) {
  const element = students[i].name;
  if (students[i].grade > 3) {
    console.log(element);
  }
}
// Задача 33: Используя цикл for, посчитайте общую стоимость всех продуктов в наличии (inStock: true)
let productSum = 0;

console.log(products);

for (let i = 0; i < products.length; i++) {
  if (products[i].inStock) {
    productSum += products[i].price;
  }
}

console.log(productSum);

// Задача 34: С помощью цикла for найдите количество студентов младше 20 лет
console.log(students);

let studentSum;

for (let i = 0; i < students.length; i++) {
  // const element = students[i];
  if (students[i].age < 20) {
    studentSum = i++;
  }
}

console.log(studentSum);

// Задача 35: Используя цикл for, создайте новый массив только с именами продуктов
const productName = [];

for (let i = 0; i < products.length; i++) {
  productName.push(products[i].name);
}

console.log(productName);

// Задача 36: С помощью цикла for найдите первый продукт дороже 100000
let firstProduct = 0;
let found = false;
console.log(products);

for (let i = 0; i < products.length && !found; i++) {
  if (products[i].price > 100000) {
    firstProduct = products[i];
    // break;
    found = true;
  }
}

console.log(firstProduct);

// Задача 37: Используя цикл for, посчитайте количество студентов с grade равным 5 или 4

let count = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].grade == 5 || students[i].grade == 4) {
    count++;
  }
}

console.log(count);

// Задача 38: С помощью цикла for создайте массив из продуктов, цена которых меньше 20000
const topProduct = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].price < 20000) {
    topProduct.push(products[i]);
  }
}

console.log(topProduct);

// Задача 39: Используя цикл for, найдите самого старшего студента и выведите его имя

let studentOld = students[0];
// let studentElement = 0;
for (let i = 0; i < students.length; i++) {
  // studentElement = students[i].age;
  if (students[i].age > studentOld.age) {
    studentOld = students[i];
  }
}

console.log(studentOld);

// Задача 40: С помощью цикла for посчитайте количество продуктов дороже 50000 и в наличии

let productCount = 0;

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 50000) {
    productCount++;
  }
}

console.log(productCount);
