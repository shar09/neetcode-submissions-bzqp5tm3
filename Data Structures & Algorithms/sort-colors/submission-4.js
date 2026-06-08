class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0, r = nums.length - 1;
        let i = 0;
        while (i <= r) {
            if (nums[i] === 0) {
                [nums[i], nums[l]] = [nums[l], nums[i]];
                l++;
                i++;
            } else if (nums[i] === 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
            } else {
                i++;
            }
        }
    }
}

// [1, 0, 1, 2]
// l         r
// l is invariant for 0
// r is invariant for 2
// if i === 0 swap with l, l++, i++
// if i === 2 swap with r, only r--