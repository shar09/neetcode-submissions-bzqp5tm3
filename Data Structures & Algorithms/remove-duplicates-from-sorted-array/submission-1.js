class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0, j = 0;

        while (j < nums.length) {
            if (nums[i] !== nums[j]) {
                i++;
                nums[i] = nums[j];
            }
            j++;
        }

        return i + 1;
    }
}

// i is the write index, j is scan
// if nums[i] !== nums[j] increment i and write
