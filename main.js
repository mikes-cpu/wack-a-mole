const HOLE_TL = document.querySelector(".hole-t-l");
const HOLE_TM = document.querySelector(".hole-t-m");
const HOLE_TR = document.querySelector(".hole-t-r");
const HOLE_ML = document.querySelector(".hole-m-l");
const HOLE_MM = document.querySelector(".hole-m-m");
const HOLE_MR = document.querySelector(".hole-m-r");
const HOLE_BL = document.querySelector(".hole-b-l");
const HOLE_BM = document.querySelector(".hole-b-m");
const HOLE_BR = document.querySelector(".hole-b-r");

const startGame = document.querySelector(".utilities__play-button");
const score = document.querySelector(".utilities__score");
const level = document.querySelector(".level__number");

const backgroundColor = document.querySelector(".container");

let chosenHole = 0;
let userPoints = 0;
let gameSpeed = 1000;
score.innerHTML = userPoints;
level.innerHTML = 1;

function gameSpeedUtility() {
  if (userPoints < 10) {
    gameSpeed = 2000;
  } else if (userPoints < 20) {
    gameSpeed = 2000;
  } else if (userPoints < 50) {
    gameSpeed = 2000;
  } else if (userPoints < 100) {
    gameSpeed = 1000;
  }
  return gameSpeed;
}

function levelUpUtility(event) {
  if (
    event.target.src === "http://localhost:5501/mole_edited_grey.svg" &&
    userPoints == 10
  ) {
    backgroundColor.classList.add("background-red");
    level.innerHTML = 2;
  }
  if (
    event.target.src === "http://localhost:5501/mole_edited_grey.svg" &&
    userPoints == 20
  ) {
    addMole();
    backgroundColor.classList.add("background-yellow");
    level.innerHTML = 3;
  }
  if (
    event.target.src === "http://localhost:5501/mole_edited_grey.svg" &&
    userPoints == 50
  ) {
    backgroundColor.classList.add("background-green");
    level.innerHTML = 4;
  }
  if (
    event.target.src === "http://localhost:5501/mole_edited_grey.svg" &&
    userPoints == 70
  ) {
    addMole();
    addMole();
    backgroundColor.classList.add("background-purple");
    level.innerHTML = 5;
  }
  if (
    event.target.src === "http://localhost:5501/mole_edited_grey.svg" &&
    userPoints == 100
  ) {
    backgroundColor.innerHTML = "";
    backgroundColor.classList.add("game-finish");
    const button = document.createElement("button");
    button.innerHTML = "Play Again?";
    backgroundColor.appendChild(button);
    button.addEventListener("click", onGameReset);
  }
}

function addMole() {
  setInterval(() => {
    makeMolePopUp();
  }, gameSpeedUtility());
}

function makeMole(holePos) {
  const mole = document.createElement("img");
  mole.src = "mole_edited_grey.svg";
  mole.classList.add("mole");
  holePos.appendChild(mole);
  setTimeout(() => {
    holePos.removeChild(mole);
  }, gameSpeedUtility() - 5);
}

function randomiseMole() {
  let randomNumber = Math.floor(Math.random() * 9) + 1;
  switch (randomNumber) {
    case 1:
      chosenHole = HOLE_TL;
      break;
    case 2:
      chosenHole = HOLE_TM;
      break;
    case 3:
      chosenHole = HOLE_TR;
      break;
    case 4:
      chosenHole = HOLE_ML;
      break;
    case 5:
      chosenHole = HOLE_MM;
      break;
    case 6:
      chosenHole = HOLE_MR;
      break;
    case 7:
      chosenHole = HOLE_BL;
      break;
    case 8:
      chosenHole = HOLE_BM;
      break;
    case 9:
      chosenHole = HOLE_BR;
      break;
    default:
      break;
  }
}

function makeMolePopUp() {
  randomiseMole();
  // this if check makes sure only one mole can occupy one hole at a time
  if (chosenHole.childNodes.length < 1) {
    console.log(chosenHole.childNodes.length);
    makeMole(chosenHole);
  } else {
  }
}

function onMoleClick(e) {
  if (e.target.src === "http://localhost:5501/mole_edited_grey.svg") {
    e.target.remove();
    userPoints++;
    score.innerHTML = userPoints;
  }
  levelUpUtility(e);
}

function onStartGame() {
  setInterval(() => {
    makeMolePopUp();
  }, gameSpeedUtility());
  startGame.disabled = true;
}

function onGameReset() {
  location.reload();
}

startGame.addEventListener("click", onStartGame);
window.addEventListener("click", onMoleClick);
