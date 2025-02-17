const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		return this.first;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		let addList = new ListNode(value);

		if (this.first === null) {
      this.first = addList;
		} else {
			this.last.next = addList;
		}
		
    this.last = addList;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		let deleteItem = this.first;

		if (this.first === this.last) {
      this.last = null;
		} else {
			this.first = this.first.next;
		}

    return deleteItem.value;
  }
}

module.exports = {
  Queue
};
