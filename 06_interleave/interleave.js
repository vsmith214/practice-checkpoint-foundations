function interleave() {
  let args = [...arguments],
    res = '';

  function loopingThru(arr, start) {
    let newArr = [];

    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0]) {
          start += arr[i][0];
          newArr.push(arr[i].slice(1));
        }
      }
      return loopingThru(newArr, start);
    } else return start;
  }
  return loopingThru(args, res);
}