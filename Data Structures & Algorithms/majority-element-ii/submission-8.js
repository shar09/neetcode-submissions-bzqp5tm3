class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let majorityElementOne = null, majorityElementTwo = null
        let count1 = 0, count2 = 0
        const output = [];

        for (const num of nums) {
            if (num === majorityElementOne) {
                count1++;
            } else if (num === majorityElementTwo) {
                count2++;
            } else if (count1 === 0) {
                majorityElementOne = num;
                count1 = 1;
            } else if (count2 === 0) {
                majorityElementTwo = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        count1 = 0;
        count2 = 0;

        for (const num of nums) {
            if (num === majorityElementOne) count1++;
            else if (num === majorityElementTwo) count2++;
        }

        if (count1 > Math.floor(nums.length / 3) && majorityElementOne !== null) output.push(majorityElementOne);
        if (count2 > Math.floor(nums.length / 3) && majorityElementTwo !== null) output.push(majorityElementTwo);

        return output;
    }
}