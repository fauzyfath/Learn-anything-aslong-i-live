const addLunchToEnd = (array, string) =>{
  let updatedEnd = array.push(string);
  console.log(`${array[updatedEnd-1]} added to the end of the lunch menu.`)
  return array;
}

const addLunchToStart = (array, string) => {
  array.unshift(string);
  console.log(`${array[0]} added to the start of the lunch menu.`)
  return array;
}
const removeLastLunch = array => {
  if(array.length === 0){
    console.log("No lunches to remove.")
  }
  else{
    let removedLast = array.pop();
    console.log(`${removedLast} removed from the end of the lunch menu.`)
  }
  return array;
}
const removeFirstLunch = array => {
  if(array.length === 0){
    console.log("No lunches to remove.");
  }
  else{
    let removedFirst = array.shift();
    console.log(`${removedFirst} removed from the start of the lunch menu.`);
  }
  return array;
}

const getRandomLunch = array => {
  
  if (array.length === 0){
    console.log("No lunches available.");  
  }
  else{
    let indexArray = array.length - 1;
    // let getRandom = Math.random() * (indexArray - 0 + 1) + 0;
    let getRandom = Math.random() * indexArray;
    console.log(getRandom);
    let roundedGetRandom = Math.trunc(getRandom);
    console.log(roundedGetRandom);
    let randomLunches = array[roundedGetRandom];
    console.log(roundedGetRandom);
    console.log(randomLunches);
    console.log(`Randomly selected lunch: ${randomLunches}`);
  }
}

const showLunchMenu = array => {
  if(array.length === 0){
    console.log("The menu is empty.");
  }
  else{
    let joined = array.join(", ");
    console.log(`Menu items: ${joined}`);
  }
} 
// ///////////////////////////////////////////////

let lunches = [];

addLunchToEnd(lunches, "Tacos");
addLunchToEnd(["Pizza", "Tacos"], "Burger");
addLunchToStart(lunches, "Sushi");
removeLastLunch(lunches);
removeFirstLunch(lunches);
removeFirstLunch(["Salad", "Eggs", "Cheese"]);

getRandomLunch(["Salad", "Eggs", "Cheese"]);
getRandomLunch(lunches);

showLunchMenu(lunches);