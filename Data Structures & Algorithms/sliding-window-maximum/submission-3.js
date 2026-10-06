class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const dequeue = [];
        const output = [];
        let front = 0;

        let i = 0, j = 0;

        while (j < nums.length) {
            const incomingElement = nums[j];
            
            while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] <= incomingElement) {
                dequeue.pop();
            }

            dequeue.push(j);

            if (front > dequeue.length - 1) front = dequeue.length - 1;


            if (j - i + 1 === k) {
                while (dequeue[front] < i) {
                    front++;
                }

                output.push(nums[dequeue[front]]);
                i++;
            }

            j++;
        }

        return output;
    }
}

// whenver a new element enters the window
// it could be the new maximum

// whenever an element exits the window
// the maximum could have left the window

// calculate max value from 0 to k - 1: first window
// store the index position of the max value

// if the index position is the first element then for then when the window moves we need to recalculate the max

// whenever a window moves, the new element could be the new max or we might lose the max eventually as the window moves and then we will again have to recalculate the max

// how can we efficinetly calculate the max as the window moves?

// is there a way to know what the new max is when the old max left the window without going through the entire window?

// monotonic dequeue?
// in the dequeue store every number that has a scope of becoming the new max.

// how it works
// store the first element in dequeue
// if incoming element is > the last element in queue, pop that element
// the incoming element will take its right place in the queue

// first element in the queue is always the maximum

// how do elements exit the queue?
// we need to store the indexes of the elements in the queue
// and everytime for the first element we need to check if it is within the window

// logic: if there is a later element that is the max there is no chance that the older smaller elements can become the max so they are removed from the queue
// an incoming smaller number will take its place in the queue, but can be eliminated by a newer larger number
