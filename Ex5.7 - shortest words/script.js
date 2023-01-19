const shortestWords = str => {
  let arr = str.split(' ');
  return arr.reduce((min, current) => {
    return Math.min(min, current.length);
  }, Infinity);
}