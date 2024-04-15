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

const playBtns = document.querySelectorAll('.play-btn');
const playPauseBtn = document.querySelector('.play-pause-btn');
const audio = document.getElementById('audio');
 const volumeSlider = document.querySelector('.volume-slider');

document.addEventListener('DOMContentLoaded', function() {
  const playBtns = document.querySelectorAll('.play-btn');

  let currentAudio = null;
  let currentPlayBtn = null;

  playBtns.forEach(playBtn => {
    playBtn.addEventListener('click', function() {
      const audio = this.parentElement.querySelector('audio');

      if (audio !== currentAudio) {
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0; // Сброс времени трека до начала
          currentPlayBtn.querySelector('.bi-pause-fill').style.display = 'none';
          currentPlayBtn.querySelector('.bi-play-fill').style.display = 'inline-block';
        }

        currentAudio = audio;
        currentPlayBtn = this;
        currentPlayBtn.isPlay = false;
      }

      if (audio.paused) {
        audio.play();
        this.isPlay = true;
        this.querySelector('.bi-play-fill').style.display = 'none';
        this.querySelector('.bi-pause-fill').style.display = 'inline-block';
      } else {
        audio.pause();
        this.isPlay = false;
        this.querySelector('.bi-pause-fill').style.display = 'none';
        this.querySelector('.bi-play-fill').style.display = 'inline-block';
      }
    });
  });
});






