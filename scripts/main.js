document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.icon').forEach(function(icon) {
    icon.addEventListener('click', function() {
      let url = icon.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
});
const playBtn = document.querySelector('.play-btn');
const audio = document.getElementById('audio');

playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playBtn.querySelector('.bi-play-fill').style.display = 'none';
    playBtn.querySelector('.bi-pause-fill').style.display = 'inline-block';
  } else {
    audio.pause();
    playBtn.querySelector('.bi-play-fill').style.display = 'inline-block';
    playBtn.querySelector('.bi-pause-fill').style.display = 'none';
  }
});
