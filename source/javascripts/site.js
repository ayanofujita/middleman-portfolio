// This is where it all goes :)
document.addEventListener('DOMContentLoaded', () => {

  // skill-cards
  gsap.registerPlugin(ScrollTrigger);
  // gsap.to("#scroll-text", {
  //   scrollTrigger: {
  //     trigger: "#skills",
  //     scrub: true
  //   },
  //   duration: 0.1, opacity: 0})
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      start: "center center",
      scrub: true,
      pin: "#skills"
    }
  })

  tl.from(".skill-card", {duration: 1, opacity: 0, y: 300, stagger: 1})

  // projects-header
  gsap.to(".projects-header", {
    scrollTrigger: {
      trigger: ".projects-header",
      start: "top center",
      endTrigger: ".projects",
      end: "top top",
      scrub: true,
      pin: true
    }
  });

  // project card stacking
  const cardsContainer = document.querySelector('.projects');
  const cards = document.querySelectorAll('.project-card-wrapper');

  cards.forEach((card, index) => {
    const offsetTop = 20 + index * 20;
    card.style.paddingTop = `${offsetTop}px`;

    if (index === cards.length - 1) return;

    const toScale = 1 - (cards.length - 1 - index) * 0.1;
    const cardInner = card.querySelector('.project-card');

    gsap.to(cardInner, {
      scale: toScale,
      scrollTrigger: {
        trigger: card,
        ease: "power2.out",
        start: "center center",
        end: "bottom center",
        scrub: true
      }
    });
  });
});
