class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const queue = [];
        const output = [];

        // add first k elements to queue
        for (let i = 0; i < k; i++) {
            queue.push(i);
            let lastIndexOfQueue = queue.length - 1;
            
            while (lastIndexOfQueue > 0 && nums[queue[lastIndexOfQueue]] > nums[queue[lastIndexOfQueue - 1]]) {
                queue[lastIndexOfQueue - 1] = i;
                queue.pop();

                lastIndexOfQueue -= 1;
            }
        }

        output.push(nums[queue[0]]);

        for (let j = k; j < nums.length; j++) {
            queue.push(j);
            let lastIndexOfQueue = queue.length - 1;

            while (lastIndexOfQueue > 0 && nums[queue[lastIndexOfQueue]] > nums[queue[lastIndexOfQueue - 1]]) {
                queue[lastIndexOfQueue - 1] = j;
                queue.pop();

                lastIndexOfQueue -= 1;
            }

            if (queue[0] < j - k + 1) {
                queue.shift();
            }

            output.push(nums[queue[0]]);
        }

        return output;
    }
}

// k = 3
// [1, 2, 1, 0, 4, 2, 6]

// l = 0, r = l + k - 1;

// loop over all elements of the window:
    // find max number and also the index position of that number

    // IF index position of max number > l
        // move window and compare the current max number to the newly entered number
    
    // ELSE
        // loop over all elements of the window to find the maxium number and index position

// optimize:
    // create a queue that contains all possible indexes that could possibly be the max value for that or the future windows
    // how do we know that a value might be a maximum value?

    // a value can possibly be the maximum value of window if:
        // - it is the greatest value of that window
        // - it can get into the queue by clearing at least one value in the queue


    // maintain a queue with index values. this allows us to idenitfy if the element falls within the current window
        // as a new element comes it into queue
            // WHILE new element >= element in queue
                // dequeue existing element and keep pushing new element

            // add new element to queue

// first element in queue will always be maximum element for that window


// if the biggest element comes into the queue: it will clear out all the elements in the queue

// but if the biggest element is already in the queue, the next incoming smaller element will take it's position in the queue

// once the bigger element leaves, the next smaller element will take the biggest element's place 
