class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1;
        let postfix = 1;

        const res = [];

        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }
        
        for (let j = nums.length - 1; j >= 0; j--) {
            res[j] = res[j] * postfix;
            postfix = nums[j] * postfix;
        }

        return res;
    }
}

// [1, 2, 4, 6] -> nums

// [1, 1, 2, 8] -> prefix

// [48, 24, 6, 1] -> postfix

// [48, 24, 12, 8] -> result

// index:          0 1 2 3

// nums:           1 2 4 6

// prefix:         1 1 2 8

// prefix running: 1 2 8 48 // keep track in a variable

// postfix:        48 24 6 1 // do not have yet

// postfix running:48 48 24 6 // hence we need to keep track of a running postfix

// result:         48 48 12 8





