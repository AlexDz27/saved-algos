function quickSort(array) {
  if (array.length < 2) return array

  const pivot = 0
  const pivotValue = array[pivot]
  let leftArr = []
  for (let i = 1; i < array.length; i++) {
    const number = array[i]
    if (number <= pivotValue) leftArr.push(number)
  }
  let rightArr = []
  for (let i = 1; i < array.length; i++) {
    const number = array[i]
    if (number >= pivotValue) rightArr.push(number)
  }

  leftArr = quickSort(leftArr)
  const pivotArr = [pivotValue]
  rightArr = quickSort(rightArr)
  const newArr = leftArr.concat(pivotArr, rightArr)

  return newArr
}

console.log(quickSort(testCase11))