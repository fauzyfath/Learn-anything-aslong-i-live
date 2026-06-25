const dropElements = (arr, func) => {
  let firstCorrect = null;
  let lastCorrect = null;
  let counter = 0;

  for(let i = 0; i<arr.length; i++){
    if(func(arr[i]) === true){
      if(counter < 1){
        firstCorrect = i;
        counter++
      }
      lastCorrect = i+2;
      counter++
    }
    continue;
  }
  return arr.slice(firstCorrect, lastCorrect)
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))
