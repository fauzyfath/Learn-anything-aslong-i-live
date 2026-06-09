const steamrollArray = arr => {  
  let result = [];
  arr.forEach(element => {
    if(Array.isArray(element)){
      result.push(...steamrollArray(element))
    }
    else{
      result.push(element)
    }
  })
  
  return result
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))






// arr.forEach(element => {
  //   if(Array.isArray(element)){
  //     if(!element.length <= 0){
  //       for(let i = 0; i<element.length; i++){
  //         if(Array.isArray(element[i])){
  //           for(let j = 0; j<element[i].length; j++){
  //             result.push(element[i][j])
  //           }
  //         }
  //         else result.push(element[i])
  //       }
  //     }
  //   }
  // })
