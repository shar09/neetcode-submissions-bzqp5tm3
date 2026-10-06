class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let i = 0, j = 0;
        let minimumWindow = 100001;
        let sum = 0;

        while (j < nums.length) {
            sum += nums[j];
            j++;

            while (sum >= target) {
                minimumWindow = Math.min(minimumWindow, j - i);
                sum -= nums[i];
                i++;
            }
        }

        return minimumWindow < 100001 ? minimumWindow : 0;
    }
}


// variable size sliding window

// since all numbers in array positive we do not need to start a new window when sum < 0

// while j < len
    // expand window until sum >= target
        // calulcate min length
        // shrink from left until sum < target