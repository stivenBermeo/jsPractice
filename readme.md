## Currying
* [currying.js](https://github.com/Stiven-Bermeo/jsPractice/blob/dev/currying/currying.js) Is a branching example, it elaborates a very simple use case based on the "Currying example" [presented here](https://javascript.info/currying-partials)
  * This file is now able to export a function `curryLogByIII` it still can be executed regularly for the expected demonstration.
  * It also has now been implemented with ES6 particularities.
* [recursiveCurrying.js](https://github.com/Stiven-Bermeo/jsPractice/blob/dev/currying/recursiveCurrying.js) Another take on recursive currying, messy(requires a trigger for execution) but unlike the standard one this one doesn't require the specification of the core function's parameters (func.length [found here as well](https://javascript.info/currying-partials))
  1. The main function now doesn't console.log anymore instead it returns a value.
  1. The execution of the currying is changed to an empty parenthesis, this due to the previous change (#1).
  1. ES6 has been implemented
  1. This file still includes unnecesary code (a currying template) in order to make it exportable for further practices.

## Buffering
This came up in a NodeJs forum, a bit on decoding buffers, "it don't do much" but might be a future reference

## Random scripts
- [igMassUnfollow.js](https://github.com/Stiven-Bermeo/jsPractice/blob/dev/randomScripts/igMassUnfollow.js) When faced with a hacking problem in my IG acc, I did this script which allows to unfollow massively, it doesn't work due to ig policy in timing per request (For real, they don't allow for one to unfollow X amount of people even across 'long' stretches of time)