class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const correctedK = k % nums.length;
        const rotationPoint = nums.length - correctedK;
        
        const rotatedArray = nums.slice(rotationPoint).concat(nums.slice(0, rotationPoint));

        for (let i = 0 ; i < rotatedArray.length; i++) {
            nums[i] = rotatedArray[i];
        }
    }
}

// If k is length of the array then array will be back in its original form

// that means if k > array length then we need to mod k to get the correct rotated array

// newK = k % array length 

// 0  1. 2  3.  4. 5. 6. 7 
// [1, 2, 3, 4, 5, 6, 7, 8]