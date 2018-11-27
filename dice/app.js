/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
window.onbeforeunload = function() {
        return "Are you sure you want to leave our website?";
}
//
// function confirmWinClose() {
// var confirmClose = confirm('Close?');
// return confirmClose;
// }

function SetNameForPlayers(){
  let player1Name = prompt("Enter Player 1 Name");
  document.getElementById("name-0").innerHTML = player1Name;
  if (player1Name == null || !isNaN(player1Name)){
    player1Name = prompt("Enter Player 1 Name");
  }
  let player2Name = prompt("Enter Player 2 Name");
  document.getElementById("name-1").innerHTML = player2Name;
}

function newGame(){
  // function call
  SetNameForPlayers();
}

var scores, roundScore, activePlayer;
scores =[0,0];
roundScore = 0;
activePlayer =0;
document.querySelector('.dice').style.display = 'none';


document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += roundScore;
  // let currentScore = Number(document.getElementById('current-'+activePlayer).textContent);
  // let getScore = Number(document.getElementById('score-'+activePlayer).textContent);
  // getScore += currentScore;
   document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
   if(scores[activePlayer] >= 20){
     document.querySelector('#name-' + activePlayer).textContent = "Winner!";
   }else{
     nextPlayer();
   }

});


function rollDice(){
let dice  = Math.floor(Math.random() * 6) + 1;
let diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';
if(dice !== 1){
  roundScore += dice;
document.querySelector('#current-' + activePlayer).textContent =roundScore;
} else{
  nextPlayer();
  }
}


function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1 :activePlayer= 0;
  roundScore =0;
  document.getElementById('current-0').textContent=0;
  document.getElementById('current-1').textContent=0;
  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
}
