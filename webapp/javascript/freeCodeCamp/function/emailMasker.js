const maskEmail = oldEmail => {
  let indexEmail = oldEmail.indexOf("@");
  let sliceEmail = oldEmail.slice(indexEmail-1);   //p@example.com
  let sliceFirstLetter = oldEmail.slice(0,1);
  let star = "*".repeat(indexEmail-2);

  return sliceFirstLetter+star+sliceEmail;
}
let email = "johnappleseed@email.com";
console.log(maskEmail(email));
email = "apple.pie@example.com";
console.log(maskEmail(email));
email ="freecodecamp@example.com"
console.log(maskEmail(email));
email = "info@test.dev"
console.log(maskEmail(email));
email = "user@domain.org"
console.log(maskEmail(email));

