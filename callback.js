function slider(e) {
  console.log("index++");
  console.log("addClass");
  console.log(e);
}

// someFunc({ name: "John", age: 20 });
const foo = function () {
  console.log("foo");
};

foo();

function onclick(func) {
  const event = { click: { name: "someCLick" } };
  func(event);
}

// btn.onclick = slider;
onclick(slider);

fetch("https://dummyjson.com/todos")
  .then(function (res) {
    return res.json();
  })
  .then(outTodoFromServer);

function outTodoFromServer(data) {
  console.log(data);
}
