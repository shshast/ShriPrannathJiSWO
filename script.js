function submitForm() {
    alert("Thank you for reaching out. We'll get back to you soon.");
    return false; // prevent actual form submission
}

const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.arrow.right');
  const prevBtn = document.querySelector('.arrow.left');
  let currentIndex = 0;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });

  // Set widths on load
  window.addEventListener('load', updateSlidePosition);
  window.addEventListener('resize', updateSlidePosition);