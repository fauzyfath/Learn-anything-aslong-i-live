const smallestCommons = (args) => {
  
  let calculator = {
    gcd(a,b){
      while(b != 0){
        [a,b] = [b, a%b]
      }
      return a
    },
    lcm(a,b){
      return (a*b) / this.gcd(a,b)
    },
    getResult(){
      let a = args[0]
      let b = args[1]
      if(a>b){
        a = args[1]
        b = args[0]
      }
      console.log(a)
      console.log(b)
      
      let arr = Array.from({length: b - a + 1},(_,element) => element+a)
      console.log(arr)
      
      let result = arr.reduce((a,b) => this.lcm(a,b))
      return result
    }
  }

  return calculator.getResult()
}

console.log(smallestCommons([5,1]))
