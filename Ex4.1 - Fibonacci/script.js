
const fibonacci = n => {
  let result = [0, 1];
  let temp = 0;
  let n1 = 1;
  let n2 = 0;

  while (n1 < n) {
    result.push(n1 + n2);

    temp = n1;
    n1 = n1 + n2;
    n2 = temp;
    
  }
  return result;
}

console.log(fibonacci(144));