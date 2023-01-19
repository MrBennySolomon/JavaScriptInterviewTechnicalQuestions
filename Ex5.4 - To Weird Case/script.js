//'use strict'

const toWeirdCase = str => {
  const arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if((i % 2) === 0) {
      arr.splice(i, 1, str[i].toUpperCase());
      //str.replace(str.charAt(i), str.charAt(i).toUpperCase());
    }
  }
  return arr.join('');
}

console.log(toWeirdCase('Weird string case'));