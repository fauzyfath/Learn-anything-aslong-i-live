const findElement = (array, func) => {
  let result = undefined;

  for(let i = 0; i<array.length; i++){
    if(func(array[i]) === true){
      result = array[i];
      break;
    }
  }
  return result;
} 

console.log(findElement([1, 2, 3, 4], function(num) { return num > 2; }))
