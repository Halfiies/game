

//platformer

// BASIC CONTROLS 


// player character must exist.
// sprite?
// map must exist, floors and gaps, objects
const sprite = document.querySelector(".character")
const platform1 = document.querySelector(".platform__one")
const platform2 = document.querySelector(".platform__one")
sprite.style.bottom = "30px"
sprite.style.left ="0px"
// player character must move with input

// left, right, jump

const whichkey = (logkey) => { 
    if (logkey.code === 'ArrowUp' ){
     let heightString = sprite.style.bottom.replace('px', '')
     var height = parseInt(heightString, 10)
     sprite.style.bottom = `${height + 30}px`
    }
    if (logkey.code === "ArrowLeft"){
     let leftString = sprite.style.left.replace('px', '')
     var left = parseInt(leftString, 10)
     sprite.style.left = `${left - 10}px`
    }
    if (logkey.code === "ArrowRight"){
     let leftString = sprite.style.left.replace('px', '')
     var left = parseInt(leftString, 10)
     sprite.style.left = `${left + 10}px`
   } else {}
   };
const gravityEffects = () => {
   let heightString = sprite.style.bottom.replace('px', '')
   var height = parseInt(heightString, 10)
   sprite.style.bottom = `${height - 1}px`
};  
   document.addEventListener("keydown", whichkey);

let gameInterval = setInterval(gravityEffects, 50)
