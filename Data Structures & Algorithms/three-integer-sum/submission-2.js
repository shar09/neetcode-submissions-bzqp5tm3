class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.toSorted((a, b) => a - b);
        const output = [];

        for (let k = 0; k < sortedNums.length; k++) {
            if (k > 0 && sortedNums[k] === sortedNums[k - 1]) continue;
            
            let i  = k + 1, j = sortedNums.length - 1;
            
            while (i < j) {
                while (i - 1 !== k && sortedNums[i] === sortedNums[i - 1] && i < j) {
                    i++;
                }

                while (j + 1 !== sortedNums.length && sortedNums[j] === sortedNums[j + 1] && i < j) {
                    j--;
                }

                if (i >= j) break;

                const sum = sortedNums[k] + sortedNums[i] + sortedNums[j];
                
                if (sum === 0) {
                    output.push([sortedNums[k], sortedNums[i], sortedNums[j]]);
                    i++;
                    j--;
                } else if (sum > 0) {
                    j--;
                } else if (sum < 0) {
                    i++;
                }
            }
        }

        return output;
    }
}

// brute force: o(n) cube
    // ijk
        // i = 0; i < nums.length
            // j = 1; j < nums.length
                // k = 2; k < nums.length

// optimize: o(n) square
    // sort the array
    // use two pointers for inner loop

// how to avoid duplicate triplets?
    // since the numbers are sorted
        // if k === k - 1, k++
        // if i === i - 1, i++
        // if j === j + 1, j--
 
