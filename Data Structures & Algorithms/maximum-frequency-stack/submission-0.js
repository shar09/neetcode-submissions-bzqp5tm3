class FreqStack {
    constructor() {
        this.mostFrequentCount = 0;
        this.frequencyCounter = new Map();
        this.valueCounter = new Map();
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const frequencyCounter = this.frequencyCounter;
        const valueCounter = this.valueCounter;

        valueCounter.set(val, (valueCounter.get(val) ?? 0) + 1);

        const currentValFrequency = valueCounter.get(val);

        if (frequencyCounter.has(currentValFrequency)) {
            frequencyCounter.get(currentValFrequency).push(val);
        } else {
            frequencyCounter.set(currentValFrequency, [val]);
        }

        if (currentValFrequency > this.mostFrequentCount) {
            this.mostFrequentCount = currentValFrequency;
        }
    }

    /**
     * @return {number}
     */
    pop() {
        const frequencyCounter = this.frequencyCounter;
        const valueCounter = this.valueCounter;

        const mostFrequentStack = frequencyCounter.get(this.mostFrequentCount);
        const popped = mostFrequentStack.pop();

        if (mostFrequentStack.length === 0) {
            frequencyCounter.delete(this.mostFrequentCount);
            this.mostFrequentCount = this.mostFrequentCount - 1;
        }

        valueCounter.set(popped, valueCounter.get(popped) - 1);

        return popped;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */


// with every push we need to store the value of the frequent element

// we not only need the most frequent element but we will need to store the possible elements that have the chance of being the most frequent, once the most frequent element is popped

// hash map?

// if new element added to hashmap has frequency >= the current most frequenet element, then new element will become the most frequent element.

// on pop, how can we check the value of most frequent efficiently?
// most frequent element = highest frequency and latest in the stack
    // loop through the stack from bottom up
        // update most frequent element based on its frequency count

// push o(1)
// pop o (n)

// group the frequencies: pop o(1)
    // freq: [vals]

    // use 2 hashmaps to efficiently push