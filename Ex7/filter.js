function filter(arr, filterFunc) {
  const filterArr = [];

  for(let i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i]);
    if(result) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
}