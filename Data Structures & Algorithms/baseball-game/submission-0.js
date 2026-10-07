class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const op of operations) {
            const lastElementInStack = stack[stack.length - 1];
            if (op === '+') {
                const lastSecondElementInStack = stack[stack.length - 2];
                stack.push(lastElementInStack + lastSecondElementInStack);
            } else if (op === 'D') {
                stack.push(lastElementInStack * 2);
            } else if (op === 'C') {
                stack.pop();
            } else {
                stack.push(Number(op));
            }
        }

        let sum = 0;

        for (const num of stack) {
            sum += num;
        }

        return sum;
    }
}

// stack = [] // empty record

// number x: push to stack
// +: push to stack sum of last 2 elements
// D: double the last element in stack and push to stack
// C: pop the last element in stack