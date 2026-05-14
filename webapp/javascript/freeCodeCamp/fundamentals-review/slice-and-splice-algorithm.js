const frankenSplice = (array1, array2, index) => {
  let cpyArray2 = [...array2]
  let result = [];
  for(let i = 0; i<array1.length; i++){
    cpyArray2.splice(index,0,array1[i])
    result = cpyArray2;
    index++
  }
  return result
}

console.log(frankenSplice([1, 2, 3, 4], [], 0))
