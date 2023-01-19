const tribonacci = n => {
  let result = [1, 1, 1];
  let temp = 0;
  let n1 = 1;
  let n2 = 1;
  let n3 = 1;


  while (n1 <= n) {
    result.push(n1 + n2 + n3);

    temp = n1;
    n1 = n1 + n2 + n3;
    n3 = n2;
    n2 = temp;
    
  }
  return result;
}