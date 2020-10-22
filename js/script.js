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
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
  }
  else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Komputer wygrywa!');
  }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
displayResult(computerMove, playerMove);