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
            if (map.has(compliment)) {
                return [i, map.get(compliment)];
            } else {
                map.set(nums[i], i);
            }
        }
    }
}

// HashMap
    // LOOP though nums
        // for each num check if it has a compliment adding which would give us the target
        // IF compliment exists in the map
            // return both the idices
        // ELSE
            // add to hashmap num: index 

// num1 + num2 = target => num2 = target - num1
