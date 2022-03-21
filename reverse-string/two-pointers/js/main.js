function reverseString(string) {
  let finalArr = new Array(string.length).fill(0)

  let leftPointer = 0
  let rightPointer = string.length - 1
  while (rightPointer >= leftPointer) {
    const leftPointerLetter = string[leftPointer]
    const rightPointerLetter = string[rightPointer]

    finalArr[leftPointer] = rightPointerLetter
    finalArr[rightPointer] = leftPointerLetter

    leftPointer++
    rightPointer--
  }

  return finalArr.join('')
}

console.log(reverseString('abcde'))
console.log(reverseString('abcdef'))
console.log(reverseString('jake'))
console.log(reverseString('reverseastring'))