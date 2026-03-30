class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;

        for(let i = 0; i < nums.length; i++) {
            if (nums[i] === val) continue;

            nums[k] = nums[i];
            k++;
        }
        return k;
    }
}

// Constraints:
// first k elements in array should not contain val
// first k elements can be anything except val

// now for the solution:
// [1, 1, 2, 3, 4]

// keep a pointer k;