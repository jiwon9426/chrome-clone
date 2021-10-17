//자바스크립트에서는 변수를 보통 camel식으로 씀
const aNum = 5; // const 변하지 않는 변수
let bNum = 2; //let 은 변하는 변수
//기본적으로는 cost를 쓰고, 때때로 필요할때는 let 을 사용함
//var 도 있지만 이는 아무런 규칙도 없고 옛날 방식임 사용하지말기!

console.log(aNum + 2); //콘솔에 찍는방법

//array
const dayOfWeek = ["mon", "tue", "wed"];
dayOfWeek.push("sun"); //array에 추가하는 방법

//object ({}를 쓰고 그 안에서는 =대신 :을 쓴다.)
const player = {
  name: "niko",
  age: 22,
};
player.lastname = "park"; //object에 추가하는 방법

console.log(player);
console.log(player.name); //object의 값을 get하는 방법

//함수
function 함수이름() {} //형태로 만듦. 값을 함수밖에서도 사용하고 싶다면 return 해줘야함.
함수이름(); //형태로 실행함.

//object 안에서 함수를 선언할수도 있음.
const player2 = {
  name: "nico",
  sayHello: function (otherName) {
    console.log("hello" + otherName + "!");
  },
};
player2.sayHello("jiwon");

//javascript는 html에 접근할 수있다. (html에서 <script src="./practice.js"></script>  을 해줬기때문에)
//그 시작점은 document(=자바스크립트는 html을 document라는 이름의 object 본다.)
//javascript는 html에 있는 것들을 object 내부의 것들로 바라본다.
document.getElementById("title");

document.querySelector(".title");
//이 강의에서는 querySelector을 쓸거다. (element를 CSS selector방식으로 검색할 수 있음)
//querySelector는 첫번째것만 가져오고, 전체다 가져오고 싶으면 querySelectorAll을 쓰면됨

//javascript가 event 에 접근하는 방법. (방법1))addEventListener 을 써준다. ->이벤트이름/실행할 function)
const title = document.querySelector("h1");
function clicked() {
  console.log("it is clicked!");
}
//방법1))
title.addEventListener("click", clicked); //function은 ()을 쓰지X, 일단은 "click"되기전까지 실행하면 안되니까 ()를 쓰지 않는다.
//이 방법은 나중에 addEventListner을 제거할 수 있어서 노마드가 더 선호함

//방법2))
title.onclick = clicked;
