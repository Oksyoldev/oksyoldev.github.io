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

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const buyButtons = document.querySelectorAll('.buy-btn');

    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

$(document).ready(function(){       
    var mainOffset = $('.main').offset().top;
    var priceOffset = $('.price').offset().top;
    
    $(document).scroll(function() { 
        var scroll_pos = $(this).scrollTop();
        
        if(scroll_pos >= priceOffset) {
            $('.slideMenuNav').css('color', 'white');
        } else if(scroll_pos >= mainOffset) {
            $('.slideMenuNav').css('color', 'black');
        } else {
            $('.slideMenuNav').css('color', 'white');
        }
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
        poster: "images/7.jpg"
    },
    {
        id:'8',
        songName: `Null`,
        poster: "images/7.jpg"
    },
    {
        id:'9',
        songName: `Null`,
        poster: "images/7.jpg"
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
let secondTitle = document.getElementById('title_down_player');


Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    index = e.target.id;
    makeAllPlays();
    document.querySelector('.down_player').classList.remove('hidden');
    
    // Проверяем текущее состояние воспроизведения
    if (music.paused || music.src !== document.getElementById("audio" + index).src) {
      // Если на паузе или выбрана новая песня 

      // Устанавливаем классы кнопкам плей и паузы
      e.target.classList.remove('bi-play-circle');
      e.target.classList.add('bi-pause-circle');

      // Устанавливаем источник музыки и постер
      let audioId = "audio" + index;
      music.src = document.getElementById(audioId).src;
      poster_player.src = `images/${index}.jpg`;

      // Воспроизводим музыку
      music.play();

      // Устанавливаем название песни
      let song_title = songs.filter((ele) => ele.id == index);
      secondTitle.innerHTML = song_title[0].songName;

      // Устанавливаем классы для кнопки внизу
      downPlayer.classList.remove('bi-play-fill');
      downPlayer.classList.add('bi-pause-fill');
      wave.classList.add('active2');

      // Добавляем обработчик завершения воспроизведения
      music.addEventListener('ended', () => {
        downPlayer.classList.remove('bi-pause-fill');
        downPlayer.classList.add('bi-play-fill');
        wave.classList.remove('active2');
      });

    } else {
      // Если уже играет текущая песня, ставим на паузу

      music.pause();
      e.target.classList.remove('bi-pause-circle');
      e.target.classList.add('bi-play-circle');
      downPlayer.classList.remove('bi-pause-fill');
      downPlayer.classList.add('bi-play-fill');
      wave.classList.remove('active2');
    }
  });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
      sec = `0${sec}`
    }

    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
      sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', () =>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener(`ended`, ()=>{
    downPlayer.classList.remove('bi-pause-fill');
    downPlayer.classList.add('bi-play-fill');
    wave.classList.remove('active2')
})


document.addEventListener("DOMContentLoaded", function() {
  let vol = document.getElementById('vol');
  let vol_icon = document.getElementById('vol_icon');
  let vol_bar = document.querySelector('.vol_bar');
  let vol_dot = document.getElementById('vol_dot');

  // Установим начальное значение громкости и стили для ползунка и значка
  let vol_a = 50;
  vol.value = vol_a;
  vol_bar.style.width = vol_a + '%';
  vol_dot.style.left = vol_a + '%';

  if (vol_a == 0) {
    vol_icon.classList.remove('bi-volume-down-fill', 'bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-mute-fill');
  } else if (vol_a > 0 && vol_a <= 50) {
    vol_icon.classList.remove('bi-volume-mute-fill', 'bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
  } else {
    vol_icon.classList.remove('bi-volume-mute-fill', 'bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-up-fill');
  }

  // Установим громкость для элемента music
  music.volume = vol_a / 100;

  vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = vol_a + '%';
    vol_dot.style.left = vol_a + '%';
    music.volume = vol_a/100;
  });

  vol_icon.addEventListener('click', () => {
    if (vol.value != 0) {
      vol.value = 0; 
      vol.dispatchEvent(new Event('change'));
    }
  });
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('image-container')).length;
    }

     // Обновляем название трека
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    });

    song_title.forEach(ele => {
        let {songName} = ele;
        secondTitle.innerHTML = songName;
    });


    music.src = `beats/${index}.wav`;
    poster_player.src = `images/${index}.jpg`;
    music.play();

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
})

next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('image-container')).length) {
        index = 1;
    }

     // Обновляем название трека
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    });

    song_title.forEach(ele => {
        let {songName} = ele;
        secondTitle.innerHTML = songName;
    });

    music.src = `beats/${index}.wav`;
    poster_player.src = `images/${index}.jpg`;
    music.play();

    makeAllPlays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
})



