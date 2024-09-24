/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const cardTypes = {
  red: ["♥", "♦"],
  black: ["♣", "♠"]
};

const randomCard = () => {
  const randomColor = Math.random() < 0.5 ? "red" : "black";
  const randomType = Math.floor(Math.random() * 2);
  const randomNumber = Math.floor(Math.random() * 13);

  const card = cardTypes[randomColor][randomType];
  const number = cardNumbers[randomNumber];

  const cornerTop = document.getElementsByClassName("corner")[0];
  const cornerBottom = document.getElementsByClassName("corner")[1];
  const numberCenter = document.getElementsByClassName("number")[0];

  cornerTop.innerHTML = card;
  cornerBottom.innerHTML = card;
  numberCenter.innerHTML = number;

  cornerTop.style.color = randomColor;
  cornerBottom.style.color = randomColor;
  numberCenter.style.color = randomColor;
};

window.onload = function() {
  //write your code here
  randomCard();
};

document
  .getElementsByClassName("card")[0]
  .addEventListener("click", randomCard);

document
  .getElementsByClassName("card")[0]
  .addEventListener("click", randomCard);
let intervalId;

function startInterval() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      randomCard();
    }, 5000);
  }
}

function stopInterval() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById("intervalCard").addEventListener("click", () => {
  let startStop = document.getElementsByTagName("span")[0];
  if (intervalId == null) {
    startInterval();
    startStop.innerHTML = "Iniciado";
    startStop.style.color = "blue";
  } else {
    stopInterval();
    startStop.innerHTML = "Detenido";
    startStop.style.color = "red";
  }
});
