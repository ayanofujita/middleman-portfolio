// This is where it all goes :)
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (e) => {
    let images100 = document.querySelectorAll('.logo-container img.opacity-100:not(:first-child)')
    const images75 = document.querySelectorAll('.logo-container img.opacity-75')
    const images50 = document.querySelectorAll('.logo-container img.opacity-50')

    const windowCenterX = window.innerWidth / 2;
    const windowCenterY = window.innerHeight / 2;

    let aws = document.querySelector('.logo-container img.opacity-100:first-child')
    const moveX = (e.clientX - windowCenterX) / 80;
    const moveY = (e.clientY - windowCenterY) / 80;
    aws.style.transform = `translate(${moveX}px, ${moveY}px)`;

    images100.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 5;
      const moveY = (e.clientY - windowCenterY) / 5;
      img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })

    images75.forEach((img) => {
      const moveX = (e.clientX - windowCenterX) / 30;
      const moveY = (e.clientY - windowCenterY) / 30;
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
  //   const logos = document.querySelectorAll('.logo-container img');
  //   logos.forEach((logo) => {
  //     logo.classList.toggle('d-none');
  //   })
  //   const logoContainer = document.querySelector('.logo-container .img-container');
  //   logoContainer.classList.toggle('d-none');
  // });
});
