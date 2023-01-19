'use strict';

const toCamelCase = str => {

  const newWord = [];
  if (str.includes('-')) {
    const arr = str.split('-');
    newWord.push(arr[0]);
  }else if (str.includes('_')) {
    const arr = str.split('_');
    newWord.push(arr[0].charAt(0).toUpperCase() + arr[i].slice(1));
  }else {
    throw new Error('string contains invalid delimiter character');
  }

  for (let i = 1; i < arr.length; i++) {
    newWord.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }

  return newWord.join('');
}


console.log(toCamelCase("the-stealth-warrior"));
//console.log(toCamelCase('The_Stealth_Warrior'));