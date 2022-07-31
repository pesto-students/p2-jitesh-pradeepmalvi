class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

const createBSTRecur = (root, key) => {
  if (root === null) {
    root = new TreeNode(key);
    return root;
  }

  if (key < root.value) {
    root.left = createBSTRecur(root.left, key);
  } else if (key > root.value) {
    root.right = createBSTRecur(root.right, key);
  }

  return root;
};

const createBST = arr => {
  for (let a of arr) {
    root = createBSTRecur(root, a);
  }
};

const levelOrder = root => {
  let queue = [root],
    levelArr = [];
  while (queue.length) {
    let childArr = [],
      valueArr = [];
    for (const node of queue) {
      if (!node) continue;
      valueArr.push(node.value);
      childArr.push(node.left);
      childArr.push(node.right);
    }
    if (valueArr.length) levelArr.push(valueArr);
    queue = childArr;
  }
  return levelArr;
};

createBST([3, 9, 20, null, null, 15, 7]);
console.log(levelOrder(root));
