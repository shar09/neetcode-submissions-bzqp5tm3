class MyStack {
    constructor() {
        this.queueOne = new Queue();
        this.queueTwo = new Queue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        const activeQueue = this.queueOne.isEmpty() ? this.queueTwo : this.queueOne;
        const emptyQueue = this.queueOne.isEmpty() ? this.queueOne: this.queueTwo;

        emptyQueue.push(x);

        while (!activeQueue.isEmpty()) {
            emptyQueue.push(activeQueue.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        const activeQueue = this.queueOne.isEmpty() ? this.queueTwo : this.queueOne;

        return activeQueue.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const activeQueue = this.queueOne.isEmpty() ? this.queueTwo : this.queueOne;
        
        return activeQueue.front();

    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queueOne.isEmpty() && this.queueTwo.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// Queue operations:
// pop: remove from front
// push: add from back
// isEmpty: returns true if empty
// peek: return first element

// Pesudo code: Stack

// push:
    // identify empty queue
    // identify active queue
