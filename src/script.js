let currentTime = new Date();
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentTime.getDay()];

let dateElement = document.querySelector("h2");
dateElement.innerHTML = `${day} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchText = document.querySelector("#search-text");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = `${searchText.value}`;
}
let searchForm = document.querySelector(".btn-info");
searchForm.addEventListener("click", search);
