
var num = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suit = ["Spades", "Diamonds", "Hearts", "Clubs"]
var deck = [];

var playerCards = [];
var dealerCards = [];
var cardCount = 0;

var deal = document.getElementById("deal");

// Invoke all functions
function start(){
	createDeck(num, suit);
	shuffle(deck)
}

start();

// function to create a deck
function createDeck(num, suit) {
  for (s in suit) {
  	// The symbol on the card for suit
  	var suitIcon = suit[s][0].toUpperCase();

  	if(suit[s] == "Hearts"){
  		suitShape = "&#x2665"
  	}else if(suit[s] == "Diamonds"){
  		suitShape = "&#9830"
  	}else if(suit[s] == "Spades"){
  		suitShape = "&#9824"
  	}else{
  		suitShape = "&#9827"
  	}

  	var bgcolor = (suit[s] == "Spades" || suit[s] == "Clubs") ? "black" : "red";
  	
    for( n in num){
    // var cardValue = (n>9) ? 10 : parseInt(n)+1;
    // n is the index of num array
    var cardValue
   	if(n>9){
   		cardValue = 10;
   	}else{
   		cardValue = parseInt(n)+1;
   	}
      var card = {
			suit:suit[s],
			cardnum:num[n],
			suitValue: suitIcon,
			bgcolor: bgcolor,
			cardValue: cardValue,
			suitShape: suitShape

		};
      deck.push(card);
		/* console.log(card) */
    }
  }
}
console.log(deck)

// Function to Shuffle Deck
function shuffle(arr){
	for(i=arr.length-1; i > 0; i--){
		var j = Math.floor(Math.random() * (i+1));
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
	return arr;
}
console.log(shuffle(deck))


// Start Game function- Deals each player a hand

// Deal function- Deals the players a hand (same as start) if the cards run out then reshuffle and deal
deal.onclick = function deal(){
	var playerCards = [];
	var dealerCards = [];
	
		for(x=0; x<2; x++){
		playerCards.push(deck[cardCount]);
		cardCount ++
		dealerCards.push(deck[cardCount]);
		cardCount ++
		// console.log(cardCount)
	}

	if(playerCards[0] === undefined){
		console.log("STOP!!!")
		cardCount = 0;
		shuffle(deck);
		console.log(cardCount)
		console.log(deck)
	}
	
	console.log(playerCards)
	console.log(dealerCards)
}





// Hit function- deals the player a new card 

// Stay Function - Deals the dealer cards and ends game if dealer busts or is above 17

// Double down function - doubles the players bet and deals one card to player
var li = document.getElementById('cardDeck');
// // Display all cards onto screen
for(i=0; i<deck.length; i++){
	var newli = document.createElement("li");
	newli.innerHTML = deck[i].suit + "-" + deck[i].cardnum + "-" + deck[i].suitValue + "-" + deck[i].cardValue + "-"+deck[i].bgcolor + deck[i].suitShape;
	
	newli.style.color = deck[i].bgcolor;
	li.appendChild(newli);
}























