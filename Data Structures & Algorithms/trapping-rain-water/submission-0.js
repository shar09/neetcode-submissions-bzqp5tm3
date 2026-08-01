class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxLeft = [], maxRight = [];
        let maxLeftSoFar = 0, maxRightSoFar = 0;
        let totalRainWater = 0;

        for (let i = 0; i < height.length; i++) {
            const prevHeight = height[i - 1] ?? 0;

            maxLeftSoFar = Math.max(maxLeftSoFar, prevHeight);
            maxLeft[i] = maxLeftSoFar;
        }

        for (let j = height.length - 1; j >= 0; j--) {
            const nextHeight = height[j + 1] ?? 0;

            maxRightSoFar = Math.max(maxRightSoFar, nextHeight);
            maxRight[j] = maxRightSoFar;
        }

        for (let k = 0; k < height.length; k++) {
            const containerHeight = Math.min(maxLeft[k], maxRight[k]);
            const waterContent = containerHeight - height[k];

            totalRainWater += waterContent > 0 ? waterContent : 0;
        }

        return totalRainWater;
    }
}

// logic: start with one container at a time
// for any given container the amount of water that can stored is:
    // maxLeft height so far
    // maxRight height so far
    // min (maxLeft, maxRight) - height[i]
