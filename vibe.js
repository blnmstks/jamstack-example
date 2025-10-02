const vibes = [
  'and you are awesome!',
  'keep up the great work!',
  'you are doing fantastic!',
  'believe in yourself!',
  'you can achieve anything!',
  'stay positive and strong!',
  'you are a star!',
  'keep shining bright!',
  'you are unstoppable!',
  'embrace your uniqueness!'
];

let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);