class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if (nums.length === 0) return 0;

        if (val > 50) return nums.length - 1;

        let counter = 0;
        
        while (nums[counter] !== undefined) {
            if (nums[counter] === val) {
                nums.splice(counter, 1)
                continue;
            }
            counter++;
        }

        return nums.length;
    }
}

// counter = 0
// if (num === val) then remove element, do not increase counter
// else increase counter

// while loop
