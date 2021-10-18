const loginForm = document.querySelector("#login-form"); //queryselector는 아이디인지 클래스인지 명시해줘야햠.
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //이는 관습. 중요한 정보를 담는게 아니라 자주쓰는 string을 담는 경우 이렇게함.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저가 기본동작 하는 것을 막음. ex.submit하면 새로고침하는 것 등

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //localStorage가 js가 값을 저장하는 방식이다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = "Hello " + username; //이것과 같은 방법으로는 `Hello ${username}` 이 있음. `는 백틱임.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
