class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let num1 = null, num2 = null, count1 = 0, count2 = 0;
        const result = [];

        for (const num of nums) {
            if (num1 === num) {
                count1 += 1;
                continue;
            }

            if (num2 === num) {
                count2 += 1;
                continue;
            }

            if (num1 === null) {
                num1 = num;
                count1 += 1;
                continue;
            }

            if (num2 === null) {
                num2 = num;
                count2 += 1;
                continue;
            }
        
            count1 -= 1;
            count2 -= 1;

            if (count1 === 0) num1 = null

            if (count2 === 0) num2 = null
        }

        if (num1 === null && num2 === null) return [];

        count1 = 0, count2 = 0;

        for (const num of nums) {
            if (num === num1) count1 += 1;
            if (num === num2) count2 += 1;
        }    

        if (count1 > nums.length / 3) result.push(num1);
        if (count2 > nums.length / 3) result.push(num2);

        return result;
    }
}

// majority element

// -> 2 different numbers cancel out each other everytime
// -> eventually the majority number survives

// majority elemenet 2

// -> 3 different numbers cancel out each other everytime

// num1 = 2
// num2 = 5

// count1 = 4
// count2 = 1

// [5, 2, 3, 2, 2, 2, 2, 5, 5, 5]

// -> Edge cases:
// Output: there can be only one majority number, 2 majority numbers or no majority numbers

// Pseudo code:

// declare num1 = null, num2 = null, count1 = 0, count2 = 0

// FOR loop nums:
//     IF num1 === null
//         num1 = num
//         count1 += 1
//         countiue
    
//     IF num2 === null
//         num2 = num
//         count2 += 1
//         countiue
    

//     IF num1 === num
//         count1 += 1
//         countiue

//     IF num2 === num
//         count2 += 1
//         countiue
    
    
//     count1 -= 1;
//     count2 -= 1;

//     IF count1 === 0
//         num1 = null

//     IF count2 === 0
//         num2 = null



