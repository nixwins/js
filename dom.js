// html tags attributes

//js document object model
// 1. selectors

// param string . #
const h1El = document.querySelector("h1"); // object {}

console.dir(h1El);

h1El.innerText = "DOm hello";
h1El.style.color = "red";

// const imgEl = document.querySelector(".my-img");

// imgEl.src =
//   "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react/heroes/social/antimage.jpg";
// imgEl.style.width = "200px";

// imgEl.classList.add("border-red");
// 2. events

const images = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWovpRl5cjXTASORKgGydM7wDim9tOZq2Zg&s",
    border: false,
  },
  {
    src: "https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/lina.png",
    border: true,
  },
];

const imagesEl = document.querySelectorAll("img");

for (let i = 0; i < imagesEl.length; i++) {
  imagesEl[i].src = images[i].src;
  if (images[i].border) {
    imagesEl[i].classList.add("border-red");
  }
}

// select all

const pElments = document.querySelectorAll("p"); // NodeList : [{Node}, {Node}, {Node}]
console.log(pElments);

for (let i = 0; i < pElments.length; i++) {
  pElments[i].innerText = i;
}

// create element
const bodyEl = document.querySelector("body");
console.dir(bodyEl);

const newH2El = document.createElement("h2");
newH2El.innerText = "Hello";
newH2El.style.color = "orange";
const spanEl = document.querySelector("span"); // Node
const out3El = document.querySelector(".out3");

out3El.insertBefore(newH2El, spanEl);
// out3El.appendChild(newH2El);
// bodyEl.append(newH2El);

// remove element

bodyEl.removeChild(out3El);

const usernameEl = document.querySelector(".username");
usernameEl.value = "nixwins";

const btnEl = document.querySelector(".btn");

btnEl.innerText = "Login";
