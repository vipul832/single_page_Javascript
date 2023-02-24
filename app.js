let aTabBtn = document.querySelectorAll(".nav-tags");
let tagObj = {
  "about-btn": "about",
  "service-btn": "services",
  "images-btn": "image",
  "get-started": "contact",
};

for (tag of aTabBtn) {
  tag.addEventListener("click", (e) => {
    let id = e.target.id;
    e.preventDefault();
    if (id in tagObj) {
      let btn = document.getElementById(tagObj[id]);
      btn.scrollIntoView();
    }
  });
}

// Image slider part
let nextBtn = document.querySelector(".next");
let preBtn = document.querySelector(".pre");
let carousaSlide = document.querySelector(".carousal-slider");
//let slides = Array.from(carousaSlide.children);
let slides = document.querySelectorAll(".carousal-slider img");

let slideWidth = slides[0].width;

const setSlidPostiton = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

const moveToSlide = (carousaSlide, currentImage, targetImage) => {
  carousaSlide.style.transform = "translateX(-" + targetImage.style.left + ")";
  currentImage.classList.remove("current-img");
  targetImage.classList.add("current-img");
};

preBtn.addEventListener("click", () => {
  const currentImage = carousaSlide.querySelector(".current-img");
  const prevImage = currentImage.previousElementSibling;
  slideWidth = currentImage.width;
  moveToSlide(carousaSlide, currentImage, prevImage);
  slides.forEach(setSlidPostiton);
});

nextBtn.addEventListener("click", () => {
  const currentImage = carousaSlide.querySelector(".current-img");
  slideWidth = currentImage.width;
  const nextImage = currentImage.nextElementSibling;
  moveToSlide(carousaSlide, currentImage, nextImage);
  slides.forEach(setSlidPostiton);
});
