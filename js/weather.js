//openweathermap.org 사이트에서 api를 이용할 것임.

const API_KEY = "ac847deada0afe3e85f529c3aa371296";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  //fetch로 실제로 url타고 갈필요없이 자바스크립트가 해당url을 부를 것임.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

function onGeoError() {}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
