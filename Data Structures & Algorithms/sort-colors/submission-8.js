class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let i = 0, j = nums.length - 1, k = 0;

        while (k <= j) {
            if (nums[k] === 0) {
                [nums[i], nums[k]] = [nums[k], nums[i]];
                k++;
                i++;
            } else if (nums[k] === 2) {
                [nums[k], nums[j]] = [nums[j], nums[k]];
                j--;
            } else {
                k++;
            }
        }

        return nums;
    }
}

// 2 pointers:

// 2 pass:

// In the first pass:
    // i = 0, j = 0
    // if i === 1
        // swap
        // j++;
    // else
        // continue;

// In second pass:
    // i = length - 1 = swapIndex
    // while i > j
    // if j === 2
        // swap
        // swap index++
        // i--;
    // else
        // continue

        // let i = 0, j = 0;
        
        // while (i < nums.length) {
        //     if (nums[i] === 0) {
        //         [nums[i], nums[j]] = [nums[j], nums[i]];
        //         j++;
        //     }
        //     i++;
        // }

        // let k = nums.length - 1, l = nums.length - 1;
        // while (k >= j) {
        //     if (nums[k] === 2) {
        //         [nums[k], nums[l]] = [nums[l], nums[k]];
        //         l--;
        //     }

        //     k--;
        // }

        // return nums;


// one pass:
    // i = 0, j = nums.length - 1, k = 0;

    // if k === 0
        // swap i, k i++, k++
    // if k === 2
        // swap j, k j--, no k++