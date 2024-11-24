const slideShowImages = document.querySelectorAll(".slides .slideshow-img")

let currentImageCounter = 0;

slideShowImages[currentImageCounter].style.display = "block"

const nextImageDelay = 1500;


setInterval(nextImage, nextImageDelay)

function nextImage(){
  slideShowImages[currentImageCounter].style.display = "none"
  currentImageCounter = (currentImageCounter + 1) % slideShowImages.length
  slideShowImages[currentImageCounter].style.display = "block"
}

