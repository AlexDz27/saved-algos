/*function quickSort(array) {
  // let counter = 0

  let pivotPointerIdx = 0
  let leftPointerIdx = 1
  let rightPointerIdx = array.length - 1
  // while (leftPointerIdx <= rightPointerIdx) {
  //
  // }
}*/


function quickSort(array) {
  if (array.length <= 1) return array
  if (array.length === 2) {
    const left = array[0]
    const right = array[1]

    array[0] = right
    array[1] = left

    return array
  }

  let newArr = []
  let leftArr = []
  let pivotArr = []
  let rightArr = []

  let pivot = 0
  let left = 1
  let right = array.length - 1
  for (let i = 1; i <= 10; i++) {
    while (left <= right) {
      const pivotValue = array[pivot]
      const leftValue = array[left]
      const rightValue = array[right]

      if (leftValue > pivotValue && rightValue < pivotValue) {
        array[left] = rightValue
        array[right] = leftValue

        right--
        continue // ?
      }

      // put pivot into correct position
      if (left === right) {
        array[left] = pivotValue
        array[pivot] = leftValue

        pivot = left
      }

      if (pivotValue >= leftValue) {
        left++
      }
      if (pivotValue <= rightValue) {
        right--
      }
    }
  }

  // leftArr = quickSort(array.slice(1, pivot))
  // const pivotValue = array[pivot]
  // pivotArr = [pivotValue]
  // rightArr = quickSort(array.slice(pivot + 1, array.length))
  // newArr = leftArr.concat(pivotArr, rightArr)

  // return newArr
  return array
}

console.log(quickSort(exampleArr))
console.log(quickSort(arr2))