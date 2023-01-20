'use strict'
const findNextSquare = n => {
  if (!Number.isInteger(Math.sqrt(n))) {
    return -1;
  }

  let next = n;
  
  while (true) {
    if (Number.isInteger(Math.sqrt(++next))) {
      break;
    }
  }

  return next;
}

console.log(findNextSquare(114)); 