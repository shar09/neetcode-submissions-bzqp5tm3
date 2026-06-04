class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if (nums.length === 0) return 0;
        let k = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                continue;
            } else {
                [nums[i], nums[k]] = [nums[k], nums[i]];
                k++;
            }
        }

        return k;
    }
}

// two pointers

// [3, 2, 2 ,3]
// ik
// IF i === 3;
// increment i, keep k in the position -  this needs to be swapped with a valid value
// ELSE
// swap with k
// increment i, k

// in the end we check if k value === val
// if equal then exclude k
// if not equal then include k

// if end of array reached by k then return the length of entire array