

//platformer

// BASIC CONTROLS 


// player character must exist.
// sprite?
// map must exist, floors and gaps, objects
const sprite = document.querySelector(".character")
const gameArea =document.querySelector(".gameArea")
sprite.style.bottom = "30px"
sprite.style.left ="0px"
// level array
// level object { sprite position, end position, platforms array}
// platform array [platformoneobject, platformtwoobject]

class platform {
   constructor (height, width, bottom, left) {
      this.height = height,
      this.width = width,
      this.bottom = bottom,
      this.left = left
   }
}
let platforms = []
platforms [0] = new platform(10, 200, 20, 0);
platforms [1] = new platform(10, 100, 60, 300);
platforms [2] = new platform(10, 100, 60, 10);
platforms [3] = new platform(10, 300, 80, 10);
platforms [4] = new platform(10, 100, 60, 10);
console.log(platforms)
// player character must move with input
platforms.forEach(platform => {
   const platformHTML = document.createElement('div')
   gameArea.appendChild(platformHTML)
   platformHTML.setAttribute("class", "platform")
   platformHTML.style.height = platform.height + "px";
   platformHTML.style.width = platform.width  + "px";
   platformHTML.style.bottom = platform.bottom  + "px";
   platformHTML.style.left = platform.left + "px";
});

 const collisionDetect = () => {
   let spriteDetails = sprite.getBoundingClientRect();
   platforms.forEach(platform => {
      console.log(spriteDetails.bottom)
      if ((505-spriteDetails.bottom) === (platform.bottom + 10)){
         console.log("true")
         return true
      } else {
         console.log("false")
         return false
      }

   });
//    505 - spriteDetails.bottom = platformsHTML.bottom +10
//    spriteDetails.left - 5 = platformsHTML.left
//  if (spriteDetails.x <= platOneDetails.x + platOneDetails.width &&
//    spriteDetails.x + spriteDetails.width >= platOneDetails.x &&
//    spriteDetails.y <= platOneDetails.y + platOneDetails.height &&
//    spriteDetails.y + spriteDetails.height >= platOneDetails.y)
//    {return true}
//    else {return false}
};


const whichkey = (logkey) => { 
    if (logkey.code === 'ArrowUp' && parseInt(sprite.style.bottom)<=420 && collisionDetect() === true){
     let heightString = sprite.style.bottom.replace('px', '')
     var height = parseInt(heightString, 10)
     sprite.style.bottom = `${height + 30}px`
    }
    if (logkey.code === "ArrowLeft" && parseInt(sprite.style.left)>= 5){
     let leftString = sprite.style.left.replace('px', '')
     var left = parseInt(leftString, 10)
     sprite.style.left = `${left - 10}px`
    }
    if (logkey.code === "ArrowRight" && parseInt(sprite.style.left)<=460){
     let leftString = sprite.style.left.replace('px', '')
     var left = parseInt(leftString, 10)
     sprite.style.left = `${left + 10}px`
   } else {}
};
const gravityEffects = () => { 
   if (parseInt(sprite.style.bottom)>= 1 && collisionDetect() === false) {
      let heightString = sprite.style.bottom.replace('px', '')
      var height = parseInt(heightString, 10)
      sprite.style.bottom = `${height - 1}px`
   } else {}
};  
document.addEventListener("keydown", whichkey);
let gameInterval = setInterval(gravityEffects, 50)

