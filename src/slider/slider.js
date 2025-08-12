const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnIntraction: false,
    },
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      el: '.swiper-pagination2',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });