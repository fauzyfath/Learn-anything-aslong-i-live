const fearNotLetter = string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lostLetter = "";
  let indexStart = alphabet.indexOf(string[0]);

  // console.log(indexStart);

  for(let i=0; i<alphabet.length; i++){
    // console.log(string[i]);
    // console.log(alphabet[indexStart]);
    // console.log("-----------")

    if(string[i] !== alphabet[indexStart]){
      // console.log(string[i]);
      // console.log(alphabet[indexStart])
      lostLetter = alphabet[indexStart];
      return lostLetter
    }
    indexStart++;
  }
  
}
console.log(fearNotLetter("abce"))

