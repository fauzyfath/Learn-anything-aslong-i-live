const pyramid = (string, int, bool) =>{
  let result ="";
  let whitespace = " ";
  let whitespaceAmount = int;
  if(bool===false){
    for(let i = 1; i<=int; i++){
      result += `\n${whitespace.repeat(whitespaceAmount-1)}${string.repeat(i*2-1)}`;
      whitespaceAmount--;
    }
    return result+="\n"
  }
  else{
    whitespaceAmount = 0;
    for(let i = int; i>=1; i--){
      result += `\n${whitespace.repeat(whitespaceAmount)}${string.repeat(i*2-1)}`;
      whitespaceAmount++;
    }
    return result+="\n"
  }
}

console.log(pyramid("o", 4, false));

