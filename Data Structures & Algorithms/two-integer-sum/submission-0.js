class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i=0; i < nums.length; i++) {
            const num = nums[i];
            if (map.has(num)) {
                const value = Array.isArray(map.get(num)) ? [...map.get(num), i] : [map.get(num), i];
                map.set(num, value);
            } else {
                map.set(num, i);
            }
        }

        for (let j=0; j < nums.length; j++) {
            const num2 = nums[j];
            const findNum = target - num2;
            if (map.has(findNum)) {
                const isValueArray = Array.isArray(map.get(findNum));

                if (isValueArray) {
                    return [j, map.get(findNum)[1]];
                } else if (map.get(findNum) === j) {
                    continue;
                } else {
                    return [j, map.get(findNum)];
                }
            }
        }
    }
}

// Pseudo code:
// loop through the array and add values along with indexes to a hashmap
// loop through array again and find in hashmap i - target
// index should not be same as i

