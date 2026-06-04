const getIndexToIns = (arr, numb) =>{
  if(arr.length === 0){
    return 0
  }
  arr.sort((a,b) => a - b, 0)
  const result = arr.findIndex(index => index >= numb)
  if(result == -1){
    return arr.length
  }
  return result

}

console.log(getIndexToIns([3, 10, 5], 11))
