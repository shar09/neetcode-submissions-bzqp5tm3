class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majorityNumber;
        let count = 0;

        for (const num of nums) {
            if (count === 0) {
                majorityNumber = num;
                count = 1;
            } else if (num !== majorityNumber) {
                count -= 1;
            } else {
                count += 1;
            }
        }

        return majorityNumber;
    }
}

// boyer moore: 2 different numbers cancel out each other
