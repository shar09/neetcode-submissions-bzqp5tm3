class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0, j = heights.length - 1;
        let maxWater = 0;

        while (i < j) {
            const a = heights[i];
            const b = heights[j];

            const depth = Math.min(a, b);
            const width = j - i;
            const currentWater = depth * width;
            maxWater = Math.max(maxWater, currentWater);
            
            if (a < b) i++;
            else j--;
        }

        return maxWater;
    }
}