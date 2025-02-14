var num2; //  объявление переменной

num2 = 5; // присваивание значения переменной

console.log(num2); // вывод значения переменной в консоль

num2 = 10; // присваивание нового значения переменной

console.log(num2); // вывод значения переменной в консоль

// типы данных
// number
// string Ab123

var name = "John";
var lastName = "Doe";
console.log(name);

// boolean true false

//object

//undefined
// null

// + - * / математические операции
var num1 = 5;
var num2 = 10;

console.log(num1 + num2);
console.log(name + lastName);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// сравнение
console.log(num1 == num2); // равно
console.log(num1 != num2); // не равно
console.log(num1 > num2); // больше
console.log(num1 < num2); // меньше

// условные операторы
if (num1 > num2) {
  console.log("Первая переменная больше второй");
}

var divOutEl = document.querySelector(".out");
if (num1 > 0) {
  divOutEl.innerHTML = "Первая число больше 0";
}
