console.log('hi');


const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error, you did not choose properly. Try again.');
  }
};

//console.log(getUserChoice('Paper'));
//console.log(getUserChoice('prova2'));

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
    return 'rock';
    break;

    case 1:
    return 'paper';
    break;

    default:
    return 'scissors';
    break;
  }
}

//console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won the game.';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won the game.';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won the game.';
    } else {
      return 'You won!';
    }
  }
}

//console.log(determineWinner('rock', 'scissors'));

function playGame() {
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();