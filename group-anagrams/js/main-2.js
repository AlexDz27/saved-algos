function groupAnagrams(words) {
  const groups = {}

  for (const word of words) {
    const wordWithSortedLetters = sortLetters(word)
    const group = groups[wordWithSortedLetters]
    if (group === undefined) {
      groups[wordWithSortedLetters] = [word]
    } else {
      group.push(word)
    }
  }

  return Object.values(groups)
}

console.log(groupAnagrams(exampleWords))
// console.log(groupAnagrams(myTestCase1))


function sortLetters(word) {
  let sorted = [...word].sort((a, b) => a.localeCompare(b)).join("")

  return sorted
}
