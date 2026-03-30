class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        if (nums.length < 3) return Array.from(new Set(nums));

        let num1 = null, num2 = null; 
        let count1 = 0, count2 = 0; 
        const output = [];

        for (const num of nums) {
            if (num1 === null && num !== num2) {
                num1 = num;
                count1 = 1;
            } else if (num2 === null && num !== num1) {
                num2 = num;
                count2 = 1;
            } else if (num === num1) {
                count1++;
            } else if (num === num2) {
                count2++;
            } else {
                count1 -= 1;
                count2 -= 1;

                if (count1 === 0) num1 = null;
                if (count2 === 0) num2 = null;
            }
        }

        count1 = 0; count2 = 0;
        for (const num of nums) {
            if (num === num1) count1++;
            if (num === num2) count2++;
        }

        if (count1 > Math.floor(nums.length / 3)) output.push(num1);
        if (count2 > Math.floor(nums.length / 3)) output.push(num2);

        return output;
    }
}

// We can at most have only 2 elements that appear more than n / 3 times
// The logic here is, we cancel out anytime we find triplets with unique values
// we cancel out all the numbers