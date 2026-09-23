class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const set = new Set(nums);

        let num = 1;

        while (num < nums.length + 1) {
            if (!set.has(num)) return num;

            num++; 
        }

        return num;
    }
}

// -2, -1, 0; 1

// 1, 2, 4 = 3

// sorting - O(n log n);
// 0(n) - hashmap? store all the values in a hashset
// start at from 1 and check if it present in hashset
// keep incrementing until the number does not exist in the hashmap