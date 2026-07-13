class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0, k = 0;

        while (i < nums.length) {
            if (nums[i] !== nums[i - 1]) {
                nums[k] = nums[i];
                k++;
            }

            i++;
        }

        return k;
    }
}

// i, k

// since the array elements are in sorted order
// duplicate elements will be side by side

// i -> scanner
// k -> is the invariant

// start i and k at 0

// if you encounter a duplicate // nums[i] === nums[i-1]

// then do not incerement

// [1, 1, 1, 2, 3, 4]