// Hamburger Menu logic

    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".nav");
  
    hamburgerMenu.addEventListener("click", () => {
      nav.classList.toggle("active");
     
      if (nav.classList.contains("active")) {
        document.body.style.overflowY = "hidden";
      }   
  });
  

   // Remove the 'active' class from navbar elements above 657px
   function handleViewportWidth() {
    const viewportWidth = window.innerWidth;
   
    if (viewportWidth >= 576) {
      nav.classList.remove("active");
    }
  }
  
  window.addEventListener("resize", handleViewportWidth);
  handleViewportWidth();
  

// Skills icons mechanism
const skillNames = document.querySelectorAll(".skill");
const skillIcons = document.querySelectorAll(".skill-bg");

for(let i = 0; i < skillNames.length; i++){
  skillNames[i].addEventListener("mouseover", () =>{
    skillIcons[i].classList.add("active");
  });
  skillNames[i].addEventListener("mouseout", () => {
    skillIcons[i].classList.remove("active");
  });
}



// particles.js
particlesJS.load('particles-js', 'assets/particles.js/particlesjs-config.json');

// swiper.js
const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,
  keyboard: {
    enabled: true,
  },
});

// navigation + swiper
const navLinks = document.querySelectorAll(".nav-link");
swiper.on('slideChangeTransitionStart', () =>{
  navLinks[swiper.previousIndex].classList.remove("active");
  navLinks[swiper.activeIndex].classList.add("active");
})

for(let i  = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", () =>{
    swiper.slideTo(i, 1000, true);
    setTimeout(function() {
      nav.classList.remove("active");
    }, 150);
  })
}

// .squares animation with Observer API
const intersectionCallback = function(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('active');
      } else {
          entry.target.classList.remove('active');
      }
  });
};

const observerOptions = {
  root: null,
  threshold: 0.5
};

const intersectionObserver = new IntersectionObserver(intersectionCallback, observerOptions);

const squares = document.querySelectorAll(".square");
squares.forEach(square => {
  intersectionObserver.observe(square);
});