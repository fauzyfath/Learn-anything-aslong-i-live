const whatIsInAName = (arr, obj) =>{
  const result = arr.filter((element) => {
      let match = true
      for(const keys in obj){
        if(element[keys] !== obj[keys]){
          match = false
        };
      }
      return match
    } 
  );
  return result
}



console.log(whatIsInAName(
    [{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }],
    { "apple": 1, "cookie": 2 }
  )
)

// [{"apple": 1, "bat": 2, "cookie": 2}]
