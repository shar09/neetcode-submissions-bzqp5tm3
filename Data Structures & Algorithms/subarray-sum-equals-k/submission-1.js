class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0, prefixSum = 0;

        const psMap = new Map();
        psMap.set(0, 1)

        for (const num of nums) {
            prefixSum += num;

            const compliment = prefixSum - k;

            if (psMap.has(compliment)) {
                count += psMap.get(compliment);
            }

            if (psMap.has(prefixSum)) {
                psMap.set(prefixSum, psMap.get(prefixSum) + 1);
            } else {
                psMap.set(prefixSum, 1);
            }
        }

        return count;   
    }
}

// Idea:

// Brute force O(n)2
    // start i and j at 0
    // check every subarray by using double for loop

// Prefix sums?
// How can we check for previous prefix sums removing which from prefix[j] will give us k
    // Can we use a hashmap to store all previous prefix sums

// Pseudo code:
    // create count and prefix variables with value 0
    // create a hashmap with entry 0: 1
    // loop through nums
        // calculate prefix
        // check if prefix - k is present in hashmap
        // if present then add the count to count variable
        // add current prefix sum to hashmap
            // if prefix already present increment the count
    // return count;

// sum (i -> j) = k
// prefix [j] - prefix[i - 1] = k
// prefix - k = prefix [i - 1]: find in hashmap


