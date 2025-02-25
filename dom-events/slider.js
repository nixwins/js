// Создать слайдер (slider.html)
// Одна кнопка next
//  Вывести  все изображения из images и у всех display: none кроме первого;
// Когда нажимаешь на кнопку next текущуу изображение изменить display: none; следующее изображение изменить display: block;

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

  const bodyEl = document.querySelector("body");

  const btnEl = document.createElement("button");

  btnEl.innerText = "next";

  bodyEl.append(btnEl);

  const imgElement = [];

  for (let i = 0 ; i < images.length; i++) {
    let imgElem = document.createElement("img");
    imgElement.push(imgElem);
    imgElem.src = images[i].url;
    imgElem.style.display = "none";
    if (i === 0) {
      imgElem.style.display = "block";
    }
    bodyEl.append(imgElem);

  }

// const imageEl = [];


btnEl.onclick = function () {
    for (let i = 0; i < imgElement.length; i++) {
      if (imgElement[i].style.display === "block") {
        imgElement[i].style.display = "none";
        if (i === imgElement.length - 1) {
          imgElement[0].style.display = "block";
        } else {
          imgElement[i + 1].style.display = "block";
        }
        break;
      }
    }
  }
  
