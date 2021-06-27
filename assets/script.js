const card = document.getElementById("card");
const lastCard = document.getElementById("lastCard");

function loadCards() {
  randomCard = Math.floor(Math.random() * 13 + 2);
  randomSuit = Math.floor(Math.random() * 4 + 1);
  randomCardNumber = randomCard;