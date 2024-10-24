// This is where it all goes :)
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (e) => {
    const images100 = document.querySelectorAll('#banner img.opacity-100')
    const images75 = document.querySelectorAll('#banner img.opacity-75')
    const images25 = document.querySelectorAll('#banner img.opacity-25')

    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    images100.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 10;
      const moveY = (e.clientY - windowCenterY) / 10;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })

    images75.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 25;
      const moveY = (e.clientY - windowCenterY) / 25;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })

    images25.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 70;
      const moveY = (e.clientY - windowCenterY) / 70;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })
  });

  const skillButton = document.getElementById('skills-btn');
  skillButton.addEventListener('click', () => {
    const logos = document.querySelectorAll('#banner img');
    logos.forEach((logo) => {
      logo.classList.toggle('d-none');
    })
    const logoContainer = document.querySelector('#banner .img-container');
    logoContainer.classList.toggle('d-none');
  });
});
