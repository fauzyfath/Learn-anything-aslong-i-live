const chunkArrayInGroups = (array,number) =>{
  let newArray = [];
  let indexArr = 0;

  for(let i = 0; i<array.length; i+=number){
    indexArr = i+number;
    newArray.push(array.slice(i,indexArr));
  }
  return newArray;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));


// if(j<number){
//       console.log("a"+j);
//       newArray.push(array[j]);
//     }
