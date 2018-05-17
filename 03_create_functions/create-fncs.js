let createFunctions = num => {
  let arr = [];

  let wrapper = num => () => num;

  for (let i = 0; i < num; i++) {
    arr.push(wrapper(i));
  }

  return arr;
}