class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];
            if (map.has(compliment)) return [map.get(compliment), i];

            map.set(nums[i], i);
        }
    }
}

// create a hashmap
 
// loop through nums
    // IF target - num present is map
        // return i, value
    // ELSE add to hashmap num, i
