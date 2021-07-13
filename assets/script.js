const card = document.getElementById("card");
const lastCard = document.getElementById("lastCard");
const status = document.getElementById("status");
let myMoney = document.getElementById("cash");
let myBet = document.getElementById("bet");
let walletAmount = 1000;
let betAmount = 0;
let winCount = 0;
let lossCount = 1;

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
  card.style.backgroundImage = "url(assets/img/cards/" + randomCard + randomSuit + ".png";
  lastCard.style.backgroundImage = "url(assets/img/cards/red_back.png";
}

function nCard() {
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
  
  console.log(randomCardNumber, newCardNumber);

  if (option == "h" && newCardNumber > randomCardNumber) {
    status.innerHTML = "YOU WIN!";
    updateResult("win");
    winCount++;
  } else if (option == "l" && newCardNumber < randomCardNumber) {
    status.innerHTML = "YOU WIN!";
    updateResult("win");
    winCount++;
  } else if (newCardNumber == randomCardNumber) {
    status.innerHTML = "DRAW";
    updateResult("draw");
  } else {
    status.innerHTML = "YOU LOST!";
    updateResult("lose");
    lossCount++;
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