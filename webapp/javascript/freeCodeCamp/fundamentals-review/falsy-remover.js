const bouncer = array => {
  const falsyVal = [false, null, 0, "",undefined, NaN];
  let copyArr = [];
  let resultCheck = "";
  let isTrue = false;

  for(let i = 0; i<array.length; i++){
    for(let j = 0; j<falsyVal.length; j++){
      if(array[i] === falsyVal[j]){
        isTrue = false;
        break;
      }
      else if(Number.isNaN(array[i])){
        isTrue = false;
        break;
      }
      else{
        isTrue = true;
      }
    }
    if(isTrue === true){
      resultCheck = array[i];
      copyArr.push(resultCheck);
    }
    else{
      continue;
    }
  }
  return copyArr;
}
console.log(bouncer([false, null, 0, NaN, undefined, ""]))
