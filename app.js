const button = document.querySelector(".video-btn");
const video = document.querySelector("#youtube-video");

button.addEventListener('click', event => {
    video.classList.toggle('disable');
  });