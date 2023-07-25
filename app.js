const body = document.body
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let currentSlide = 0;

rightBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > slides.length +1) {
    currentSlide = 0;
  
  }
  setBgToBody();
  setCurrentSlide();
});
leftBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
 
  }
  setBgToBody();
  setCurrentSlide();
});
setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[currentSlide].style.backgroundImage;

}

function setCurrentSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
 
}
