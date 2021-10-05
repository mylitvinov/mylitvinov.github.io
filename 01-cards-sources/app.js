function slidesPlagin(activeSlide) {
  const slides = document.querySelectorAll(".slide");
  clearActiveClasses();
  slides[activeSlide].classList.add("active");

  for (const slide of slides) {
    slide.addEventListener("click", () => {
      clearActiveClasses();
      slide.classList.add("active");
      clearInterval(setSlidePlagin);
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }
}

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const setSlidePlagin = setInterval(() => {
  slidesPlagin(getRandomNumber(0, 4));
}, 5000);
