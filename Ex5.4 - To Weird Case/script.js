'use strict'

const toWeirdCase = str => {
  const arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if((i % 2) === 0) {
      arr.splice(i, 1, str[i].toUpperCase());
    }else {
      arr.splice(i, 1, str[i].toLowerCase());
    }
  }
  return arr.join('');
}