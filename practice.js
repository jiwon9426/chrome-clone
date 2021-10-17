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
