let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const isObject = obj =>{
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

const lookUpProfile = (name,property) =>{
  let result = null;
  let propertyKeys = null;

  for(let i = 0; i<contacts.length; i++){
    
    if(contacts[i]["firstName"] !== name){
      result = "No such contact";
      continue;
    }

    const keys = Object.keys(contacts[i]);

    for(let j = 0; j<keys.length; j++){
      if(keys[j] !== property){
        result = "No such property"
        continue;
      }
      propertyKeys = keys[j];
      result = contacts[i][propertyKeys];
      break;
    }
    break;
  }
  return result;
}

console.log(lookUpProfile("BOB","number"));
