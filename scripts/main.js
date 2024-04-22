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

const songs = [
    {
        id:'1',
        songName: `Elastic`,
        poster: "images/1.jpg"
    },
    {
        id:'2',
        songName: `Soul`,
        poster: "images/2.jpg"
    },
    {
        id:'3',
        songName: `Teko`,
        poster: "images/3.jpg"
    },
    {
        id:'4',
        songName: `Idly`,
        poster: "images/4.jpg"
    },
    {
        id:'5',
        songName: `Woooh`,
        poster: "images/5.jpg"
    },
    {
        id:'6',
        songName: `Iop`,
        poster: "images/6.jpg"
    },
    {
        id:'7',
        songName: `Null`,
        poster: "images/null.jpg"
    },
    {
        id:'8',
        songName: `Null`,
        poster: "images/null.jpg"
    },
    {
        id:'9',
        songName: `Null`,
        poster: "images/null.jpg"
    }
];

Array.from(document.getElementsByClassName('image-container')).forEach((element, i)=>{
  element.querySelector('img').src = songs[i].poster;
  element.getElementsByTagName('h2').innerHTML = songs[i].songName;
});



let downPlayer = document.getElementById('downPlayer');
let music = new Audio();
let wave = document.getElementsByClassName('wave')[0];

downPlayer.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    downPlayer.classList.remove('bi-play-fill');
    downPlayer.classList.add('bi-pause-fill');
    wave.classList.add('active2')
  } else {
    music.pause();
    downPlayer.classList.remove('bi-pause-fill');
    downPlayer.classList.add('bi-play-fill');
    wave.classList.remove('active2')
  }
});



const makeAllPlays = () =>{
  Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
      element.classList.add('bi-play-circle');
      element.classList.remove('bi-pause-circle');
  })
}


let index = 0;
let poster_player = document.getElementById('poster_player');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove('bi-play-circle');
    e.target.classList.add('bi-pause-circle');
    let audioId = "audio" + index;
    music.src = document.getElementById(audioId).src;
    poster_player.src = `images/${index}.jpg`;
    music.play();

    downPlayer.classList.remove('bi-play-fill');
    downPlayer.classList.add('bi-pause-fill');
    wave.classList.add('active2')
    music.addEventListener(`ended`,() => {
        downPlayer.classList.remove('bi-pause-fill');
        downPlayer.classList.add('bi-play-fill');
        wave.classList.remove('active2')

    })
  });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
      sec = `0${sec}`
    }

    currentEnd.innerText = `${min}:${sec}`;
})


