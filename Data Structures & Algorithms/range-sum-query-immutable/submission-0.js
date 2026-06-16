class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefixSumNums = [];

        let prefixSum = 0;

        for (const num of nums) {
            prefixSum += num;
            this.prefixSumNums.push(prefixSum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if (left === 0) return this.prefixSumNums[right];

        return this.prefixSumNums[right] - this.prefixSumNums[left - 1];
    }
}
