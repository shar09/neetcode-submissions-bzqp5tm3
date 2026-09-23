class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (num < 0 ) nums[i] = 0;
        }

        for (let j = 0; j < nums.length; j++) {
            const num = Math.abs(nums[j]);

            if (num > 0 && num <= nums.length) {
                const correspondingIndexValue = nums[num - 1];

                if (correspondingIndexValue === 0) {
                    nums[num - 1] = -(nums.length + 1);
                } else if (correspondingIndexValue > 0) {
                    nums[num - 1] = -correspondingIndexValue; 
                }
            }
        }

        for (let k = 0; k < nums.length; k++) {
            const num = nums[k];
            if (num >= 0) return k + 1;
        }

        return nums.length + 1;
    }
}
// 0. 1.  2. 3  4
// [1, 2, 3, 4, 5] length = 5
// -2, -1, 0; 1

// 1, 2, 4 = 3

// sorting - O(n log n);

// 0(n) time o(n) space - hashmap? store all the values in a hashset
// start from 1 and check if it present in hashset
// keep incrementing until the number does not exist in the hashmap

// code:
    // const set = new Set(nums);

    // let num = 1;

    // while (num < nums.length + 1) {
    //     if (!set.has(num)) return num;

    //     num++;
    // }

    // return num;

// how would you do this is in o(1) space?
// can we use the existing array that can work for us as a hashmap?
// in the array we do not care about negative numbers
// we can just turn them to 0s as for any number <= 0 we can say 1 is the missing number since we need to return only the missing positive
// then as we loop through nums we can map the current element value to the index in the array and mark it as negative. if a number is marked as negative that means that "index value" exists in the array; not the number itself
//  remember to do math.abs to convert the negatively marked numbers to positive
// edge cases: if a number has value > array length, we do not care about that number and we can completely skip it
// so we can skip 0s as well as nums > array length
// if a number needs to be marked as seen at an index whose value is 0 then change that zero to - nums.length + 1
// example: [2, 0, 4, 15, 1]

// instead of marking the number at the exact index, mark it at index - 1
// example: [1, 2, 3] - 3 needs to be marked at index 2 because index 3 does not exist

// turn all negative numbers to 0
// loop through nums
    // for each Math.abs(num) mark the corrspoding index - 1 value as negative
    // if already negative leave it
    // if num === 0 or num > nums.length continue;
    // if corresponding value at index - 1 is 0 then mark it as negative nums.length

// again loop through the indexes
    // if an index >= 0 is found then return index + 1

// return nums.length + 1
