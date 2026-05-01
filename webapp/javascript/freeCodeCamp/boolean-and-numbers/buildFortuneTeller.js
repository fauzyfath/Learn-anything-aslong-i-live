let fortune1,fortune2,fortune3,fortune4,fortune5

fortune1 = "Your cat will look very cuddly today.";
fortune2 = "The weather will be nice tommorow.";
fortune3 = "Be cautions of your new neighbors.";
fortune4 = "You will find a new hobby soon.";
fortune5 = "I want to be a software engineer and better than anyone";

let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);

console.log(randomNumber);

let selectedFortune = null;

if (randomNumber == 1){
  selectedFortune = fortune1;
}
else if(randomNumber == 2){
  selectedFortune = fortune2;
}
else if(randomNumber == 3){
  selectedFortune = fortune3;
}
else if(randomNumber == 4){
  selectedFortune = fortune4;
}
else if (randomNumber == 5){
  selectedFortune = fortune5;
}

console.log(selectedFortune);