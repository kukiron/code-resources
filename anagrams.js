function anagrams(word, words) {
  const sort = str => str.split('').sort().join('')

  return words.filter(val => sort(val) === sort(word) && val)
}

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
anagrams('laser', ['lazing', 'lazy', 'lacer'])
