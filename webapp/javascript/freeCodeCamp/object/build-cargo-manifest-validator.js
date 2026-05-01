const normalizeUnits = manifest => {
  //lb ÷ 2.205 = kg
  const copy = {...manifest};
  if(manifest.unit !== 'kg'){
    copy.weight = manifest.weight * 0.45;
    copy.unit = "kg";
    return copy;
  }
  else return copy;
}

const validateManifest = manifest => {
  let copy = new Object();
  //containerId
  if(manifest.containerId === undefined){
    copy.containerId = "Missing";
  }
  else if(Number.isInteger(manifest.containerId) === false || manifest.containerId < 1 || Number.isNaN(manifest.containerId) === true){
    copy.containerId = "Invalid";
  };

  //destination
  if(manifest.destination === undefined){
    copy.destination = "Missing";
  }
  else if(typeof(manifest.destination) !== "string"  || manifest.destination.trim().length < 1){
    copy.destination = "Invalid";
  };

  //weigt
  if(manifest.weight === undefined){
    copy.weight = "Missing"
  }
  else if(manifest.weight <= 0 || Number.isNaN(manifest.weight) !== false){
    copy.weight = "Invalid";
  };

  //unit
  if(manifest.unit === undefined){
    copy.unit = "Missing";
  }
  else if(typeof(manifest.unit) !== "string"){
    copy.unit = "Invalid";
  }
  else if(manifest.unit.trim() !== "lb" && manifest.unit.trim() !== "kg"){
    copy.unit = "Invalid";
  }
  else if(manifest.unit.trim().length < 1){
    copy.unit = "Invalid";
  }
  
  //hazmat
  if(manifest.hazmat === undefined){
    copy.hazmat = "Missing";
  }
  else if(typeof(manifest.hazmat) !== "boolean"){
    copy.hazmat = "Invalid";
  };

  return copy;
}

const processManifest = manifest =>{
  let normalize = normalizeUnits(manifest);
  let val = validateManifest(manifest);

  // if (Object.keys(manifest).length < 5) {
  //   console.log(`Validation error: ${manifest.containerId}`);
  //   console.log(val);
  // } else {
  //   console.log(`Validation success: ${manifest.containerId}`);
  //   console.log(`Total weight: ${normalize.weight} kg`);
  // }

  if (val.unit === "Invalid"){
    normalize;
    let valAfterNormalize = validateManifest(normalize);
    if(Object.keys(valAfterNormalize).length === 0){
      console.log(`Validation success: ${normalize.containerId}`);
      console.log(`Total weight: ${normalize.weight} kg`);
    }
    else if(Object.keys(valAfterNormalize).length > 0){
      console.log(`Validation error: ${normalize.containerId}`);
      console.log(val);
    }
  }
  else if(Object.keys(val).length > 0){
      console.log(`Validation error: ${manifest.containerId}`);
      console.log(val);
  }
  else if(Object.keys(val).length == 0){
      console.log(`Validation success: ${normalize.containerId}`);
      console.log(`Total weight: ${normalize.weight} kg`);
  }
}




// console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "kg", hazmat: true }));

console.log(validateManifest({containerId: null , destination: null, weight: 0 , unit: "pounds", hazmat: null }));

// console.log(validateManifest({ containerId: 0, destination: 405, weight: -84, unit: "lb", hazmat: "no" }));

// console.log(validateManifest({ weight: NaN }));

// console.log(validateManifest({}))

// console.log(validateManifest({ destination: "  " }))

// processManifest({ containerId: -88, destination: "Soledad", weight: NaN });

// processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false })


const user = {
        name: "john",
        age: 30,
        isAdmin: true
    };

    const jsonString = JSON. stringify(user);
    console.log(jsonString);        //