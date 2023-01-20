function map(arr, mapFunc) {
  const mapArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    mapArr.push(mapFunc(arr, arr[i]));
  }
  
  return mapArr;
}