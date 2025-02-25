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

let currentIndex = 0;

function slider () {
  console.log('pirvet');
  
  if (currentIndex >= imgElement.length -1){
    currentIndex = 0;
  } else {
    currentIndex++
  }
  
    for (let i = 0; i < imgElement.length; i++){
      imgElement[i].style.display = "none";
      if (currentIndex == i) {
        imgElement[currentIndex].style.display = "block";
    }
  }
}



// btnEl.onclick = slider

btnEl.onclick= function () {
  if (currentIndex >= imgElement.length -1){
    currentIndex = 0;
  } else {
    currentIndex++
  }
  
    for (let i = 0; i < imgElement.length; i++){
      imgElement[i].style.display = "none";
      if (currentIndex == i) {
        imgElement[currentIndex].style.display = "block";
    }
  }
}