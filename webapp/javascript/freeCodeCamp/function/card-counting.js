let count = 0;

let cardCounter = card => {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case "J":
    case "K":
    case "Q":
    case "A":
      count--;
      break;
  };
  // console.log(count);

  if(count <= 0){
    return `${count} Hold`;
  }
  else if(count > 0){
    return `${count} Bet`;
  }
}

// cardCounter(2);
// cardCounter(3);
// cardCounter(4);
// cardCounter(5);
// cardCounter(6);
// cardCounter(7);
// cardCounter(8);
// cardCounter(9);
// cardCounter(10);
// cardCounter("J");
// cardCounter("Q");
// cardCounter("K");
// cardCounter("A");

cardCounter(3);
cardCounter(7);
cardCounter("Q");
cardCounter(8);
cardCounter("A");