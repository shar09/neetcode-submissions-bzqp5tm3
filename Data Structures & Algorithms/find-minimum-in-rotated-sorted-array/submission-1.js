class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0, high = nums.length - 1;
        let mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            if (nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return nums[low];
    }
}

// start low at 0 and high at nums.length - 1?

// why nums.length - 1? because we need to compare mid with high

// updating mid value:
    // if mid > high
        // low = mid + 1
    // else
        // high = mid

// low and high will meet at the minimum number
    // because either low or high will stay stuck at the minimum number and one of them will meet the other at the minimum mid point

// return low or high