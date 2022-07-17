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

// First merge method
const mergeLinkedList = (head1, head2) => {
  let head3 = null,
    current = null,
    node = null;
  let current1 = head1;
  let current2 = head2;

  while (current1 && current2) {
    if (current1.value < current2.value) {
      node = new SSLNode(current1.value);
      current1 = current1.next;
    } else {
      node = new SSLNode(current2.value);
      current2 = current2.next;
    }

    if (head3 === null) {
      head3 = current = node;
    } else {
      current.next = node;
      current = current.next;
    }
  }

  while (current1) {
    node = new SSLNode(current1.value);
    current.next = node;
    current = current.next;
    current1 = current1.next;
  }
  while (current2) {
    node = new SSLNode(current2.value);
    current.next = node;
    current = current.next;
    current2 = current2.next;
  }

  return head3;
};

let head1 = createLinkedList([10, 30, 40, 60]);
let head2 = createLinkedList([20, 50, 70, 80, 90, 100]);
// let head3 = mergeLinkedList(head1, head2);
// traverseSSL(head3);

// Second merge method
const mergeListInPlace = (head1, head2) => {
  let dummy = new SSLNode(0);
  let current = dummy;

  while (head1 && head2) {
    if (head1.value < head2.value) {
      current.next = head1;
      current = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      current = head2;
      head2 = head2.next;
    }
  }

  current.next = head1 ? head1 : head2;

  return dummy.next;
};

let head3 = mergeListInPlace(head1, head2);
traverseSSL(head3);
