let currentSlide = 0;
const slides = document.querySelectorAll('.coh-inline-element');
const container = document.querySelector('.image-container');
const totalSlides = slides.length;

function showSlide(index) {
  const offset = -index * 100;
  container.style.transform = `translateX(${offset}%)`;
}

showSlide(0);

document.querySelector('.carousel-next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});
