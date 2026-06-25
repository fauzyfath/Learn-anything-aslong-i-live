const inputText = document.getElementById("text-input");
const countText = document.getElementById("char-count");

const updateCount = () => {
    let count = inputText.value.length;

    if( count < 50){
        countText.textContent = `Character Count: ${count}/50`
        countText.classList.remove("colorBgText");
    }
    else if (count >= 50){
        countText.textContent = `Character Count: ${count}/50`;
        countText.classList.add("colorBgText");
    }

    inputText.value = inputText.value.slice(0,49);
}

inputText.addEventListener("input" , () =>{
    updateCount()   
});

// inputText.addEventListener("keydown", (event) => {
//     // if(event.key == "Backspace"){
//     //     updateCount();
//     // }
//     if(inputText.value.length >= 50  && event.key !== "Backspace") {
//         event.preventDefault()
//     }
// })

// const inputText = document.getElementById("text-input");

// const updateCount = () => {
//     const count = document.getElementById("char-count");
//     let currCount = Number(count.textContent.split("/")[0].split(" ").pop());

//     if (currCount>= 50){
//         count.textContent = `Character Count: 50/50`;
//         return count.classList.add("colorBgText");
//     } 

//     currCount++;
//     count.textContent = `Character Count: ${currCount}/50`;
// }

// const reduceCount = () => {
//     const count = document.getElementById("char-count");
//     let currCount = Number(count.textContent.split("/")[0].split(" ").pop());
    
//     if(currCount<=0){
//         return
//     }

//     currCount--;

//     count.textContent = `Character Count: ${currCount}/50`;
//     count.classList.remove("colorBgText");
// }

// inputText.addEventListener("input", (event) =>{
//     if(event.inputType == "deleteContentBackward"){
//         return
//     }
//     if (inputText.value.length >= 50){
//         count.textContent = `Character Count: 50/50`;
//         count.classList.add("colorBgText");
//     } 
//     updateCount();
// })

// inputText.addEventListener("keydown", (event) => {
//     if(event.key == "Backspace"){
//         reduceCount();
//     }
//     if(inputText.value.length >= 50  && event.key !== "Backspace") {
//         event.preventDefault()
//     }
// })