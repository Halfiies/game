# Feedback

## Goals

1. A working Game - done

   - 100% It is interesting, you have certainly challenged yourself and you have added / contact / gravity to a game.

2. Practice using Git & Github-flow - not done

   - 110% 2 Branches, 10 commits

3. Apply what you are learning - done

   - SCSS, BEM , Classes etc.... So much good stuff

## Specification

- PSEUDOCODE - not sure

  - I can't see anything about how you broke it down, if you didn't write any try and break it down. In words it can help you focus on what you actually need to do.

- Github repo & README.MD - done

  - Repo has been set up perfect
  - Readme is technically done, I would suggest adding a couple of things.
    - Talk about the project, what was the brief? How long did it take?
    - How do you clone it and set it up?
    - The link to the live site?

- 25 Commits - not done

- Use click or key press event in JS - done

- Mobile first/Responsive - not done

- No tutorials - done

- Link to the project on your portfolio - not sure.

## Overall

This is a great desktop game. You have pushed yourself and even though you were warned about collision detection you have got it working, so kudo's to you. That if statement will give me nightmares though. It is a interesting take on the a platform game and I have to applaud you for sticking with and getting it to work.

You have applied most of what we have covered everything but testing :P. I think you could have got further if you avoided collision detection but you stuck with it and have something working so kudo's to you. I like how he sticks to the platforms could this be a feature? magnet man?

## To work on

There isn't much more to do, in my opinion these should be things to focus on if you have the time.

### House keeping

- camelCasing make sure you are using this convention `whichkey` should be `whichKey()` etc...
- remove console.log()
- const or let instead of var

### THAT IF STATEMENT

Holy smokes that is a huge statement and it needs to be refactored. I am going to suggest a solution. Let me know if it doesn't make any sense to you.

I have simplified the code below.

Your code;

```js
// 76 - 130
const collisionDetect = () => {
  let spriteDetails = sprite.getBoundingClientRect();
  if (
    (spriteDetails.x <= platOneDetails.x + platOneDetails.width &&
      spriteDetails.x + spriteDetails.width >= platOneDetails.x &&
      spriteDetails.y <= platOneDetails.y + platOneDetails.height &&
      spriteDetails.y + spriteDetails.height >= platOneDetails.y) ||
    (spriteDetails.x <= platTwoDetails.x + platTwoDetails.width &&
      spriteDetails.x + spriteDetails.width >= platTwoDetails.x &&
      spriteDetails.y <= platTwoDetails.y + platTwoDetails.height &&
      spriteDetails.y + spriteDetails.height >= platTwoDetails.y) ||
    (spriteDetails.x <= platThreeDetails.x + platThreeDetails.width &&
      spriteDetails.x + spriteDetails.width >= platThreeDetails.x &&
      spriteDetails.y <= platThreeDetails.y + platThreeDetails.height &&
      spriteDetails.y + spriteDetails.height >= platThreeDetails.y) ||
    (spriteDetails.x <= platFourDetails.x + platFourDetails.width &&
      spriteDetails.x + spriteDetails.width >= platFourDetails.x &&
      spriteDetails.y <= platFourDetails.y + platFourDetails.height &&
      spriteDetails.y + spriteDetails.height >= platFourDetails.y) ||
    (spriteDetails.x <= platFiveDetails.x + platFiveDetails.width &&
      spriteDetails.x + spriteDetails.width >= platFiveDetails.x &&
      spriteDetails.y <= platFiveDetails.y + platFiveDetails.height &&
      spriteDetails.y + spriteDetails.height >= platFiveDetails.y) ||
    (spriteDetails.x <= platSixDetails.x + platSixDetails.width &&
      spriteDetails.x + spriteDetails.width >= platSixDetails.x &&
      spriteDetails.y <= platSixDetails.y + platSixDetails.height &&
      spriteDetails.y + spriteDetails.height >= platSixDetails.y) ||
    (spriteDetails.x <= platSevenDetails.x + platSevenDetails.width &&
      spriteDetails.x + spriteDetails.width >= platSevenDetails.x &&
      spriteDetails.y <= platSevenDetails.y + platSevenDetails.height &&
      spriteDetails.y + spriteDetails.height >= platSevenDetails.y) ||
    (spriteDetails.x <= platEightDetails.x + platEightDetails.width &&
      spriteDetails.x + spriteDetails.width >= platEightDetails.x &&
      spriteDetails.y <= platEightDetails.y + platEightDetails.height &&
      spriteDetails.y + spriteDetails.height >= platEightDetails.y) ||
    (spriteDetails.x <= platNineDetails.x + platNineDetails.width &&
      spriteDetails.x + spriteDetails.width >= platNineDetails.x &&
      spriteDetails.y <= platNineDetails.y + platNineDetails.height &&
      spriteDetails.y + spriteDetails.height >= platNineDetails.y) ||
    (spriteDetails.x <= platTenDetails.x + platTenDetails.width &&
      spriteDetails.x + spriteDetails.width >= platTenDetails.x &&
      spriteDetails.y <= platTenDetails.y + platTenDetails.height &&
      spriteDetails.y + spriteDetails.height >= platTenDetails.y) ||
    (spriteDetails.x <= platElevenDetails.x + platElevenDetails.width &&
      spriteDetails.x + spriteDetails.width >= platElevenDetails.x &&
      spriteDetails.y <= platElevenDetails.y + platElevenDetails.height &&
      spriteDetails.y + spriteDetails.height >= platElevenDetails.y)
  ) {
    return true;
  } else if (
    spriteDetails.x <= goalDetails.x + goalDetails.width &&
    spriteDetails.x + spriteDetails.width >= goalDetails.x &&
    spriteDetails.y <= goalDetails.y + goalDetails.height &&
    spriteDetails.y + spriteDetails.height >= goalDetails.y
  ) {
    return alert("Congratulations");
  } else {
    return false;
  }
};
```

Could be

```js
const sprite = document.querySelector(".character");
const goalDetails = goal.querySelector(".goal").getBoundingClientRect();
// get all plats elements with class that starts with platform
const platforms = document.querySelectorAll('[class^="platform"]');
// array of platforms getBoundingClientRect()
const boundingPlatforms = Array.from(platforms).map(platform => platform.getBoundingClientRect());

const collisionDetect = (sprite, platforms, goal) => {
  const spriteDetails = sprite.getBoundingClientRect();
  // loop through and check each platform in the array
  const platformMatch = platforms.some(
    platform =>
      spriteDetails.x <= platform.x + platform.width &&
      spriteDetails.x + spriteDetails.width >= platform.x &&
      spriteDetails.y <= platform.y + platform.height &&
      spriteDetails.y + spriteDetails.height >= platform.y
  );
  console.log(platformMatch);
  if (
    spriteDetails.x <= goal.x + goal.width &&
    spriteDetails.x + spriteDetails.width >= goal.x &&
    spriteDetails.y <= goal.y + goal.height &&
    spriteDetails.y + spriteDetails.height >= goal.y
  ) {
    return alert("Congratulations");
  }
  return platformMatch;
};
```

I have got the sprite and the goal and have got all of the platforms in a array. This is so I can loop through them and preform the collision check on each of the platforms. I use the `.some()` iterator. This will return true if one of the items in the array matches the condition I am checking. It removes any individual checks by putting it in a array and looping though it. I have it working in your main.js have a look. 

Let me know if you want me to explain any of the points from the file.
---
