const diffArray = (arr1, arr2) => {
  
  if(arr1.length == 0){
    return arr2
  }
  else if(arr2.length == 0){
    return arr1
  }

  const checked = arr1.filter((element1) => !arr2.some(element2 => element2 === element1)).concat(arr2.filter((element1) => !arr1.some(element2 => element2 === element1)));

  return checked
}

console.log(diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]))
