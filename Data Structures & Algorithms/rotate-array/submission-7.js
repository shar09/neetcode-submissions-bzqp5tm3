class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        // let newK = k % nums.length;

        // if (newK === 0) return;
        
        // const rotatedArray = nums.slice(-newK).concat(nums.slice(0, nums.length - newK));

        // for (let i = 0; i < rotatedArray.length; i++) {
        //     nums[i] = rotatedArray[i];
        // }

        nums.reverse();
        let newK = k % nums.length;
        let l = 0, r = newK - 1;

        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }

        l = newK, r = nums.length - 1;

        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }
}

//  0  1. 2. 3. 4. 5. 6. 7
// [1, 2, 3, 4, 5, 6, 7, 8] length = 8
// k = 4

// k % 0 returns NaN

// O(1) space
// think of the array as 2 separate blocks
// A = (0, len - k)
// B = (k, len)
// AB -> BA
// reverse array once
// reverse B
// reverse A

// 0   1. 2. 3  4  5. 6
// [1, 2, 3, 4, 5, 6, 7]
// len = 8
// k = 3
// 0.  1 2.  3. 4. 5. 6
// [7, 6, 5, 4, 3, 2, 1]