// space invaders

//platformer

// BASIC CONTROLS 
// canvas
const canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");
const drawImage = (url) => {
  const image = new Image();
  image.src = url;
  image.onload = () => {
     ctx.drawImage(image, 0, 0)
  }
}

drawImage("./resources/images/sprite.jpg")

// player character must exist.
// sprite?
// map must exist, floors and gaps, objects
//canvas can draw?

// player character must move with input
// left, right, jump
//player must fall, gravity

// enemies must exist