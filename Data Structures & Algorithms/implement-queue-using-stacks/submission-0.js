class MyQueue {
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.s1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        while (this.s1.length > 1) {
            this.s2.push(this.s1.pop());
        }

        const popped = this.s1.pop();

        while (this.s2.length > 0) {
            this.s1.push(this.s2.pop());
        }

        return popped;
    }

    /**
     * @return {number}
     */
    peek() {
        return this.s1[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.s1.length > 0 ? false : true;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Stack operations:
    // push: to top
    // peek: top
    // pop: top
    // size
    // isEmpty

// stack: lifo, queue: fifo

// push in stack - pushes to front
// push in queue - we need to push at back

// queue:
// [2, 1]

// 1 will go first
// 2 will go next

// stack:
// [2, 1]
// 1 will go first
// 1 will go next

// s1 contains the elements, s2 is used to temporarily store the values

// pop implementation:
    // pop all elements in s1 until last before element and save it in s2
    // swap s1 with s2

