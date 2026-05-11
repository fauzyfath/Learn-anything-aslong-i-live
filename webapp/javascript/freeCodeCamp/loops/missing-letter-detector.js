const fearNotLetter = string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let lostLetter = "";
  let indexStart = 0;

  for(let i =0; i<alphabet.length; i++){    
    if(alphabet[i] === string[0]){
      
      indexStart = i;   //indexstart 1 ->bcdf; || indexStart 18 -> stvwx 

      for(let j = 0; j<string.length; j++){     
        console.log(indexStart);
        console.log(string[j]);
        if(string[j] !== alphabet[indexStart]){
          console.log(string[j]);
          console.log(j+1);
          lostLetter = alphabet[indexStart+j+1];
          break;
        }
      }
    }
    
  }
  return lostLetter;
}
console.log(fearNotLetter("bcdf"))


