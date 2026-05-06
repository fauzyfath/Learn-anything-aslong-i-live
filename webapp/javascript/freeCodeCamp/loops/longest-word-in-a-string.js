const findLongestWordLength = string =>{
  let count = 1;
  let maxCount = 0

  let whitespace = " ";
  for(let i=0; i<string.length; i++){
    if(string[i] === whitespace){
      count = 0;
    }
    // console.log(count);
    if(count !== 0){
      if(count>maxCount){
        maxCount = count;
      }
      // console.log(maxCount);
    }
    count++
  }
  return maxCount
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
