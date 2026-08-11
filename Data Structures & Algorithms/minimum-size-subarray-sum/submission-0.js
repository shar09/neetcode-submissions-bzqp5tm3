class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minWindowSize = nums.length + 1;

        let l = 0, r = 0;
        let sumOfWindow = 0;

        while (r < nums.length) {
            sumOfWindow += nums[r];
            if (sumOfWindow < target) {
                r++;
            } else {
                while (sumOfWindow >= target) {
                    minWindowSize = Math.min(minWindowSize, r - l + 1);
                    sumOfWindow -= nums[l];
                    l++;
                }
                r++;
            }
        }

        return minWindowSize === nums.length + 1 ? 0 : minWindowSize;
    }
}

// minWindowSize = nums.length + 1;
// start l at 0 and r at 0
    // while r < nums.length
    // move r until sum of the window >= target
        // update min window size
        // keep skrinking l until sum of window < target
        // update min widnow size


