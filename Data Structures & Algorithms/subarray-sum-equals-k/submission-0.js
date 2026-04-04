class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        if (nums.length === 1) {
            if (nums[0] === k) return 1;
            else return 0;
        }

        let count = 0;
        const prefix = [];
        const map = new Map();
        map.set(0, 1);
    
        for (let i = 0; i < nums.length; i++) {
            const prefixSum = nums[i] + (prefix[i-1] ?? 0);
            prefix.push(prefixSum);
            const search = prefixSum - k;

            if (map.has(search)) {
                count += map.get(search);
            }
            
            if (map.has(prefixSum)) {
                map.set(prefixSum, map.get(prefixSum) + 1);
            } else {
                map.set(prefixSum, 1);
            }
        }

        return count;
    }
}
