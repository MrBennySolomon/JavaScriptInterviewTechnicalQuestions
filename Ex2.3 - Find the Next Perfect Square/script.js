const findNextSquare = n => {
  if (!Number.isInteger(Math.sqrt(n))) {
    return -1;
  }

  let next = n;
  let flag = true;
  
  while (flag) {
    if (Math.sqrt(++next) % 2 === 0) {
      break;
    }
  }

  return next;
}