function forEach(arr, callbackFn) {
  for(let i = 0; i < arr.length; i++) {
    callbackFn(arr[i]);
  }
}