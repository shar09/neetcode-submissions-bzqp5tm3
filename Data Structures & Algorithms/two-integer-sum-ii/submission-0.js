class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0, j = numbers.length - 1;

        while (i < j) {
            const num1 = numbers[i];
            const num2 = numbers[j]; 
            if (num1 + num2 === target) {
                return [i + 1, j + 1];
            }

            if (num1 + num2 > target) j--;
            else i++;
        }
    }
}

// [1, 2, 3, 4]
// i         j

// while (i < j)
// i + j === target return [i + 1, j + 1]
// i + j > target j--
// i + j < target i++
