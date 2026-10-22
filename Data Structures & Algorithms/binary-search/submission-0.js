class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, high = nums.length;
        let mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            if (nums[mid] > target) {
                high = mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                return mid;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return -1;
    }
}

// 4, 5, 8, 9, 10

// find mid
    // if mid > value
        // right = mid
    // else if mid < value
        // left = mid + 1
    // else
        // return mid

