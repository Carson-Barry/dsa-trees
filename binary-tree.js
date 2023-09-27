/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    if (this.root === null || this.root === undefined) return 0;

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if (this.root === null || this.root === undefined) return 0;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    if (this.root === null || this.root === undefined) return 0;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    const toVisitStack = [this.root];
    let currentVal = null;

    if (this.root === null || this.root === undefined) {
      return currentVal;
    }

    while (toVisitStack.length > 0) {
      const currentNode = toVisitStack.pop();
      if (currentNode !== null) {
        if (currentNode.val > lowerBound) {
          if (currentVal === null || currentNode.val < currentVal) {
            currentVal = currentNode.val;
          }
        }
        toVisitStack.push(currentNode.left, currentNode.right)
      }

    }
    return currentVal;
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
