const sumAll = array => {
  let result = 0;

  if(array.length>2){
    return 
  }

  if(array[0]<array[1]){
    for(let i = array[0]; i<=array[1]; i++){
      result += i
    }
  }
  for(let i = array[1] ; i<=array[0]; i++){
      result += i
  }

  return result
}

console.log(sumAll([10, 5]))
