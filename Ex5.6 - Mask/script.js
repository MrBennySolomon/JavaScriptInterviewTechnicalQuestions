const maskify = str => {
  if (str.length <= 4) {
    return str;
  }

  const arr = str.split('');

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 4) {
      arr[i] = '#';
    }
  }
  return arr.join('');
}