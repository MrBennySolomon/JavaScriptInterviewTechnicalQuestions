const isIsogram = str => {
  if (str.length === 0 || str.length === 1) return true;
  const countObj = str.toLowerCase().split('').reduce((accum, curr) => {
    if (accum.hasOwnProperty(curr)) {
      accum[curr] = accum[curr] + 1;
    }else {
      accum[curr] = 1;
    }
    return accum;
  }, {});
  for (const key in countObj) {
    if (countObj[key] > 1) {
      return false;
    }
  }
  return true;
}