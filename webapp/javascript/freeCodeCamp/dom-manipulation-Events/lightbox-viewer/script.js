const lightBoxEl = document.querySelector(".lightbox");
const galleryItemEl = document.querySelectorAll(".gallery-item");
const closeBtnEl = document.getElementById("close-btn");
const lightBoxImgEl = document.getElementById("lightbox-image");

let isModalOpen = false;
let currImage = ""

const modalToggle = isOpen => {
    lightBoxImgEl.setAttribute("src", currImage);
    if(!isOpen){
      isModalOpen = !isOpen;
      lightBoxEl.style.display = "flex";

    }
    else{
      isModalOpen = !isOpen
      lightBoxEl.style.display = "none";
    }
}

galleryItemEl.forEach(gallery => {
    gallery.addEventListener("click", () => {
        currImage = gallery.getAttribute("src").replace("-thumbnail", ""); 
        modalToggle(isModalOpen)
    })
})

lightBoxImgEl.addEventListener("click", (event) => {
    event.stopPropagation()
})

lightBoxEl.addEventListener("click", () => {
    modalToggle(isModalOpen);
  });

closeBtnEl.addEventListener("click", (event) => {
    modalToggle(isModalOpen);
    event.stopPropagation()
});