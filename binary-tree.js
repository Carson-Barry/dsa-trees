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

    const depthFinder = (thisNode) => {
      //Leaf node found
      if ((thisNode.left !== null || thisNode.left === undefined) && (thisNode.right !== null || thisNode.right === undefined)) return 1;
      //This node has only one node, on the left
      if (thisNode.right !== null || thisNode.right === undefined) return depthFinder(thisNode.left) + 1;
      //This node has only one node, on the right
      if (thisNode.left !== null || thisNode.left === undefined) return depthFinder(thisNode.right) + 1;

      const leftDepth = depthFinder(thisNode.left);
      const rightDepth = depthFinder(thisNode.right)

      if (leftDepth > rightDepth) return rightDepth;
      return leftDepth;

    }

    return depthFinder(this.root) + 1;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if (this.root === null || this.root === undefined) return 0;

    const depthFinder = (thisNode) => {
      //Leaf node found
      if (!thisNode.left && !thisNode.right) return 1;
      //This node has only one leaf node, on the left
      if (!thisNode.right) return depthFinder(thisNode.left) + 1;
      //This node has only one leaf node, on the right
      if (!thisNode.left) return depthFinder(thisNode.right) + 1;

      const leftDepth = depthFinder(thisNode.left);
      const rightDepth = depthFinder(thisNode.right);

      if (leftDepth < rightDepth) return rightDepth;
      return leftDepth;

    }

    return depthFinder(this.root) + 1;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let total = 0;

    const maxSumFinder = (thisNode) => {
      if (!thisNode) return 0;
      const leftTotal = maxSumFinder(thisNode.left);
      const rightTotal = maxSumFinder(thisNode.right)

      if (total < thisNode.val + leftTotal + rightTotal) {
        total = thisNode.val + leftTotal + rightTotal;
      }

      return Math.max(leftTotal + thisNode.val, rightTotal + thisNode.val, 0)
    }

    maxSumFinder(this.root);
    return total;

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
