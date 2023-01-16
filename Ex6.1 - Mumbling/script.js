const accum = str => {
  const arr = str.split('');
  const result = [];
  let tempStr = '';
  arr.forEach((element, i) => {
    tempStr += element.toUpperCase();
    for (let j = 0; j <= i; j++) {
      tempStr += element.toLowerCase();
    }
    result.push(tempStr)
    tempStr = '';
  });
  return result.join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));