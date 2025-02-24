const images = [
  {
    id: 1,
    url: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    url: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    url: "https://picsum.photos/200/300",
  },
];

console.log(images);


const bodyEl = document.querySelector("body");



// 1.  Создать новый элемент изображения
const imgEl = document.createElement("img");

// 2. Добавить изображение в DOM
bodyEl.append(imgEl);

// 3. images сколько есть элементов столько img добавить в DOM img.src = images[i].url
const imgElement = [];

for (let i = 0; i < images.length; i++) {
  let imgElem = document.createElement("img");
    imgElement.push(imgElem)
    imgElem.src = images[i].url;
    bodyEl.append(imgElem);
    
}

// 4. Добавить две кнопки next и prev
const nextButton = document.createElement("button");
nextButton.innerText = "next";

const prevButton = document.createElement("button");
prevButton.innerText = "prev";

prevButton.classList.add("button");
nextButton.classList.add("button");

bodyEl.append(prevButton, nextButton);
// 5. Когда нажимаешь на кнопку next images[1] изменить display: none;
console.log(imgElement);


nextButton.onclick = function () {
imgElement[1].style.display = "none";
   }
// 6. Когда нажимаешь на кнопку prev images[1] изменить display: block;

prevButton.onclick = function () {
  imgElement[1].style.display = "block";
}
// 7. Для всех images добавить display: none; кроме  i === 0
  for (let i = 0; i < imgElement.length; i++) {
    if (i === 0) {
      imgElement[i].style.display = "none";
  }
}
//  Создать слайдер (slider.html)
// Одна кнопка next
//  Вывести  все изображения из images и у всех display: none кроме первого;
// Когда нажимаешь на кнопку next текущуу изображение изменить display: none; следующее изображение изменить display: block;
