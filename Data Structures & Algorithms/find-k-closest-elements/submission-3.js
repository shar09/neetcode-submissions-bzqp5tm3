class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let i = 0, j = i + k;

        while (j < arr.length) {
            const firstElementInWindow = arr[i];
            const incomingElementInWindow = arr[j];

            const distanceToFirst = Math.abs(firstElementInWindow - x);
            const distanceToIncoming = Math.abs(incomingElementInWindow - x);        

            if (distanceToFirst > distanceToIncoming || (distanceToFirst === distanceToIncoming && firstElementInWindow === incomingElementInWindow )) {
                i++;
                j++;
            } else {
                break;
            }
        }

        return arr.slice(i, j);
    }
}


// [2, 4, 5, 8] -> x = 6

// 2 - 6 = 4
// 4 - 6 = 2
// 5 - 6 = 1
// 8 - 6 = 2

// since k = 2, we return 4 and 5

// so basically we will be returning a window of length 2
// how do we decide where the window starts and where it ends?

// fixed sliding window?

// start i and j at 0
// expand j until k

// once window length === k

// check if |j + 1 - x| < |i - x|, if it is then move the window
// else return the existing window



// edge case: [1, 1, 1, 10, 10, 10] k = 1, x = 9
// if incoming element is same distance and it is also the same element as i
// then move the window
