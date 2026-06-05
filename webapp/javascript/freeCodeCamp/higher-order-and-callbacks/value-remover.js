const destroyer = (arr,...arg) =>{
  console.log(typeof arg)
  const result = arr.filter(element => 
    !arg.includes(element)
  )
  return result
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53))
