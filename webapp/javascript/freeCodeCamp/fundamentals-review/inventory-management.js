let inventory = []

const findProductIndex = name => {
  let nameToLower = name.toLowerCase();
  if(inventory.length === 0){
      return -1
  }
  else{
    for(let i = 0; i<inventory.length; i++){
      let currentIndex = inventory[i].name;

      if(currentIndex.toLowerCase() === nameToLower){
        return i;
      }
      else {
        continue;
      }
    }
    return -1;
  }
}

const addProduct = product => {
  const productName = product.name
  let resultIndex = findProductIndex(productName);

  if(resultIndex !== -1){
    inventory[resultIndex].quantity += product.quantity;
    console.log(`${inventory[resultIndex].name} quantity updated`)
  }
  else {
    product.name = product.name.toLowerCase()
    inventory.push(product);
    console.log(`${product.name} added to inventory`)
  }
}

const removeProduct = (name,quantity) =>{
  const resultIndex = findProductIndex(name);
  if(resultIndex !== -1){
    if((inventory[resultIndex].quantity - quantity) === 0){
      console.log(`Remaining ${inventory[resultIndex].name} pieces:${inventory[resultIndex].quantity}`);
      inventory.splice(resultIndex,1);
    }
    else if(((inventory[resultIndex].quantity - quantity) < 0) ){
      console.log(`Not enough ${inventory[resultIndex].name} available, remaining pieces: ${inventory[resultIndex].quantity}`)
    }
    else{
      inventory[resultIndex].quantity -= quantity;
      console.log(`Remaining ${inventory[resultIndex].name} pieces: ${inventory[resultIndex].quantity}`);
    }
  }
  else {
    name = name.toLowerCase()
    console.log(`${name} not found`);}
}


addProduct({name: "SUGAR", quantity: 10})
addProduct({name: "SALT", quantity: 10})

removeProduct("FlOUR", 10)
console.log(inventory);

removeProduct("ANJ", 10)
console.log(inventory)

