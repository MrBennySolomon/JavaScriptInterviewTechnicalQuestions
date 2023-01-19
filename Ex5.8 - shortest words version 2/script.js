const longestWords = str => {

  const arr = str.split(' ');

  arr.sort((a, b) => {
    return a.length - b.length;
  });
  const result = [];
  const long = arr[arr.length - 1].length;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length === long) {
      result.push(arr[i]);
    }
  }
  return result;
}