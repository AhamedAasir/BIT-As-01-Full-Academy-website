//video slow down
  const video = document.querySelector('.video-bg');
  video.playbackRate = 0.3; // Slow down the video to 50% of its normal speed
//nav bar sticky

 // Add event listener for scrolling
 window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) { // Adjust scroll threshold as needed
    navbar.classList.add('scrolled'); // Make navbar visible
  } else {
    navbar.classList.remove('scrolled'); // Hide navbar again
  }
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const coursesContainer = document.querySelector('.courses-container');

prevBtn.addEventListener('click', () => {
  coursesContainer.scrollBy({
    left: -300, // Scroll left by 300px
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  coursesContainer.scrollBy({
    left: 300, // Scroll right by 300px
    behavior: 'smooth'
  });
});

// Register
// Select the button by its ID
let btnClick = document.getElementById("Regbutton");

// Add click event listener to redirect to register.html
btnClick.addEventListener("click", () => {
  window.location.href = "register.html";
});

