function quickSort(array) {
  if (array.length <= 1) return array

  let pivot = 0
  const pivotValue = array[pivot]
  let left = 1
  let right = array.length - 1

  while (left <= right) {
    const leftValue = array[left]
    const rightValue = array[right]

    if (rightValue > pivotValue) {
      right--
      continue
    }

    if (left === right) {
      array[left] = pivotValue
      array[pivot] = leftValue
      break
    }

    if (leftValue > pivotValue && rightValue <= pivotValue) {
      array[left] = rightValue
      array[right] = leftValue

      right--
      continue
    }

    left++
  }

  const leftArr = quickSort(array.slice(0, right))
  const pivotArr = [pivotValue]
  const rightArr = quickSort(array.slice(right + 1, array.length))
  const newArr = leftArr.concat(pivotArr, rightArr)

  return newArr
}

console.log(quickSort(myTestCase11))
// console.log(quickSort(myTestCase112))