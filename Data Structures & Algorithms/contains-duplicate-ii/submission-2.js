class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const set = new Set();

        let i = 0, j = i + 1;
        set.add(nums[i]);

        while (j < nums.length) {
            if (j - i > k) {
                set.delete(nums[i]);
                i += 1;
            }

            if (set.has(nums[j])) return true;

            set.add(nums[j]);
            j++;
        }

        return false;
    }
}

// [1, 2, 3, 5, 4, 1]

// start i at 0, j = i + 1
// add i to set
// add j to set
// keep incrementing j and add to set
// once k is reached and no duplicate is found
// delete i
// increment i
// increment j - add j to set
// keep deleting and incrementing i and j until duplicate is found