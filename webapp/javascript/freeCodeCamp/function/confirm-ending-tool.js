const confirmEnding = (check, againts) => {
  let againtsIndex = againts.length;
  let lastIndex = check.length-againtsIndex;
  console.log(lastIndex);
  let result = check.includes(againts,lastIndex);
  if(result == true){
    return true;
  }
  else return false;
}

confirmEnding("connor", "n");


// console.log(test)
// if(check[lastIndex] == againts){
//   return true;
// }
// else return false;