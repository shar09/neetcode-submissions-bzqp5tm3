class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let low = 0, high = nums.length - 1;
        let mid = low + Math.floor((high - low) / 2);

        while (low <= high) {
            if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
                if (nums[mid] === target) {
                    return true;
                } else {
                    low++;
                    high--;
                } 
            } else if (nums[low] <= nums[mid]) {
                if (nums[low] <= target && nums[mid] >= target) {
                    // binary search
                    high = mid;
                    mid = low + Math.floor((high - low) / 2);

                    while (low <= high) {
                        if (nums[mid] > target) {
                            high = mid - 1;
                        } else if (nums[mid] < target) {
                            low = mid + 1;
                        } else {
                            return true;
                        }

                        mid = low + Math.floor((high - low) / 2);
                    }

                    return false;
                } else {
                    low = mid + 1;
                }
            } else if (nums[mid] <= high) {
                if (nums[mid] <= target && nums[high] >= target) {
                    // binary search
                    low = mid;
                    mid = low + Math.floor((high - low) / 2);

                    while (low <= high) {
                        if (nums[mid] > target) {
                            high = mid - 1;
                        } else if (nums[mid] < target) {
                            low = mid + 1;
                        } else {
                            return true;
                        }

                        mid = low + Math.floor((high - low) / 2);
                    }

                    return false;
                } else {
                    high = mid - 1;
                }
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return false;
    }
}

// 1, 2, 2, 2, 2
// 2, 2, 2, 1, 2

// if low === mid === high
    

// if mid <= high
//     sorted from mid ...high

// if mid >= low
//     sorted from 0 ... mid
