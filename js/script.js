function playGame (playerInput){
  clearMessages();
  const getMoveName = function (argMovedId){
    if(argMovedId == 1){
      return 'kamień';
    } else if(argMovedId == 2){
      return 'papier';
    } else if(argMovedId == 3){
      return 'nożyce';
    } else {
      return 'nieznany ruch';
    }
  };

  const displayResult = function (argComputerMove, argPlayerMove){
    printMessage('Twój ruch to: ' + argPlayerMove);
    if( argComputerMove == argPlayerMove ){
      printMessage('Remis!');
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'kamień')
    ){
      printMessage('Komputer wygrywa!');
    } else { 
      printMessage('Ty wygrywasz');
    }
  };

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
}


document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});