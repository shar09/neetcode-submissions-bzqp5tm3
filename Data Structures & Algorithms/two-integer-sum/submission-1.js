class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (hashMap.has(num)) {
                const numInHashMap = hashMap.get(num);
                if (Array.isArray(numInHashMap)) {
                    hashMap.set(num, numInHashMap.concat(i));
                } else {
                    hashMap.set(num, [numInHashMap].concat(i));
                }
            } else {
                hashMap.set(num, i);
            }
        }

        for (let j = 0; j < nums.length; j++) {
            const num = nums[j];
            const compliment = target - num;

            const hashMapCompliment = hashMap.get(compliment);

            if (hashMap.has(compliment)) {
                if (Array.isArray(hashMapCompliment)) {
                    for (const index of hashMapCompliment) {
                        if (index !== j) return [j, index];
                    }                    
                } else {
                    if (hashMapCompliment !== j) return [j, hashMapCompliment]
                }
            }
        }
    }
}

// Idea: HashMap
// Store all the elements of the in the hashmap
// num: index
// Loop through nums
// check if hasmap has value: target - num and the index values should not match
// if matches then return indexes such that smaller index is returned first

// one issue: not an issue
// num in hashmap can be multiple, in this case we need to store the indexes as an array

// Pseudo code:
// Create a hasmap
// FOR loop through nums
    // store num and index value in hashmap

// FOR loop through nums
    // check if hashmap has value: target - num and the index values should not match
    // if matches then return indexes such that smaller index is returned first
