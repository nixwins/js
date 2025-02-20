// function declaration

function sum() {
  const a = 1;
  const b = 2;
  const c = a + b;
  console.log(c);
}

sum();
sum();
sum();
sum();
sum();

// function expression

const sum2 = function () {
  const a = 1;
  const b = 5552;
  const c = a + b;
  console.log(c);
};

const obj = {};
sum2();

function calc(a, b) {
  console.log(a);
  console.log(b);
}

const result = calc(10, 555);

console.log(result);

function multiply(a, b) {
  const c = a * b;
  console.log(c);
  return "Вызов функции multiply";
}

multiply(10, 10);

const car = {
  brand: "BMW",
  model: "320",
  year: 2020,
  engine: {
    power: 100,
    volume: 2.0,
  },
  owner: "",
  start: function () {
    console.log("Оталды", this.brand);
  },

  setOwner: function (onw) {
    this.owner = onw;
  },

  getInfo: function () {
    return this.brand + " " + this.model + " " + this.year;
  },

  selectEngine: function () {
    return this.engine;
  },
};

console.log(car);
console.log(car.engine.power);

car.start();

car.setOwner("John");

const carInfo = car.getInfo();

console.log(carInfo);

console.log(car.selectEngine().power);

const engine = car.selectEngine();

console.log(engine);

const classList = {
  classes: [],
  add: function (className) {
    this.classes.push(className);
  },
};

classList.add("btn");
classList.add("btn");
classList.add("btn");
console.log(classList);
