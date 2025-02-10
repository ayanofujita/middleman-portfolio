// This is where it all goes :)
document.addEventListener('DOMContentLoaded', () => {

  // GSAP Animations!
  gsap.registerPlugin(ScrollTrigger);
  gsap.to("#scroll-text", {
    scrollTrigger: {
      trigger: "#skills",
      scrub: true
    },
    duration: 0.1, opacity: 0})
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#skills",
      start: "center center",
      scrub: true,
      pin: "#skills"
    }
  })

  tl.from(".skill-card", {duration: 1, opacity: 0, y: 300, stagger: 1})
});
