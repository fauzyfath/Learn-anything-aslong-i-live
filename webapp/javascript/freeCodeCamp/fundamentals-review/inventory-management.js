let inventory = []

const findProductIndex = name => {
  let nameToLower = name.toLowerCase();
  for(let i = 0; i<inventory.length; i++){
    let currentIndex = inventory[i].name;

    if(currentIndex.toLowerCase() === nameToLower){
      return i;
    }
    else return -1;
  }
}

const addProduct = product => {
  let isMatch = false;
  let currentIndex = 0;
  let productNameToLowerCase =  product.name.toLowerCase();

  for(let i = 0; i<inventory.length; i++){
    if(inventory[i].name.toLowerCase() === productNameToLowerCase){
      isMatch = true;
      currentIndex = i;
      break;
    }
    else{
      isMatch = false;
      break;
    }
  }
  if(isMatch === true){
    inventory[currentIndex].quantity = product.quantity;
    console.log(`${product.name} ${product.quantity}`)
  }
  else {
    inventory.push(product);
    console.log(`${product.name} added to inventory`)
  }
}

const removeProduct = (name,quantity) =>{
  
}
