const card = document.getElementById("card");
const lastCard = document.getElementById("lastCard");

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
}