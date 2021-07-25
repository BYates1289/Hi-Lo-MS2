$(document).ready(function(){
  $("#rules").modal('show');
});

const card = document.getElementById("card");
const status = document.getElementById("status");

let walletAmount = 1000;
let betAmount = 0;

let winCount = 0;
let lossCount = 1;

let cardsArray = [];
let newCardNumber,newSuit,newCard;

if(!(localStorage.getItem("highScore"))){	
	// Store
	localStorage.setItem("highScore", 0);
} else {
// Retrieve
console.log(localStorage.getItem("highScore"));
//document.getElementById("high_score").innerHTML = localStorage.getItem("highScore");
}


function fillCardsArray() {
cardsArray[0]= "2C";
cardsArray[1]= "2D";
cardsArray[2]= "2H";
cardsArray[3]= "2S";
cardsArray[4]= "3C";
cardsArray[5]= "3D";
cardsArray[6]= "3H";
cardsArray[7]= "3S";
cardsArray[8]= "4C";
cardsArray[9]= "4D";
cardsArray[10]= "4H";
cardsArray[11]= "4S";
cardsArray[12]= "5C";
cardsArray[13]= "5D";
cardsArray[14]= "5H";
cardsArray[15]= "5S";
cardsArray[16]= "6C";
cardsArray[17]= "6D";
cardsArray[18]= "6H";
cardsArray[19]= "6S";
cardsArray[20]= "7C";
cardsArray[21]= "7D";
cardsArray[22]= "7H";
cardsArray[23]= "7S";
cardsArray[24]= "8C";
cardsArray[25]= "8D";
cardsArray[26]= "8H";
cardsArray[27]= "8S";
cardsArray[28]= "9C";
cardsArray[29]= "9D";
cardsArray[30]= "9H";
cardsArray[31]= "9S";
cardsArray[32]= "10C";
cardsArray[33]= "10D";
cardsArray[34]= "10H";
cardsArray[35]= "10S";
cardsArray[36]= "JC";
cardsArray[37]= "JD";
cardsArray[38]= "JH";
cardsArray[39]= "JS";
cardsArray[40]= "QC";
cardsArray[41]= "QD";
cardsArray[42]= "QH";
cardsArray[43]= "QS";
cardsArray[44]= "KC";
cardsArray[45]= "KD";
cardsArray[46]= "KH";
cardsArray[47]= "KS";
cardsArray[48]= "AC";
cardsArray[49]= "AD";
cardsArray[50]= "AH";
cardsArray[51]= "AS";
}

fillCardsArray();
function loadCards() {
  randomCard = Math.floor(Math.random() * 13 + 2);
  randomSuit = Math.floor(Math.random() * 4 + 1);
  randomCardNumber = randomCard;
  switch (randomCard) {
    case 14:
      randomCard = "A";
      break;
    case 13:
      randomCard = "K";
      break;
    case 12:
      randomCard = "Q";
      break;
    case 11:
      randomCard = "J";
      break;
    default:
      break;
  }
  switch (randomSuit) {
    case 1:
      randomSuit = "C";
      break;
    case 2:
      randomSuit = "D";
      break;
    case 3:
      randomSuit = "S";
      break;
    case 4:
      randomSuit = "H";
      break;
    default:
      break;
  }
  console.log(randomCard + randomSuit);
  card.style.backgroundImage = "url(assets/img/cards/" + randomCard + randomSuit + ".png";

	let index = cardsArray.indexOf(randomCard + randomSuit);
	if (index > -1) {
	  cardsArray.splice(index, 1);
	} 
	console.log(cardsArray);
}

function nCard() {
	
	if(cardsArray.length > 1){
	} else {
	console.log(cardsArray.length);
	
    $(".buttons").replaceWith("<a href='index.html'><i class='fas fa-sync-alt'></i></a>");
		if(localStorage.getItem("highScore") < document.getElementById("cash").innerHTML){	
			localStorage["highScore"] = document.getElementById("cash").innerHTML;
		}
    $(".bet-amount").replaceWith("High Score: £" + localStorage.getItem("highScore"));
    $(".next-card").css('visibility', 'hidden');
		$("#status").html("Game Over");
		return -1;

	}
	console.log(cardsArray);
	while(cardsArray.length > 1){
	  newCard = Math.floor(Math.random() * 13 + 2);
	  newSuit = Math.floor(Math.random() * 4 + 1);
	  newCardNumber = newCard;
	  switch (newCard) {
		case 14:
		  newCard = "A";
		  break;
		case 13:
		  newCard = "K";
		  break;
		case 12:
		  newCard = "Q";
		  break;
		case 11:
		  newCard = "J";
		  break;
		default:
		  break;
	  }
	  switch (newSuit) {
		case 1:
		  newSuit = "C";
		  break;
		case 2:
		  newSuit = "D";
		  break;
		case 3:
		  newSuit = "S";
		  break;
		case 4:
		  newSuit = "H";
		  break;
		default:
		  break;
	  }
	if(cardsArray.includes(newCard+newSuit)){
		let index = cardsArray.indexOf(newCard + newSuit);
		if (index > -1) {
		  cardsArray.splice(index, 1);
		} 
		break;
	}
  }

  if (option == "h" && newCardNumber > randomCardNumber) {
    status.innerHTML = "YOU WIN!";
    document.getElementById("last-bet").innerHTML = betAmount;
    updateResult("win");
    winCount++;
    clear();
  } else if (option == "l" && newCardNumber < randomCardNumber) {
    status.innerHTML = "YOU WIN!";
    document.getElementById("last-bet").innerHTML = betAmount;
    updateResult("win");
    winCount++;
    clear();
  } else if (newCardNumber == randomCardNumber) {
    status.innerHTML = "DRAW";
    document.getElementById("last-bet").innerHTML = betAmount;
    updateResult("draw");
    clear();
  } else {
    status.innerHTML = "YOU LOST!";
    document.getElementById("last-bet").innerHTML = betAmount;
    updateResult("lose");
    lossCount++;
    clear();
  }

  function clear() {
	  
	console.log(newCard,newSuit);
    card.style.backgroundImage = "url(assets/img/cards/" + newCard + newSuit + ".png";
    randomCard = newCard;
    randomSuit = newSuit;
    randomCardNumber = newCardNumber;
  }

   function updateResult(key){
    if(key == "win"){
      walletAmount = walletAmount + betAmount;
      betAmount = 0;
    }
    else if(key == "draw"){
      betAmount = 0;
    }
    else if(key == "lose"){
      walletAmount = walletAmount - betAmount;
      betAmount = 0;
    }
    document.getElementById("cash").innerHTML = walletAmount;
    document.getElementById("bet").innerHTML = betAmount;
  }
}

function hiOption() {
  option = "h";
  nCard();
}
function loOption() {
  option = "l";
  nCard();
}

function updateBet(bet){
  if(walletAmount >= betAmount + bet && 1001 > betAmount + bet){
    betAmount = betAmount + bet;
    document.getElementById("bet").innerHTML = betAmount;
  }
  else{
    swal("ERROR!", "The maximum bet is £1000!", "error");
  }
}

document.getElementsByClassName("repeat-bet")[0].addEventListener("click",function(){
  updateBet(parseInt(document.getElementById("last-bet").innerHTML));
});

document.getElementsByClassName("bet-twenty")[0].addEventListener("click",function(){
  updateBet(20);
});

document.getElementsByClassName("bet-fifty")[0].addEventListener("click",function(){
  updateBet(50);
});

document.getElementsByClassName("bet-hundred")[0].addEventListener("click",function(){
  updateBet(100);
});