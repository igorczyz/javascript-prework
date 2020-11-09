function playGame (playerInput){
  clearMessages();
  function getMoveName(argMovedId){
  if(argMovedId == 1){
    return 'kamień';
  }
  else if(argMovedId == 2){
      return 'papier';
  }
  else if(argMovedId == 3){
      return 'nożyce';
  }
  else {
    return 'nieznany ruch';
  }
}

  function displayResult(argComputerMove, argPlayerMove){
  printMessage('Twój ruch to: ' + argPlayerMove);
  if( argComputerMove == argPlayerMove ){
    printMessage('Remis!');
  }
  else if( (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
          ( argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
          ( argComputerMove == 'papier' && argPlayerMove == 'kamień')
  ){
    printMessage('Komputer wygrywa!');
  }
 else { 
   printMessage('Ty wygrywasz');
 }
}

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
}


function rockButtonClick(){
  playGame(1);
}

let rockButton = document.getElementById('play-rock');

rockButton.addEventListener('click', rockButtonClick);

function paperButtonClick(){
  playGame(2);
}
let paperButton = document.getElementById('play-paper');
  

paperButton.addEventListener('click', paperButtonClick);

function scissorsButtonClick(){
  playGame(3);
}
let scissorsButton = document.getElementById('play-scissors');
  
scissorsButton.addEventListener('click', scissorsButtonClick);
