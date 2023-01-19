const longest = (s1, s2) => {
  const set = new Set();
  for (const char of s1.split('')) {
    set.add(char);
  }
  for (const char of s2.split('')) {
    set.add(char);
  }

  return Array.from(set).sort((a, b) => a.localeCompare(b)).join('');

}

console.log(longest('abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'));