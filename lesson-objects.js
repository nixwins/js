// var name = "John";
// var isAdmin = true;
// var totalSum = 1000;

// Object Literal
const user = {
  name: "John",
  isAdmin: true,
  totalSum: 1000,
};

// Object Constructor
var person = new Object();

person.firstName = "Askar";
person.lastName = "Kulmanov";
person.age = 20;
person.isAdmin = false;

console.log(user);

user.age = 21;
console.log(user);

delete user.age;
user.name = "Askar";
console.log(user);

// console.log(person);

// Object Array
//0   //1    //2
const users = [123, "Askar", true];

users[0] = "EE";
users[3] = "Jane";

console.log(users.length);

users.push({ name: "John", age: 20 });
console.log(users);

console.log(users[4].name);
console.log(users[4]);

const news = [
  {
    title: "News 1",
    description: "Description 1",
    author: "John",
  },
  {
    title: "News 2",
    description: "Description 2",
    author: "Jane",
  },
  {
    title: "News 3",
    description: "Description 3",
    author: "John",
  },
  {
    title: "News 4",
    description: "Description 4",
    author: "Jane",
  },
  {
    title: "News 5",
    description: "Description 5",
    author: "John",
  },
  {
    title: "News 6",
    description: "Description 6",
    author: "Jane",
  },
  {
    title: "News 7",
    description: "Description 7",
    author: "John",
  },
];

// циклы

for (let i = 0; i < news.length; i++) {
  console.log(news[i].title);
}
