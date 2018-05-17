let vowelsCount = str => {
  let count = 0,
    vowels = { a: true, e: true, i: true, o: true, u: true }

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (vowels[str[i]]) count += 1;
  }

  return count;
}