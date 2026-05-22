const uniteUnique = (...restArr) =>{
  let result = [];
  
  for(let i = 0; i<restArr.length; i++){
    for(let j = 0; j<restArr[i].length; j++){
      if(result.includes(restArr[i][j])){
        continue;
      }
      result.push(restArr[i][j]);
    }
  }
  return result
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))
