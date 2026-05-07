const mutation = array =>{
  let countCorrect = 0;
  let arrayElm2 = array[1].length;

  for(let i = 0; i<array[1].length; i++){
    let temp = array[1][i];
    // console.log(temp);

    for(let j=0; j<array[0].length; j++){
      let elm2 = array[0][j]
      if(temp.toLowerCase() === elm2.toLowerCase()){
        countCorrect++;
        break;
      }
    }
  }

  if(countCorrect === arrayElm2){
    return true;
  } 
  else{
    return false;
  }
}

console.log(mutation(["Mary", "Aarmy"]))

// let array = ["Noel","Ole"];
// let countCorrect = 0;
// let arrayElm2 = array[1].length;

// for(let i = 0; i<array[0].length; i++){
//   let temp = array[0][i];

//   for(let j=0; j<array[1].length; j++){
//     let elm2 = array[1][j]
    
//     if(temp.toLowerCase() === elm2.toLowerCase()){
//       countCorrect++;
//     }
//   }
// }

// if(countCorrect === arrayElm2){
//   return true;
// } 
// else{
//   return false;
// }
