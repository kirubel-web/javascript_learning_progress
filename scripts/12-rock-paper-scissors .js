const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};

updateScoreElement();
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();

      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}
/* 
if(!score)
{
  score ={
    wins: 0,
    losses : 0,
    ties: 0
  };
} */
console.log();
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissor") {
      result = "You Tied";
    }
  }
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "You Tied";
    } else if (computerMove === "paper") {
      result = "You Lose";
    } else if (computerMove === "scissor") {
      result = "You Win";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "You Tied";
    } else if (computerMove === "scissor") {
      result = "You Lose";
    }
  }

  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Lose") {
    score.loses += 1;
  } else if (result === "You Tied") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  /* document.querySelector(
    ".js-moves"
  ).innerHTML = `you ${playerMove} - ${computerMove} computer`; */

  document.querySelector(".js-moves").innerHTML = `
    You <img class="move-icon" src="/images/${playerMove}-emoji.png" alt="">
  <img class="move-icon" src="/images/${computerMove}-emoji.png" alt=""> computer
`;

  /* alert(
    `you picked ${playerMove}. computer picked ${computerMove}. ${result}.
wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`
  ); */
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber < 1) {
    computerMove = "scissor";
  }
  //console.log(computerMove);

  return computerMove;
}
