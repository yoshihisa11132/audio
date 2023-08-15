// Constants
const sounds = {
  laser: 'https://cdn.discordapp.com/attachments/1103429744457953444/1103429878432419924/YOASOBI_Official_Music_Video.mp3',
  dog: 'http://www.freesound.org/data/previews/327/327666_5632380-lq.mp3',
  cow: 'http://www.freesound.org/data/previews/58/58277_634166-lq.mp3',
  siren: 'http://www.freesound.org/data/previews/336/336899_4939433-lq.mp3'
};

// Cached DOM Elements
const player = new Audio();
const bgPlayer = document.getElementById('bg-player');
const bgCheckbox = document.querySelector('input[type="checkbox"]');

// Adjust volume of background music to 50%
bgPlayer.volume = .3;

// Event Listeners
document.getElementById('play-btn').addEventListener('click', handlePlaySound);
bgCheckbox.addEventListener('change', handleBgChanged);

// Functions
function handlePlaySound() {
  // Use the CSS :checked pseudoclass to select the selected radio button
  const selSoundInp = document.querySelector('input[name="sound"]:checked');
  playSound(selSoundInp.value);
}

function playSound(name) {
  player.src = sounds[name];
  player.play();
}

function handleBgChanged() {
  bgCheckbox.checked ? bgPlayer.play() : bgPlayer.pause();
}

