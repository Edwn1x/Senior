// JavaScript Document
// Function to toggle audio playback
  function toggleAudio() {
    var audio = document.getElementById('audio-player');
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
// Function to change audio volume
  function changeVolume() {
    var audio = document.getElementById('audio-player');
    var volumeSlider = document.querySelector('.volume-slider');
    audio.volume = volumeSlider.value / 100;
  }