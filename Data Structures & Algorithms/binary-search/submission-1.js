class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, high = nums.length - 1;
        let mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return nums[low] === target ? low : -1;
    }
}
