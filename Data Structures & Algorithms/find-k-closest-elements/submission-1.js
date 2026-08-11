class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0, r = l + k - 1;

        while (r < arr.length) {
            if (r === arr.length - 1) {
                return arr.slice(-k);
            }

            const leftMostValue = Math.abs(arr[l] - x);
            const rightIncomingValue = Math.abs(arr[r + 1] - x);

            if (leftMostValue === rightIncomingValue && arr[l] === arr[r + 1]) {
                r += 1;
                l += 1;
            } else if (leftMostValue <= rightIncomingValue) {
                return arr.slice(l, r + 1);
            } else {
                r += 1;
                l += 1;
            }
        }
    }
}

// [2, 4, 5, 8]

// window = 2
// l = 0, r = l + window.length - 1;

// while (r <= arr.length - 1)
// IF | arr[l] - x | <= | arr[r + 1] - x|
    // return all elements within that window
// ELSE
    // move window by to r + 1
    // move l