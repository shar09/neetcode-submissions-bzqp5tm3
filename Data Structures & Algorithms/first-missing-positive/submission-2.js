class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        // mark all negative numbers a 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < 0) {
                nums[i] = 0;
            }
        }

        for (let j = 0; j < nums.length; j++) {
            const num = nums[j]; // current value

            // [1, 2, 0]

            if (num !== 0) {
                const absNum = Math.abs(num);

                if (absNum > nums.length) continue;

                if (nums[absNum - 1] < 0) continue;

                if (nums[absNum - 1] === 0) nums[absNum -1] = -(nums.length + 2);

                else nums[absNum - 1] = -nums[absNum - 1];
            }
        }

        let allZeros = true;

        for (let k = 0; k < nums.length; k++) {
            if (nums[k] !== 0) allZeros = false;
            if (nums[k] >= 0) return k + 1;
        }

        return allZeros ? 1 : nums.length + 1;
    }
}

// [0, 1, 2] -> len (n) 3, output -> 3
// [1, 10, 11, 12, 2, 3, 4] -> 1 ..... n 
// [1, 2, 4]
// Identify 1 (most difficult and  important): 
// no matter the input the output range can only be between 1 ..... n
// Identify 2: we do not need negative numbers. how can I use my existing array indexes
// such that we are not using an array again in those indexes
// We can convert all the negative numbers to 0, since we do not need them
// Why not convert it to 1 instead of 0? because in that case we are changing the input
// array. 1 might not exist in the array at all.
// Identify 3: How can you mark that a number has been seen?
// You can convert it to a negative number.
// When you convert it to a negative number, you are saying that the number that needs
// to be at this index has been seen. This works because we already convert all existing
// negative numbers to 0 at the begining.
// Edge case: we cannot mark 0 as negative. Which number can we use so that we are not
// modifying the input?
// We can use a number that would be out of bounds -> n + 1 

// Pseudo code:
// loop through nums i -> n
// value at i can be:
// 0, any positive number, negative number (marked as seen)
// if 0 continue;
// else
    // if Math.abs (num) > n -> continue;
    // else -> mark nums [num - 1] as negative if not already
    // if nums [num - 1] is zero, mark as negative n + 1





