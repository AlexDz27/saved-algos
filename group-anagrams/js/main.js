function groupAnagrams(words) {
  const groups = {}
  let counter = 1

  for (const word of words) {
    const sumOfWord = getSumOfCharCodes(word)

    const group = groups[sumOfWord]
    if (group) {
      // additionally make sure it's an anagram
      let isWordReallyAnagramToGroupWords = false
      const wordFirstLetter = word[0]
      for (const groupWord of group) {
        for (const groupWordLetter of groupWord) {
          if (wordFirstLetter === groupWordLetter) {
            isWordReallyAnagramToGroupWords = true
            break
          }
        }
      }

      if (isWordReallyAnagramToGroupWords) {
        group.push(word)
      } else {
        const newGroup = [word]
        groups[sumOfWord + counter] = newGroup // TODO: sumOfWord + '-' + counter
        counter++
      }
    } else {
      const newGroup = [word]
      groups[sumOfWord] = newGroup
    }
  }

  const realGroups = []
  for (const key in groups) {
    const group = groups[key]
    realGroups.push(group)
  }

  return realGroups
}

console.log(groupAnagrams(exampleWords))
console.log(groupAnagrams(myTestCase1))


function getSumOfCharCodes(string) {
  let sumOfCharCodes = 0
  for (const letter of string) {
    sumOfCharCodes += letter.charCodeAt(0)
  }

  return sumOfCharCodes
}
