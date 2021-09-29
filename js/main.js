

//platformer

// BASIC CONTROLS 


// player character must exist.
// sprite?
// map must exist, floors and gaps, objects
const sprite = document.querySelector(".character")
const gameArea =document.querySelector(".gameArea")
const platOne = document.querySelector(".platform__One")
const platOneDetails = platOne.getBoundingClientRect()
const platTwo = document.querySelector(".platform__Two")
const platTwoDetails = platTwo.getBoundingClientRect()
const platThree = document.querySelector(".platform__Three")
const platThreeDetails = platThree.getBoundingClientRect()
const platFour = document.querySelector(".platform__Four")
const platFourDetails = platFour.getBoundingClientRect()
const platFive = document.querySelector(".platform__Five")
const platFiveDetails = platFive.getBoundingClientRect()
const platSix = document.querySelector(".platform__Six")
const platSixDetails = platSix.getBoundingClientRect()
const platSeven = document.querySelector(".platform__Seven")
const platSevenDetails = platSeven.getBoundingClientRect()
const platEight = document.querySelector(".platform__Eight")
const platEightDetails = platEight.getBoundingClientRect()
const platNine = document.querySelector(".platform__Nine")
const platNineDetails = platNine.getBoundingClientRect()
const platTen = document.querySelector(".platform__Ten")
const platTenDetails = platTen.getBoundingClientRect()
const platEleven = document.querySelector(".platform__Eleven")
const platElevenDetails = platEleven.getBoundingClientRect()
const platTwelve = document.querySelector(".platform__Twelve")
const platTwelveDetails = platTwelve.getBoundingClientRect()
const platThirteen = document.querySelector(".platform__Thirteen")
const platThirteenDetails = platThirteen.getBoundingClientRect()
const goal = document.querySelector(".goal")
const goalDetails = goal.getBoundingClientRect()

console.log(platFiveDetails)
console.log(platSixDetails)
sprite.style.bottom = "30px"
sprite.style.left ="0px"
// level array
// level object { sprite position, end position, platforms array}
// platform array [platformoneobject, platformtwoobject]

// class platform {
//    constructor (height, width, bottom, left) {
//       this.height = height,
//       this.width = width,
//       this.bottom = bottom,
//       this.left = left
//    }
// }
// let platforms = []
// platforms [0] = new platform(10, 200, 20, 0);
// platforms [1] = new platform(10, 100, 60, 300);
// platforms [2] = new platform(10, 100, 60, 10);
// platforms [3] = new platform(10, 300, 80, 10);
// platforms [4] = new platform(10, 100, 60, 10);
// console.log(platforms)
// player character must move with input
// platforms.forEach(platform => {
//    const platformHTML = document.createElement('div')
//    gameArea.appendChild(platformHTML)
//    platformHTML.setAttribute("class", "platform")
//    platformHTML.style.height = platform.height + "px";
//    platformHTML.style.width = platform.width  + "px";
//    platformHTML.style.bottom = platform.bottom  + "px";
//    platformHTML.style.left = platform.left + "px";
// });

 const collisionDetect = () => {
   let spriteDetails = sprite.getBoundingClientRect();
   if (spriteDetails.x <= platOneDetails.x + platOneDetails.width &&
      spriteDetails.x + spriteDetails.width >= platOneDetails.x &&
      spriteDetails.y <= platOneDetails.y + platOneDetails.height &&
      spriteDetails.y + spriteDetails.height >= platOneDetails.y ||
      spriteDetails.x <= platTwoDetails.x + platTwoDetails.width &&
      spriteDetails.x + spriteDetails.width >= platTwoDetails.x &&
      spriteDetails.y <= platTwoDetails.y + platTwoDetails.height &&
      spriteDetails.y + spriteDetails.height >= platTwoDetails.y ||
      spriteDetails.x <= platThreeDetails.x + platThreeDetails.width &&
      spriteDetails.x + spriteDetails.width >= platThreeDetails.x &&
      spriteDetails.y <= platThreeDetails.y + platThreeDetails.height &&
      spriteDetails.y + spriteDetails.height >= platThreeDetails.y ||
      spriteDetails.x <= platFourDetails.x + platFourDetails.width &&
      spriteDetails.x + spriteDetails.width >= platFourDetails.x &&
      spriteDetails.y <= platFourDetails.y + platFourDetails.height &&
      spriteDetails.y + spriteDetails.height >= platFourDetails.y ||
      spriteDetails.x <= platFiveDetails .x + platFiveDetails .width &&
      spriteDetails.x + spriteDetails.width >= platFiveDetails .x &&
      spriteDetails.y <= platFiveDetails .y + platFiveDetails .height &&
      spriteDetails.y + spriteDetails.height >= platFiveDetails .y||
      spriteDetails.x <= platSixDetails.x + platSixDetails.width &&
      spriteDetails.x + spriteDetails.width >= platSixDetails.x &&
      spriteDetails.y <= platSixDetails.y + platSixDetails.height &&
      spriteDetails.y + spriteDetails.height >= platSixDetails.y||
      spriteDetails.x <= platSevenDetails.x + platSevenDetails.width &&
      spriteDetails.x + spriteDetails.width >= platSevenDetails.x &&
      spriteDetails.y <= platSevenDetails.y + platSevenDetails.height &&
      spriteDetails.y + spriteDetails.height >= platSevenDetails.y||
      spriteDetails.x <= platEightDetails.x + platEightDetails.width &&
      spriteDetails.x + spriteDetails.width >= platEightDetails.x &&
      spriteDetails.y <= platEightDetails.y + platEightDetails.height &&
      spriteDetails.y + spriteDetails.height >= platEightDetails.y||
      spriteDetails.x <= platNineDetails.x + platNineDetails.width &&
      spriteDetails.x + spriteDetails.width >= platNineDetails.x &&
      spriteDetails.y <= platNineDetails.y + platNineDetails.height &&
      spriteDetails.y + spriteDetails.height >= platNineDetails.y||
      spriteDetails.x <= platTenDetails.x + platTenDetails.width &&
      spriteDetails.x + spriteDetails.width >= platTenDetails.x &&
      spriteDetails.y <= platTenDetails.y + platTenDetails.height &&
      spriteDetails.y + spriteDetails.height >= platTenDetails.y||
      spriteDetails.x <= platElevenDetails.x + platElevenDetails.width &&
      spriteDetails.x + spriteDetails.width >= platElevenDetails.x &&
      spriteDetails.y <= platElevenDetails.y + platElevenDetails.height &&
      spriteDetails.y + spriteDetails.height >= platElevenDetails.y)
      {return true}
      else if (spriteDetails.x <= goalDetails.x + goalDetails.width &&
         spriteDetails.x + spriteDetails.width >= goalDetails.x &&
         spriteDetails.y <= goalDetails.y + goalDetails.height &&
         spriteDetails.y + spriteDetails.height >= goalDetails.y)
      {return alert ("Congratulations") }
      else
      {return false}
   }

// platforms.forEach(platform => {
      // for (let i=0; i < platforms.length; i++){
      //    if ((505-spriteDetails.bottom) === (platforms[i].bottom + 10)){
      //             console.log("true")
      //             return true
      //          } else {
      //             console.log("false")
      //             return false
   //    console.log(spriteDetails.bottom)
   //    if ((505-spriteDetails.bottom) === (platform.bottom + 10)){
   //       console.log("true")
   //       return true
   //    } else {
   //       console.log("false")
   //       return false
   //    }
   // });
   //    505 - spriteDetails.bottom = platformsHTML.bottom +10
   //    spriteDetails.left - 5 = platformsHTML.left





const whichkey = (logkey) => { 
    if (logkey.code === 'ArrowUp' && parseInt(sprite.style.bottom)<=420 && collisionDetect() === true){
     let heightString = sprite.style.bottom.replace('px', '')
     var height = parseInt(heightString, 10)
     sprite.style.bottom = `${height + 50}px`
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
      sprite.style.bottom = `${height - 2}px`
   } else {}
};  
document.addEventListener("keydown", whichkey);
let gameInterval = setInterval(gravityEffects, 50)


