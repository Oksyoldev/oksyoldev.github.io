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
const playPauseBtn = document.querySelector('.play-pause-btn');
const audio = document.getElementById('audio');
let isPlaying = false;

playBtn.addEventListener('click', function() {
  if (!isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
  togglePlayButtons();
});

playPauseBtn.addEventListener('click', function() {
  if (!isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
  togglePlayButtons();
});

function togglePlayButtons() {
  isPlaying = !isPlaying;
  playBtn.querySelector('.bi-play-fill').style.display = isPlaying ? 'none' : 'inline-block';
  playBtn.querySelector('.bi-pause-fill').style.display = isPlaying ? 'inline-block' : 'none';
  playPauseBtn.querySelector('.bi-play-fill').style.display = isPlaying ? 'none' : 'inline-block';
  playPauseBtn.querySelector('.bi-pause-fill').style.display = isPlaying ? 'inline-block' : 'none';
}




