// Get references to DOM elements
const wrapper = document.querySelector(".sliderwrapper");
const sliderRight = document.querySelector(".moveslright");
const centerItems = document.querySelectorAll(".centeritem");
// const images = document.querySelectorAll('img[data-src]');
// const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

// Slide to the clicked center item
centerItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});

// Preload images when they enter the viewport
// function preloadImage(img) {
//   const src = img.getAttribute('data-src');
//   if (src) {
//     img.src = src;
//     img.removeAttribute('data-src');
//   }
// }

// const imgObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       preloadImage(entry.target);
//       imgObserver.unobserve(entry.target);
//     }
//   });
// });

// images.forEach((img) => {
//   imgObserver.observe(img);
// });

// Function to check if an element is in the viewport
// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// Function to apply the animation class when an element is in view
// function animateOnScroll() {
//   animateOnScrollElements.forEach(element => {
//     if (isElementInViewport(element)) {
//       element.classList.add('text-fade-in');
//     }
//   });
// }

// Initial animation check on page load
// animateOnScroll();

// Attach scroll event listener to trigger animation on scroll
// window.addEventListener('scroll', animateOnScroll);
