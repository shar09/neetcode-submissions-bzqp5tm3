class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0, r = nums.length -1, i = 0;

        while (i <= r) {
            if (nums[i] === 0) {
                [nums[i], nums[l]] = [nums[l], nums[i]];
                l++;
                i++;
            } else if (nums[i] === 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
            } else {
                i++;
            }
        }

        return nums; 
    }
}

// 2 pass:
// 2 pointers
// i scouting
// k is swap
// if i === 0
    // swap with k
    // k++

// 1 pass:
// 3 pointers

// l: start from 0
// r: start from nums.length - 1
// l and r are swap pointers
// i is scouting

// if i === 0
    // swap with l
    // can increment i because we know what l is. it is a 1
    // l++;
// if i === 2
    // swap with r

    // dont increment i because we still do not know what r is

