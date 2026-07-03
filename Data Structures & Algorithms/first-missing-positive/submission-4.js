class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0) nums[i] = 0;
        }

        for (let j = 0; j < nums.length; j++) {
            const num = Math.abs(nums[j]);
            
            if (num === 0) continue;

            if (num > nums.length) continue;

            const numIndex = nums[num - 1];

            if (numIndex < 0) continue;

            if (numIndex === 0) nums[num - 1] = -(nums.length + 1);

            else nums[num - 1] = -numIndex;
        }

        for (let k = 0; k < nums.length; k++) {
            if (nums[k] >= 0) return k + 1;
        }

        return nums.length + 1;
    }
}


// We can solve this using a hashset
    // start check at 1 and keep incrementing until value is not found in the hashset

// Since we cannot use a hashset for this problem. Can we modify the array?

// What is the maximum value that the array can have?
    // array length
    // max result = array length + 1

// we do not care about negative numbers

// 1st pass: convert all negative numbers to 0

// 2nd pass: if a number is seen then mark the number at the number's 
    // index - 1 as negative
    // when looping through arrays get the abs values of numbers because we will
    // marking the numbers as negative
    // if an index value has 0 then change that to a negative array length + 1 value
    // if any number is > array length + 1 then ignore it

// 3rd pass: at each index if the number is > 0, return index + 1
    // if end of array is reached return index + 1
