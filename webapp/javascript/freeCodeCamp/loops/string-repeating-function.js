const repeatStringNumTimes = (string, number) =>{
  if (number<= 0){
    return ""
  }
  let resultString = "";
  for(let i=0; i<number; i++){
    resultString += string;
  } 
  return resultString
}

console.log(repeatStringNumTimes("&",2))
