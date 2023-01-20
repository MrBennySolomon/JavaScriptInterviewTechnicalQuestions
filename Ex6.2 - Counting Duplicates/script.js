
const numberOfDuplicates = str => {
  const countObj = str.split('').reduce((accum, curr) => {
    if (accum.hasOwnProperty(curr.toLowerCase())) {
      accum[curr.toLowerCase()] = accum[curr.toLowerCase()] + 1;
    }else {
      accum[curr.toLowerCase()] = 1;
    }
    return accum;
  }, {});
  
  let counter = 0;
  for (const val of Object.values(countObj)) {
    if (val > 1) {
      counter++;
    }
  }
  return counter;
}