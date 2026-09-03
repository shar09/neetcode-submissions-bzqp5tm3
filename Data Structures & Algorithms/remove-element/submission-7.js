class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0, j = nums.length - 1;

        while(i <= j) {
            if (nums[i] === val) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                j--;
            } else {
                i++;
            }
        }

        return i;
    }
}

// i = 0, j = len - 1;
// while (i < j)
    // if nums[i] == val
        // swap nums[i] and nums[j]
        // j--;
    // else
        // i++;

