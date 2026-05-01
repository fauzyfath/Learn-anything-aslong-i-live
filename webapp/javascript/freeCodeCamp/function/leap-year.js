let year = 1900;
const isLeapYear = num => {
  if(num%4 == 0 ^ num%400==0){
    return `${num} is a leap year.`;
  }
  else if(num%100==0){
    return `${num} is not a leap year.`;
  }
  else if(num%4==0 && num%100==0){
    return `${num} is a leap year.`
  }
}
let result = isLeapYear(year) 
console.log(result);


console.log(2024/400);