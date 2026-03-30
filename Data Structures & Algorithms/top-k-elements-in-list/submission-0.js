class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyNumsMap = new Map();

        for (const num of nums) {
            if (frequencyNumsMap.has(num)) {
                frequencyNumsMap.set(num, frequencyNumsMap.get(num) + 1);
            } else {
                frequencyNumsMap.set(num, 1);
            }
        }

        const frequencyNumsArray = Array.from(frequencyNumsMap);
        frequencyNumsArray.sort((a, b) => b[1] - a[1]);

        return frequencyNumsArray.slice(0, k).map(arr => arr[0]);
    }
}

// Pseudo code:

// Loop through nums
// Create a hashmap with each num frequency
// Sort hashmap and return first k keys