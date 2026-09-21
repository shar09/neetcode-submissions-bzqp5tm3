class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefixSum = 0;
        let count = 0;
        const map = new Map();

        map.set(0, 1);

        for (const num of nums) {
            prefixSum += num;

            const compliment = prefixSum - k;

            if (map.has(compliment)) {
                count += map.get(compliment);
            }

            map.set(prefixSum, (map.get(prefixSum) ?? 0) + 1);
        }

        return count;
    }
}

// prefix sums
// hashing

// for current prefix sum, we need to find how many prefix sums can be subtracted to get k

// 2, -1, 1, 2 k = 2
// 2, 1, 1, 1, 0 k = 2

// the key is to idenify that we are not trying to subtract nums[i] from nums[j] but rather prefixSum[j] - prefixSum[i - 1] ... i to j is the subarray that equals k

// we add prefix sums to map as we keep looping through nums

// trick:
    // fill hashmap with 0: 1
        // this ensures we increment count when single element === k
    // keep a running prefix count
    // in hashmap look for current prefix sum - previous prefix sums = k
        // how many subarrays can we remove from the current prefix sum to get k
        // add that number to count
