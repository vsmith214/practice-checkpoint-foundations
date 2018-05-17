let reduceRight = (arr, start, fn) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    start = fn(start, arr[i]);
  }
  return start;
}

function reduceRightRecursive(arr, start, fn) {
  if (!arr.length) return start;
  else {
    start = fn(start, arr[arr.length - 1]);
    return reduceRightRecursive(arr.slice(0, arr.length - 1), start, fn);
  }
}