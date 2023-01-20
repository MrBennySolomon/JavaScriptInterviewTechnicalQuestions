'use strict'
const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case '+': 
      return value1 + value2;
    case '-': 
      return value1 - value2;
    case '*': 
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      throw new Error('The operator parameter is not correct...');
  }
}