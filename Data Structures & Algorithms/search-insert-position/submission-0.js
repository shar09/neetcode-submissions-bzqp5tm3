class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let low = 0, high = nums.length;
        let mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            if (nums[mid] < target) {
                low = mid + 1;
            } else if (nums[mid] > target) {
                high = mid;
            } else {
                return mid;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return high;
    }
}

// 0. 1.  2. 3  4. 5
// -1, 0, 2, 4, 6, 8

// -1 0 2 4 6 8
// 0  1 2 3 4 5 

