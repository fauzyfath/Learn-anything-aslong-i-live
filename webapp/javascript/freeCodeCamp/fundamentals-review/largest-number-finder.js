const largestOfAll = array => {
  let resultArray = new Array(array.length);
  
  for(let i = 0; i<array.length; i++){
    if(Array.isArray(array[i])){
      let temp = -100;
      for(let j=0; j<array[i].length; j++){
        if(array[i][j]>temp){
          temp = array[i][j];
          resultArray[i] = temp;
        }
      }
    }
    else{
      console.log("not an array");
    }
  }
  return resultArray
}

largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
