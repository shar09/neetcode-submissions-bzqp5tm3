class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let newK = k % nums.length;

        if (newK === 0) return;
        
        const rotatedArray = nums.slice(-newK).concat(nums.slice(0, nums.length - newK));

        for (let i = 0; i < rotatedArray.length; i++) {
            nums[i] = rotatedArray[i];
        }
    }
}

//  0  1. 2. 3. 4. 5. 6. 7
// [1, 2, 3, 4, 5, 6, 7, 8] length = 8
// k = 4

// k % 0 returns NaN

// O(1) space
// think of the array as 2 separate blocks
// A = (0, k)
// B = (k, len)
// AB -> BA
// reverse array once
// reverse B
// reverse A
