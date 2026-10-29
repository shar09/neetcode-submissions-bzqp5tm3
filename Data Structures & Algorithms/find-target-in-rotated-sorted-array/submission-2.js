class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, high = nums.length - 1;
        let mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            if (nums[mid] > nums[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
            
            mid = low + Math.floor((high - low) / 2);
        }

        let rotationPoint = low;

        low = 0, high = nums.length;
        
        if (rotationPoint !== 0 && target >= nums[low] && target > nums[rotationPoint]) {
            high = rotationPoint;
        } else {
            low = rotationPoint;
        }

        mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            if (nums[mid] > target) {
                high = mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                return mid;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return nums[low] === target ? low : -1;
    }
}

// find the rotated point

// search either left half or right half
