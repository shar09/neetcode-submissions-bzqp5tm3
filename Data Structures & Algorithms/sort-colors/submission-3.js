class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                [nums[i], nums[k]] = [nums[k], nums[i]];
                k++;
            }
        }

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === 1) { 
                [nums[j], nums[k]] = [nums[k], nums[j]];
                k++;
            }
        }
    }
}

// limited set of values: only 3

// make one pass: find and put all zeros at the start by swapping with 1 and 2
// make second pass starting from end of 0's: find and put all 1s in the middle. 2s will automatically go to right.

// how can we do it in one pass?
// if you find a zero put it the left
// if you find a 2 put it to the right
// 1s will automatically move to the middle