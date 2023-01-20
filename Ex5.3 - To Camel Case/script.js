'use strict'
const toCamelCase = str => {
  let arr = [];
  const newWord = [];
  if (str.includes('-')) {
    arr = str.split('-');
  }else if (str.includes('_')) {
    arr = str.split('_');
  }else {
    throw new Error('string contains invalid delimiter character');
  }

  newWord.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    newWord.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }

  return newWord.join('');
}


console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase('The_Stealth_Warrior'));