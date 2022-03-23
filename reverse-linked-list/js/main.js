function reverseLinkedList(linkedList) {
  let prev = linkedList
  let current = linkedList.next

  prev.next = null

  let rest = current
  while (rest !== null) {
    rest = current.next

    current.next = prev

    prev = current

    current = rest
  }

  return prev
}

console.log(reverseLinkedList(linkedList1))
