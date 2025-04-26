// Get references to DOM elements
const wrapper = document.querySelector(".sliderwrapper");
const sliderRight = document.querySelector(".moveslright");
const centerItems = document.querySelectorAll(".centeritem");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const totalItems = centerItems.length;

// Slide functions
const slideToIndex = (index) => {
  currentIndex = index;
  wrapper.style.transform = `translateX(${-100 * currentIndex}vw)`;
};

const slideNext = () => {
  currentIndex = (currentIndex + 1) % totalItems;
  slideToIndex(currentIndex);
};

const slidePrev = () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  slideToIndex(currentIndex);
};

// Event listeners
prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);

// Auto slide function
const autoSlide = () => {
  slideNext();
};

// Start auto sliding
let slideInterval = setInterval(autoSlide, 9000);

// Pause auto sliding when user interacts with controls
const pauseAutoSlide = () => {
  clearInterval(slideInterval);
  // Restart after a short delay
  setTimeout(() => {
    slideInterval = setInterval(autoSlide, 5000);
  }, 50000);
};

[prevBtn, nextBtn].forEach((btn) => {
  btn.addEventListener("click", pauseAutoSlide);
});

// Slide to the clicked item
centerItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    slideToIndex(index);
    pauseAutoSlide();
  });
});
