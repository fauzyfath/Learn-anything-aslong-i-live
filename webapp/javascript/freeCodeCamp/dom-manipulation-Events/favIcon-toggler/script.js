const btns = document.querySelectorAll(".favorite-icon");

const updateBtn = btn => {
    if(btn.classList.contains("filled")){
        btn.classList.remove("filled")
        btn.innerHTML = "&#9825;";
    }
    else{
        btn.classList.add("filled");
        btn.innerHTML = "&#10084;"
    }
}

btns.forEach(button => {
    button.addEventListener("click",() => updateBtn(button))
})