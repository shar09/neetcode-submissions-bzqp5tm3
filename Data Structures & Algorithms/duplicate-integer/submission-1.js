class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set();

        for (const num of nums) {
            if (numsSet.has(num)) return true;

            numsSet.add(num);
        }

        return false;
    }
}

// 1. sort the array
    // if nums[i] === nums[i+1] return true 

// 2. create a hashmap
    // if nums[i] exists in hashmap return true