const findUniq = arr => arr.sort()[1] === arr[0] ? arr[arr.length - 1] : arr[0];