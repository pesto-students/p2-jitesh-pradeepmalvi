class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = null;

const createLinkedList = arr => {
  head = new LinkedListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let node = new LinkedListNode(arr[i]);
    current.next = node;
    current = node;
  }
};

const traversalLinkedList = () => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const reverseList = () => {
  let current = head;
  let prev = null;
  let after = null;
  while (current.next !== null) {
    after = current.next;
    current.next = prev;
    prev = current;
    current = after;
  }

  current.next = prev;
  head = current;
};

createLinkedList([1, 2, 3, 4, 5, 6]);
// traversalLinkedList();
reverseList();
traversalLinkedList();
