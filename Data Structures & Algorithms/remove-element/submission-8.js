class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0, j = 0;

        while (j < nums.length) {
            if (nums[j] === val) {
                j++;
            } else {
                nums[i] = nums[j];
                i++;
                j++;
            }
        }

        return i;
    }
}

// [3, 2, 2, 3]
// ij

// is nums[j] == val?
    // do not do anything
    // increment j

// is nums [j] !== val?
    // assign nums[j] to nums[i]
    // increment i and increment j