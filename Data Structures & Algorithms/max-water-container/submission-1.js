class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let maxWater = 0;
        let lowerHeightIndex;

        while (i < j) {
            if (heights[i] < heights[j]) {
                lowerHeightIndex = i;
            } else {
                lowerHeightIndex = j;
            }

            maxWater = Math.max(heights[lowerHeightIndex] * (j - i), maxWater);

            if (lowerHeightIndex === i) i++;
            else j--;
        }

        return maxWater;
    }
}

//  0  1. 2  3. 4. 5  6. 7
// [1, 7, 2, 5, 4, 7, 3, 6]

// start i at 0 and j at len - 1

// calculate total water that can be saved between the:
    // lowest height between i and j * j - i

// if i < j
    // i++
// else
    // j--

