const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
    this.rootElem = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		return this.rootElem;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		this.rootElem = addElem(this.rootElem, data);

		function addElem(node, data) {
			if (!node) {
				return new Node(data);
			}

			if (node.data === data) {
				return node;
			}

			if (data < node.data) {
				node.left = addElem(node.left, data);
			} else {
				node.right = addElem(node.right, data);
			}

			return node;
		}
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		return searchElem(this.rootElem, data);

		function searchElem(node, data) {
			if (!node) {
				return false;
			}

			if (node.data === data) {
				return true;
			}

			if (data < node.data) {
				return searchElem(node.left, data);
			} else {
				return searchElem(node.right, data);
			}
		}
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};