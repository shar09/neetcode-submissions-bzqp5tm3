class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let me = nums[0], count = 1;

        for (let i = 1; i < nums.length; i++) {
            const num = nums[i];
            if (count === 0) {
                me = num;
            } else if (me === num) {
                count += 1;
            } else {
                count -= 1;
            }
        }

        return me;
    }
}

// If a number appears more than n / 2 times in the array
// then we can cancel it with any number in the array
// in the end majority element will survive

// intialize me = nums[0], count = 1
// FOR loop nums = 1
    // IF count === 0
        // me = num
        // continue
    // IF me === num
        // count += 1
    // ELSE
        // count -= 1