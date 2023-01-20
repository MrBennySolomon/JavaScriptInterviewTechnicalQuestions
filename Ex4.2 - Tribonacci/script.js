const tribonacci = (signatureArr, n) => {
  if (n === 0) return [];
  if (n === 1) return [signatureArr[0]];
  if (n === 2) return [signatureArr[0], signatureArr[1]];

  let result = signatureArr
  let temp = 0;
  let n1 = result[2];
  let n2 = result[1];
  let n3 = result[0];

  while (n1 <= n) {
    result.push(n1 + n2 + n3);

    temp = n1;
    n1 = n1 + n2 + n3;
    n3 = n2;
    n2 = temp;
    
  }
  return result;
}

console.log(tribonacci([1, 1, 1], 2));