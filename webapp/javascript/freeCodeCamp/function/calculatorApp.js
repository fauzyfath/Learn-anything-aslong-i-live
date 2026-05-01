function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));


function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));


const email = "apple.pie@example.com";

const maskEmail = oldEmail => {
  let indexEmail = oldEmail.indexOf("example.com");
  let sliceEmail =  oldEmail.slice(1, indexEmail-2);
  let emailAfterSlice = sliceEmail;
  let maskedEmail = emailAfterSlice(sliceEmail,"*" )
  console.log(maskedEmail);
    
  return maskedEmail;
}

console.log(maskEmail(email));