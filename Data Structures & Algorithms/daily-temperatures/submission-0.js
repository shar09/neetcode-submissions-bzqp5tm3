class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const output = Array(temperatures.length).fill(0);
        let i = 0;

        while (i < temperatures.length) {
            if (stack.length === 0) {
                stack.push(i);
            } else if (temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const poppedIndex = stack.pop();
                output[poppedIndex] = i - poppedIndex;
                continue;
            } else {
                stack.push(i);
            }
            i++;
        }

        return output;
    }
}

// brute force O(n) square

// stack: o(1)
// push indexes to stack
// while incoming element > top of stack
    // pop
    // calcuate the distance and push to output array

// if incoming element < top of stack
    // push the index to top of stack

// the stack will always contain temperatures in decreasing order
// once there is a warmer temperature if it will eliminate all the cooler temperatures