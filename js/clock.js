const clock = document.querySelector("h2#clock");

//interval 은 설정해놓은 매시간마다 실행시키는 것이고, timeout은 설정해놓은 시간후에 실행시키는 것임.
//padstart, padend 는 지정해놓은 길이에 부족하면 지정해놓은 글자로 채우는 것이다.
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
