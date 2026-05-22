const generatePassword = passLength =>{
  let randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
  let password = "";

  for (let i = 0; i<passLength; i++){
    password += randomChar[Math.floor(Math.random()*randomChar.length)]
  };
  return password
}

let password = generatePassword(10);
let result = console.log(`Generated password: ${password}`)
