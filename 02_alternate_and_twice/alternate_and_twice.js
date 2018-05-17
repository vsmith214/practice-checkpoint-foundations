let alternate = fn => {
  let count = 0;

  return () => {
    count += 1;
    if (count % 2 === 1) fn();
  }
}

let twice = fn => {
  let count = 0;

  return () => {
    count += 1;
    if (count < 3) return fn();
    else return 0;
  }
}