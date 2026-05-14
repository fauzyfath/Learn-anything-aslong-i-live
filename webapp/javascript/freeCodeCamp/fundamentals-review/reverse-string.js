const reverseString = string => {
  let currentString = "";
  
  for(let i = string.length-1; i>=0; i--){
    currentString = currentString + string[i];
  } 
  return currentString
}

reverseString("hello")
