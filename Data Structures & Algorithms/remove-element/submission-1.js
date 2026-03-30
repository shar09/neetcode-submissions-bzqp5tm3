class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if (nums.length === 0) return 0;

        if (val > 50) return nums.length;

        const tmp = [];

        for (const num of nums) {
            if (num !== val) tmp.push(num); 
        }

        for (let i=0; i<tmp.length; i++) {
            nums[i] = tmp[i];
        }

        return tmp.length;
    }
}

// counter = 0
// if (num === val) then remove element, do not increase counter
// else increase counter

// while loop
