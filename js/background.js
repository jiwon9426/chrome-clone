const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//자바스크립트에서 html에 값을 넣어주는 것=html을 만들어낼 수 있음
const image = document.createElement("img"); //img인 element를 html에 만든다는 뜻
image.src = `img/${chosenImage}`;
document.body.appendChild(image);
