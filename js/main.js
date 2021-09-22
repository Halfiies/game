// space invaders

//platformer

// BASIC CONTROLS 
// canvas


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
document.addEventListener("keydown", function(logkey) {
 console.log(logkey.code)
 if (logkey.code === 'ArrowUp' ){
  let heightString = sprite.style.bottom.replace('px', '')
  console.log(heightString);
  var height = parseInt(heightString, 10)
  console.log(height)
  sprite.style.bottom = `${height + 10}px`
 }
 if (logkey.code === "ArrowDown"){
    let heightString = sprite.style.bottom.replace('px', '')
    var height = parseInt(heightString, 10)
    sprite.style.bottom = `${height - 10}px`
 }
 if (logkey.code === "ArrowLeft"){
  let leftString = sprite.style.left.replace('px', '')
  console.log(leftString)
  var left = parseInt(leftString, 10)
  console.log(left)
  sprite.style.left = `${left - 10}px`
 }
 if (logkey.code === "ArrowRight"){
  let leftString = sprite.style.left.replace('px', '')
  var left = parseInt(leftString, 10)
  sprite.style.left = `${left + 10}px`
} else {}
});
