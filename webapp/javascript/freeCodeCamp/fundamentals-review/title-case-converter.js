const titleCase = string => {
  let stringToLowerCase = string.toLowerCase();
  let result = "";
  let beingSlice = false;

  for(let i = 0; i<string.length; i++){

    if(i === 0){
      result += stringToLowerCase.slice(i, i) + stringToLowerCase[i].toUpperCase();
    }
    else if(string[i] === " "){   //3
      result += stringToLowerCase.slice(i+1, i+1);
      beingSlice = true;
    }
    else if(beingSlice === true){
      result+= " ";
      result+= stringToLowerCase[i].toUpperCase();
      beingSlice = false
    }
    else{
      result += stringToLowerCase[i]
    }
    
  }
  return result 
}


console.log(titleCase("sHoRt AnD sToUt")) 
