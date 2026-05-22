const pairElement = string => {
  let result = [];

  for(let i = 0; i<string.length; i++){
    if(string[i] === "A"){
      result.push([string[i], "T"])
    }
    else if(string[i] === "T"){
      result.push([string[i], "A"])
    }
    else if(string[i] === "C"){
      result.push([string[i], "G"])
    }
    else if(string[i] === "G"){
      result.push([string[i], "C"])
    }
    else result
  }
  return result
}

console.log(pairElement("ACTT"))
