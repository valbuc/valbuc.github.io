function initCarousel() {
  const carousel = document.querySelector('.portfolio-stack');
  if (!carousel) return;

  let lastCenterCard = null;
  let ticking = false;

  function updateCarouselFocus() {
    const cards = document.querySelectorAll('.carousel-card');
    const carouselRect = carousel.getBoundingClientRect();
    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const carouselCenter = carouselRect.left + carouselRect.width / 2;
      const distance = Math.abs(carouselCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    if (closestCard !== lastCenterCard) {
      cards.forEach(card => {
        card.classList.remove('carousel-center', 'carousel-side');
      });
      cards.forEach(card => {
        if (card === closestCard) {
          card.classList.add('carousel-center');
        } else {
          card.classList.add('carousel-side');
        }
      });
      lastCenterCard = closestCard;
    }
  }

  function scrollToCard(targetCard) {
    const cardRect = targetCard.getBoundingClientRect();
    const carouselRect = carousel.getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    const scrollAmount = cardCenter - carouselCenter;
    
    carousel.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  // Add click handlers for all cards
  const cards = document.querySelectorAll('.carousel-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Only handle clicks on side cards
      if (card.classList.contains('carousel-side')) {
        e.preventDefault();
        scrollToCard(card);
      }
    });
  });

  carousel.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateCarouselFocus();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial call
  updateCarouselFocus();
}

// Initialize carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel); 