class StockSpanner {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        const stack = this.stack;
        let top = stack[stack.length - 1];

        if (stack.length === 0 || top[0] > price) {
            stack.push([price, 1]);
        } else {
            let span = 1;
            while (stack.length > 0 && top[0] <= price) {
                const popped = stack.pop();
                span += popped[1];
                top = stack[stack.length - 1];
            }
            stack.push([price, span]);
        }

        return stack[stack.length - 1][1];
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// on next price:
    // we need to return the number of previous consecutive days the stock was less than or equal to the current price
    // the value is inclusive of the current day. so min value will be 1.


// if stack is empty
    // add current stock to the stack 
    // return 1
// while current stock is less than top of stack
    // keep popping until stack length is 0
    
    // push to stack
    // return 1
// if current stock is greater than or equal to top of the stack
    // push to stack
    // return stack.length

// [30, 40, 50, 60, 35]

// problem:
    // a big stock pops out all the lower stocks
    // a newer big stock will then return a wrong out

    // if we do not pop then in the worst case we are essentially checking o (n) square
