class SSLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const createLinkedList = arr => {
  let head = new SSLNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let node = new SSLNode(arr[i]);
    current.next = node;
    current = node;
  }
  return head;
};

const traverseSSL = head => {
  let current = head;
  while (current.next !== null) {
    console.log(current.value);
    current = current.next;
  }
};

const rotateLinkedList = (head, k) => {
  let current = head;
  let n = 1;
  while (current.next) {
    n++;
    current = current.next;
  }

  k %= n;
  if (k === 0) return;

  current.next = head;
  let steps = n - k;
  let newCurrent = current;

  while (steps--) {
    newCurrent = newCurrent.next;
  }

  let newHead = newCurrent.next;
  newCurrent.next = null;
  return newHead;
};

let head1 = createLinkedList([10, 30, 40, 60, 80, 100]);
// traverseSSL(head1);
head1 = rotateLinkedList(head1, 1);
traverseSSL(head1);
