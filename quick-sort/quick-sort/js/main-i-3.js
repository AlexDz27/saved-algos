// Идея: переместить pivot в край и по пути сортировать
function quickSort(array, startIdx = 0, endIdx = array.length - 1) {
  if (startIdx >= endIdx) return array

  const pivotIdx = startIdx
  let leftIdx = startIdx + 1
  let rightIdx = endIdx

  while (leftIdx <= rightIdx) {
    if (array[rightIdx] >= array[pivotIdx]) {
      rightIdx--
      continue
    }

    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      swapValuesAtIndices(rightIdx, leftIdx, array)
      rightIdx--
    }

    if (array[leftIdx] <= array[pivotIdx]) leftIdx++
  }
  swapValuesAtIndices(rightIdx, pivotIdx, array)

  // left
  quickSort(array, startIdx, rightIdx - 1)
  // right
  quickSort(array, rightIdx + 1, endIdx)

  return array
}

console.log(quickSort(exampleArr))
console.log(quickSort(arr2))
console.log(quickSort(twoArr1))
console.log(quickSort(twoArr2))
console.log(quickSort(someTestCase))
console.log(quickSort(testCase11)) // bad
console.log(quickSort(myTestCase11)) // bad
console.log(quickSort(myTestCase112))
console.log(quickSort(myTestCase113))
console.log(quickSort(myTestCase113short))
console.log(quickSort(myTestCase1))
console.log(quickSort(myTestCase2))
console.log(quickSort(myTestCaseLow1))
console.log(quickSort(myTestCaseLow2))
console.log(quickSort(myTestCaseLow3))
console.log(quickSort(myTestCaseMedium1)) // bad


function swapValuesAtIndices(i, j, array) {
  const iValue = array[i]
  const jValue = array[j]

  array[i] = jValue
  array[j] = iValue
}