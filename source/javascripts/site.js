// This is where it all goes :)
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (e) => {
    const images100 = document.querySelectorAll('#banner img.opacity-100')
    const images75 = document.querySelectorAll('#banner img.opacity-75')
    const images50 = document.querySelectorAll('#banner img.opacity-50')

    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    images100.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 10;
      const moveY = (e.clientY - windowCenterY) / 10;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })

    images75.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 50;
      const moveY = (e.clientY - windowCenterY) / 50;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })

    images50.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 100;
      const moveY = (e.clientY - windowCenterY) / 100;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })
  });

  // const skillButton = document.getElementById('skills-btn');
  // skillButton.addEventListener('click', () => {
  //   const logos = document.querySelectorAll('#banner img');
  //   logos.forEach((logo) => {
  //     logo.classList.toggle('d-none');
  //   })
  //   const logoContainer = document.querySelector('#banner .img-container');
  //   logoContainer.classList.toggle('d-none');
  // });
});
