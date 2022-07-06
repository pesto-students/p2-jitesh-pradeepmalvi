class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertIntoTree(i, arr) {
  let curr = null;
  if (i < arr.length) {
    curr = new TreeNode(arr[i]);
    curr.left = insertIntoTree(2 * i + 1, arr);
    curr.right = insertIntoTree(2 * i + 2, arr);
  }
  return curr;
}

function createTree(arr) {
  return insertIntoTree(0, arr);
}

let arr = [5, 3, 6, 2, 4];
let root = createTree(arr);

const maxDepth = root => {
  const checkDepth = (node, depth) => {
    if (node === null) {
      return depth;
    }
    depth++;
    const left = checkDepth(node.left, depth);
    const right = checkDepth(node.right, depth);
    return Math.max(left, right);
  };
  return checkDepth(root, 0);
};

console.log(maxDepth(root));
