/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const toVisitStack = [this.root];
    let total = 0;

    if (this.root === null || this.root === undefined) {
      return total;
    }

    while (toVisitStack.length > 0) {
      const currentNode = toVisitStack.pop();
      total = total + currentNode.val;
      for (let child of currentNode.children) {
        toVisitStack.push(child);
      }
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const toVisitStack = [this.root];
    let total = 0;

    if (this.root === null || this.root === undefined) {
      return total;
    }

    while (toVisitStack.length > 0) {
      const currentNode = toVisitStack.pop();
      if (currentNode.val % 2 === 0) total += 1;
      for (let child of currentNode.children) {
        toVisitStack.push(child);
      }
    }
    return total;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const toVisitStack = [this.root];
    let total = 0;

    if (this.root === null || this.root === undefined) {
      return total;
    }

    while (toVisitStack.length > 0) {
      const currentNode = toVisitStack.pop();
      if (currentNode.val > lowerBound) total += 1;
      for (let child of currentNode.children) {
        toVisitStack.push(child);
      }
    }
    return total;
  }
}

module.exports = { Tree, TreeNode };
