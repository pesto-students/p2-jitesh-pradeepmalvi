class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = null;

function createBSTRecur(root, key) {
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
}

function createBST(arr) {
  for (let a of arr) {
    root = createBSTRecur(root, a);
  }
}

var isValidBST = function (root) {
  if (root == null) return true;
  let check = (node, l = -Infinity, r = Infinity) => {
    if (node == null) return true;
    let left = check(node.left, l, node.value);
    let right = check(node.right, node.value, r);
    return l < node.value && node.value < r && left && right;
  };
  return check(root);
};

// createBST([2, 1, 3]);
// console.log(isValidBST(root));

createBST([5, 1, 4, null, null, 3, 6]);
console.log(isValidBST(root));
