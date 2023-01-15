import mainDate from "/assets/js/date.js";
const dayText = document.querySelector(".day");
const hoursNum = document.querySelector(".hour");
const minNum = document.querySelector(".minutes");
const years = document.querySelector('.year')
const secNum = document.querySelector(".seconds");

setInterval(() => {
  const date = new mainDate();
  day = date._dayName;
  hours = date._hours;
  minutes = date._minutes;
  seconds = date._seconds;
  changeTime(day, hours, minutes, seconds, year);
}, 1000);

const date = new mainDate();
let day = date._dayName;
let hours = date._hours;
let minutes = date._minutes;
let seconds = date._seconds;
let year = date._year;

function changeTime(day, hours, minutes, seconds, year) {
  dayText.innerText = day;
  hoursNum.innerText = hours;
  minNum.innerText = minutes;
  secNum.innerText = seconds;
  years.innerText = year
}
