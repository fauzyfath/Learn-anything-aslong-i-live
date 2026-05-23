const convertHTML = string => {
  let result = "";

  for(let i = 0; i<string.length; i++){

    if(string[i] === "&"){
      result += '&amp;';
    }

    else if(string[i] === '<'){
      result += '&lt;';
    }

    else if(string[i] === '>'){
      result += '&gt;';
    }
    else if(string[i] === '"'){
      result += "&quot;";
    }

    else if(string[i] === "'"){
      result += "&apos;";
    }
    else{
      result += string[i];
    }
  }
  return result
}



console.log(convertHTML("Dolce & Gabbana"))

