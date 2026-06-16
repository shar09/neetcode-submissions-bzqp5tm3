class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let prefixSumNums = [];
        let prefixSum = 0;

        for (const num of nums) {
            prefixSum += num;

            prefixSumNums.push(prefixSum);
        }

        for (let i = 0; i < nums.length; i++) {
            const left = i === 0 ? 0 : prefixSumNums[i - 1];
            const right = i === nums.length - 1 ? 0 : prefixSumNums[nums.length - 1] - prefixSumNums[i];

            if (left === right) return i;
        }

        return -1;
    }
}
