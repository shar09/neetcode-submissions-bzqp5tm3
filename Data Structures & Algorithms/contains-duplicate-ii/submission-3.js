class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const set = new Set();

        let i = 0, j = 0;

        while (j < nums.length) {
            const num = nums[j];
            const windowLength = j - i;
            if (set.has(num)) return true;

            set.add(num);

            if (windowLength < k) {
                j++;
            } else {
                set.delete(nums[i]);
                i++;
                j++;
            }
        }

        return false;
    }
}

// [2 1 2]
//  0.1 2   

// sliding window fixed size
    // hashset
    // start i and j at 0
        // if nums[j] is in the hashet return false
        // add to hashset
        // increment j until j - i + 1 = k
        
    
    // once the window size = k
    
    // remove nums[i] from hashset
    // increment j // add to hashset

