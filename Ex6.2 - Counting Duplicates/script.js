//NOT FINISHED YET
const numberOfDuplicates = str => {
  const countObj = str.split('').reduce((accum, curr) => {
    if (accum.hasOwnProperty(curr)) {
      accum[curr] = accum[curr] + 1;
    }else {
      accum[curr] = 1;
    }
    return accum;
  }, {});
  return countObj;
}