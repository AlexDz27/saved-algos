function quickSort(array, leftBoundaryIdx = 1, rightBoundaryIdx = array.length - 1) {
  if (leftBoundaryIdx > rightBoundaryIdx) return array

  const pivotIdx = leftBoundaryIdx - 1
  let pivotIdxReserved
  const pivotValue = array[pivotIdx]
  let leftIdx = leftBoundaryIdx
  let rightIdx = rightBoundaryIdx

  while (true) {
    const leftValue = array[leftIdx]
    const rightValue = array[rightIdx]

    if (rightValue > pivotValue) {
      rightIdx--
      continue
    }

    if (leftIdx >= rightIdx) {
      array[leftIdx] = pivotValue
      array[pivotIdx] = leftValue

      pivotIdxReserved = leftIdx
      break
    }

    if (leftValue > pivotValue && rightValue <= pivotValue) {
      array[leftIdx] = rightValue
      array[rightIdx] = leftValue

      rightIdx--
      continue
    }

    leftIdx++
  }

  // debugger
  // left
  quickSort(array, leftBoundaryIdx, pivotIdxReserved - 1)
  // right
  quickSort(array, pivotIdxReserved + 1, rightBoundaryIdx)

  return array
}

// console.log(quickSort(exampleArr))
// console.log(quickSort(arr2))
// console.log(quickSort(twoArr1))
console.log(quickSort(twoArr2))
// console.log(quickSort(someTestCase))
// console.log(quickSort(testCase11))
// console.log(quickSort(myTestCase11))
// console.log(quickSort(myTestCase112))