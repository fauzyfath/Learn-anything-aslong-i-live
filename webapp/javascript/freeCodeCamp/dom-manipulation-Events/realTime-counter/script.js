const inputText = document.getElementById("text-input");

const updateCount = () => {
    const count = document.getElementById("char-count");
    let currCount = Number(count.textContent.split("/")[0].split(" ").pop());

    if (currCount>= 50){
        count.textContent = `Character Count: 50/50`;
        return count.classList.add("colorBgText");
    } 

    currCount++;
    count.textContent = `Character Count: ${currCount}/50`;
}

const reduceCount = () => {
    const count = document.getElementById("char-count");
    let currCount = Number(count.textContent.split("/")[0].split(" ").pop());
    
    if(currCount<=0){
        return
    }

    currCount--;

    count.textContent = `Character Count: ${currCount}/50`;
    count.classList.remove("colorBgText");
}

inputText.addEventListener("input", (event) =>{
    if(event.inputType == "deleteContentBackward"){
        return
    }
    if (event.value.length >= 50){
        count.textContent = `Character Count: 50/50`;
        count.classList.add("colorBgText");
    } 
    updateCount();
})

inputText.addEventListener("keydown", (event) => {
    if(event.key == "Backspace"){
        reduceCount();
    }
    if(inputText.value.length >= 50  && event.key !== "Backspace") {
        event.preventDefault()
    }
})