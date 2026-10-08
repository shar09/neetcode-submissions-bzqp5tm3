class MyStack {
    constructor() {
        this.queueOne = [];
        this.queueTwo = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (this.queueOne.length === 0) {
            this.queueOne.push(x);
            this.queueOne = this.queueOne.concat(this.queueTwo);
            this.queueTwo = [];
        } else if (this.queueTwo.length === 0) {
            this.queueTwo.push(x);
            this.queueTwo = this.queueTwo.concat(this.queueOne);
            this.queueOne = [];        
        }
    }

    /**
     * @return {number}
     */
    pop() {
        let top;
        if (this.queueOne.length === 0) {
            this.queueOne = this.queueTwo.slice(1);

            top = this.queueTwo[0];
            this.queueTwo = [];
        } else if (this.queueTwo.length === 0) {
            this.queueTwo = this.queueOne.slice(1);

            top = this.queueOne[0];
            this.queueOne = [];        
        }

        return top;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.queueOne.length === 0) {
            return this.queueTwo[0];
        } else {
            return this.queueOne[0];
        }
    }

    /**
     * @return {boolean}
     */
    empty() {
        if (this.queueOne.length === 0) {
            if (this.queueTwo.length === 0) {
                return true;
            }
        } else if (this.queueTwo.length === 0) {
            if (this.queueOne.length === 0) {
                return true;
            }
        }

        return false;
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

// when using a queue we cannot remove the elements from the back
// we can only remove them from the front

// queue one empty - yes - check queue two
// queue two empty - yes - check queue one
// why check both again in inner loops? because we do not return in outer loops