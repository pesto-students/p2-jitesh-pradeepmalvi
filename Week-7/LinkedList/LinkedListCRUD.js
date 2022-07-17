class SSLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = null;

const createSSL = arr => {
  head = new SSLNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    let node = new SSLNode(arr[i]);
    current.next = node;
    current = current.next;
  }
};

const traverseSSL = () => {
  let current = head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
};

// createSSL([2, 3, 5, 7, 8, 9]);
// traverseSSL();

const insertAtBeginning = value => {
  let node = new SSLNode(value);
  node.next = head;
  head = node;
};

// createSSL([2, 3, 5, 7, 8, 9]);
// 2, 3, 5, 7, 8, 9
// insertAtBeginning(1);
// traverseSSL();
// 1, 2, 3, 5, 7, 8, 9

const insertAtKthPostion = (value, k) => {
  if (k < 0) {
    return;
  }
  if (k === 0) {
    return insertAtBeginning(value);
  }

  let current = head;

  while (--k) {
    if (current === null) return;
    current = current.next;
  }

  let node = new SSLNode(value);
  node.next = current.next;
  current.next = node;
};

// createSSL([2, 3, 5, 7, 8, 9]);
// 2, 3, 5, 7, 8, 9
// insertAtKthPostion(4, 2);
// traverseSSL();
// 2, 3, 4, 5, 7, 8, 9

const insertAtEnd = value => {
  let current = head;
  while (current.next !== null) {
    current = current.next;
  }
  let node = new SSLNode(value);
  current.next = node;
};

// createSSL([2, 3, 5, 7, 8, 9]);
// // 2, 3, 5, 7, 8, 9
// insertAtEnd(10);
// traverseSSL();
// // 2, 3, 5, 7, 8, 9, 10

const deleteKthNode = k => {
  if (k < 1) {
    return;
  }

  let current = head;
  let prev = null;
  while (--k) {
    if (current.next === null) {
      return;
    }
    prev = current;
    current = current.next;
  }
  prev.next = current.next;

  // deleting from memory as well
  current.next = null;
  delete current;
};

// createSSL([2, 3, 5, 7, 8, 9]);
// // 2, 3, 5, 7, 8, 9
// deleteKthNode(2);
// traverseSSL();
// // 2, 5, 7, 8, 9

const updateKthNode = (value, k) => {
  if (k < 0) {
    return;
  }

  let current = head;

  while (--k) {
    if (current.next === null) {
      return;
    }
    current = current.next;
  }

  current.value = value;
};

// createSSL([2, 3, 5, 7, 8, 9]);
// // 2, 3, 5, 7, 8, 9
// updateKthNode(4, 2);
// traverseSSL();
// // 2, 4, 5, 7, 8, 9

const reverseList = () => {
  let current = head;
  let after = null;
  let prev = null;

  while (current.next !== null) {
    after = current.next; // Store value of current (Temporary)
    current.next = prev; //
    prev = current; //
    current = after; // Assigning the value of current
  }
  current.next = prev;
  head = current;
};

// createSSL([2, 3, 5, 7, 8, 9]);
// // 2, 3, 5, 7, 8, 9
// reverseList();
// traverseSSL();
// // 9, 8, 7, 5, 3, 2

const findMiddleNode = () => {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  console.log(slow.value);
};

createSSL([2, 3, 5, 7, 8, 10, 11]);
// 2, 3, 5, 7, 8, 10, 11
findMiddleNode();
// 7
