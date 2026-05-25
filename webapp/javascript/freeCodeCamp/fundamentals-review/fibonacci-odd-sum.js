const sumFibs = number => {
  let result = 0;
  const fib = [0,1];

  for(;fib[1]<=number;){
    let temp =  fib[0];

    fib[0] = fib[1];
    fib[1] = temp + fib[1];
    
    if(fib[1] % 2 !== 0){
      if(fib[1] <= number){
        result += fib[1]
        // console.log(result)
      }
    }
  }
  return result + 1
}


console.log(sumFibs(75025))




// if(fib[0]%2 !== 0){
//         fib[0] = fib[1]
//         result+=fib[0]
//         console.log(fib)

//         continue;
//         // console.log(resultFib0)
//       }
//       else if(fib[1] % 2 !==0){
//         fib[1] = temp + fib[1];
//         result+=fib[1]
//         continue;
//       }
