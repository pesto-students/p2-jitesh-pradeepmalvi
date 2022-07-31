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

const createLoop = head => {
  let k = 4;
  let current = head;
  while (--k) {
    current = current.next;
  }
  let tail = current;
  while (tail.next !== null) {
    tail = tail.next;
  }
  tail.next = current;
  return tail;
};

const traverseLoop = head => {
  let k = 20;
  let current = head;
  while (--k && current) {
    console.log(current.value);
    current = current.next;
  }
};

const detectLoop = head => {
  let slow = head;
  let fast = head;

  while (fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      console.log("Loop detected");
      return;
    }
  }
  console.log("Its not a loop");
};

let head1 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// traverseSSL(head1);
createLoop(head1);
// traverseLoop(head1);
detectLoop(head1);
