class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0, r = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let totalTrappedWater = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                totalTrappedWater += Math.max(leftMax - height[l], 0);

                if (height[l] > leftMax) leftMax = height[l];

                l++;
            } else {
                totalTrappedWater += Math.max(rightMax - height[r], 0);

                if (height[r] > rightMax) rightMax = height[r];

                r--;
            }
        }

        return totalTrappedWater;
    }
}

// calculate trapped water
// move l or r
// update lmax or rmax if possible
