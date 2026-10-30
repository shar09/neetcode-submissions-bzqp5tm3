class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0, high = nums.length - 1;
        let mid = low + Math.floor((high - low) / 2);

        while (low <= high) {
            if (nums[mid] > nums[low]) {
                if (target >= nums[low] && target <= nums[mid]) {
                    high = mid;
                    mid = low + Math.floor((high - low) / 2);

                    while (low <= high) {
                        if (nums[mid] > target) {
                            high = mid - 1;
                        } else if (nums[mid] < target) {
                            low = mid + 1;
                        } else {
                            return mid;
                        }

                        mid = low + Math.floor((high - low) / 2);
                    }

                    return -1;
                } else {
                    low = mid + 1;
                }
            } else if (nums[mid] < nums[high]) {
                if (target >= nums[mid] && target <= nums[high]) {
                    low = mid;
                    mid = low + Math.floor((high - low) / 2);

                    while (low <= high) {
                        if (nums[mid] > target) {
                            high = mid - 1;
                        } else if (nums[mid] < target) {
                            low = mid + 1;
                        } else {
                            return mid;
                        }

                        mid = low + Math.floor((high - low) / 2);
                    }

                    return -1;
                } else {
                    high = mid - 1;
                }
            } else {
                if (nums[mid] === target) {
                    return mid;
                } else {
                    low = mid + 1;
                }
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return -1;
    }
}

// 9, 7, 8, 1, 2, 3, 8

// start low at 0 and high at len - 1
    // if mid > low
        // part of first sorted half
    
    // if mid < high
        // part of second sorted half

    // mid will definitely lie in one of the halves

    // check if target lies in the found sorted half
    // else
    // move high or low to outside of mid depending on which half we are currently checking
