function keyAdder() {
  let keys = Object.keys(this),
    sum = 0;

  keys.forEach(key => {
    if (typeof (this[key]) === 'number') sum += this[key];
  });

  return sum;
}