'use strict';

let highscore = 0;
let score = 20;
let guess = 0;
let randomNum = Math.trunc(Math.random() * 20) + 1;

const messageBox = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const body = document.querySelector('body');
const secretNumber = document.querySelector('.number');
const highscoreElement = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
const scoreElement = document.querySelector('.score');

const handleCheck = function () {
  guess = Number(document.querySelector('.guess').value);

  if (guess === randomNum) {
    messageBox.textContent = 'You Won!';
    checkBtn.removeEventListener('click', handleCheck);
    body.style.backgroundColor = '#60b347';
    secretNumber.textContent = randomNum;
    highscore = score > highscore ? score : highscore;
    highscoreElement.textContent = highscore;
    secretNumber.style.width = '30rem';
  } else if (guess < randomNum) {
    messageBox.textContent = 'Higher';
    score -= 1;
  } else if (guess > randomNum) {
    messageBox.textContent = 'Lower';
    score -= 1;
  }

  if (score === 0) {
    messageBox.textContent = 'GAME OVER!';
    body.style.backgroundColor = '#ff0800';
    checkBtn.removeEventListener('click', handleCheck);
  }
  scoreElement.textContent = score;
};

const handleRestart = function () {
  checkBtn.addEventListener('click', handleCheck);
  body.style.backgroundColor = '#222';
  secretNumber.style.width = '15rem';
  secretNumber.textContent = '?';
  messageBox.textContent = 'Start guessing...';

  randomNum = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.score').textContent = score;
};

againBtn.addEventListener('click', handleRestart);

document.querySelector('.check').addEventListener('click', handleCheck);
