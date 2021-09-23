

//platformer

// BASIC CONTROLS 


// player character must exist.
// sprite?
// map must exist, floors and gaps, objects
const sprite = document.querySelector(".character")
const platform1 = document.querySelector(".platform__one")
const platform2 = document.querySelector(".platform__one")
const platOneDetails = platform1.getBoundingClientRect();
console.log(platOneDetails)
sprite.style.bottom = "30px"
sprite.style.left ="0px"

// player character must move with input

// left, right, jump

const whichkey = (logkey) => { 
    if (logkey.code === 'ArrowUp' && parseInt(sprite.style.bottom)<=420){
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
   if (parseInt(sprite.style.bottom)>= 1) {
      let heightString = sprite.style.bottom.replace('px', '')
      var height = parseInt(heightString, 10)
      sprite.style.bottom = `${height - 1}px`
   } else {}
};  
document.addEventListener("keydown", whichkey);
let gameInterval = setInterval(gravityEffects, 50)

