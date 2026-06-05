const sumPrimes = numb => {
  let flag = true
  const calculator = {
    total: 0,
    checked(n){
      if(n<2) this.total = 0;
      else this.total = n;
    },
    primes(n){
      flag = true
      for(let i=2; i<n; i++){
        if(n%i === 0){
          flag = false
        }
      }
    },
    accumulate(n){
      if(flag == true){
        // console.log(n)
        this.total += n 
      }
    },
    getResult(){
      return this.total;
    } 
  }

  for(let i = 2; i<=numb; i++){
    calculator.primes(i);
    calculator.accumulate(i);
  }

  return calculator.getResult();
}

console.log(sumPrimes(977))
