class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let i = 0, j = i + 1;

        while (i < nums.length) {
            while (j - i <= k) {
                if (nums[j] === undefined) break;
                if (nums[i] === nums[j]) return true;
                j++;
            }
            i += 1;
            j = i + 1;
        }

        return false;
    }
}