class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let swapIndex = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                [nums[swapIndex], nums[i]] = [nums[i], nums[swapIndex]];
                swapIndex++;
            }
        }

        for (let j = swapIndex; j < nums.length; j++) {
            if (nums[j] === 1) {
                [nums[swapIndex], nums[j]] = [nums[j], nums[swapIndex]];
                swapIndex++;
            }
        }

        return nums;
    }
}
