class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList1 = new LinkedList(1)
linkedList1.next = new LinkedList(2)
linkedList1.next.next = new LinkedList(3)
linkedList1.next.next.next = new LinkedList(4)
// console.log(linkedList1)

const linkedList01 = new LinkedList(0)
linkedList01.next = new LinkedList(1)

const linkedList0 = new LinkedList(0)