// You should have a function called booWho that receives one argument.
// If the argument received is a boolean primitive, the function should return true.
// If the argument is any other value, the function should return false.

function booWho(argument){
  return argument === true ? true : false || argument === false ? true : false;
}

console.log(booWho(false));