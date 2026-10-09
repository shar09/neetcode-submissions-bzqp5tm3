class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0) {
           this.minStack.push(val); 
        } else if (this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const poppedElement = this.stack.pop();

        if (poppedElement === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// push (top) - o(1)
/// pop (top) - o(1)
// top - o (1)
// getMin() - o (n)

// using an array
    // we can treat the end of the array as the top of stack making all the operations o(1) except for getMin

// how can we run getMin in o (1)?

// use 2 stacks

// use a min stack that will add the element only if it is smaller than the element at the top of the stack

// the top of the stack will always contain the minimum element

// should we add dupliacates to min stack - yes
// [ 7, 3, 2, 2, 6] -> stack
// [7, 3, 2, 2] -> minStack
// pop 6
// pop 2
// pop 2
// once first 2 is popped, the second 2 is still the minimum

// we do not need to add duplicates when it is not the minimum
// for example if 7 pushed again, it does it not need to be added even though it is in the min stack
