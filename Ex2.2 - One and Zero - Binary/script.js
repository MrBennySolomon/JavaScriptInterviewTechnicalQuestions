const oneAndZero = arr => {
  let result = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 1 ) {
      result += Math.pow(2, arr.length - i - 1);
    }
  }

  return result
}