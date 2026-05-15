const getAverage = array => {
  let sum = 0;
  let average = 0;
  for(let i =0; i<array.length; i++){
    sum += array[i];
  }
  average = sum/array.length;
  return average;
}

const getGrade = score =>{
  if(score === 100){
    return "A+";
  }
  else if(score >= 90 && score <=99){
    return "A";
  }
  else if(score >= 80 && score <=89){
    return "B";
  }
  else if(score >= 70 && score <=79){
    return "C";
  }
  else if(score >= 60 && score <=69){
    return "D";
  }
  else if(score <= 59){
    return "F";
  }
}

const hasPassingGrade = score => {
  let passingGrade = ["A+","A","B","C","D"]
  let resultGetGrade = getGrade(score);
  let result = true;
  for(let i = 0; i<passingGrade.length; i++){
    if(resultGetGrade === passingGrade[i]){

      result = true;
      break;
    }
    else{
      result = false;
    }
  }
  console.log(result);
  return result
}

const studentMsg = (array,score) =>{
  let resultAvg = getAverage(array);

  if(resultAvg >= score){
    return `Class average: ${resultAvg}. Your grade: ${getGrade(score)}. You failed the course.`;
  }
  else{
    return `Class average: ${resultAvg}. Your grade: ${getGrade(score)}. You passed the course.`;
  }
} 

let averageStud = getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]) 
let resultGrade = getGrade(averageStud);


// console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
// console.log(getGrade(averageStud));
// console.log(hasPassingGrade("A+"));

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
