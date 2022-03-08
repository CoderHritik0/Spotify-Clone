console.log("welcome to Spotify");

//initilize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Ae Dil Hai Mushkil",
    filePath: "song/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Hamari Adhuri Kahani (Title Track)",
    filePath: "song/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Kabhi_Jo_Baadal_Barse",
    filePath: "song/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "jab-koi-baat-bigar-jaye",
    filePath: "song/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "kuch-tou-hai-tujse-raabta",
    filePath: "song/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "main-phir-bhi-tumko-chahunga",
    filePath: "song/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "sun-mere-humsafar",
    filePath: "song/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "tere-sang-yaara",
    filePath: "song/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "thodi-der-half-girlfriend-songs",
    filePath: "song/9.mp3",
    coverPath: "covers/9.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
//Listen to event
audioElement.addEventListener("timeupdate", () => {
  //Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 8) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
