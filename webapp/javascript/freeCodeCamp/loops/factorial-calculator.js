let num = 7;

const factorialCalculator = number =>{
  let result = 1;
  for(let i = 1; i<=number; i++){
    if(number === 1){
      result = number * 1;
    }
    result =  result * i;
  }
  return result
}
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}` 
console.log(resultMsg);
