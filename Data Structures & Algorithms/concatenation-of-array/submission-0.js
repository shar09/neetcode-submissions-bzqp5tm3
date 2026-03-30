class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const nums2 = new Array(nums.length * 2);

        for (let i=0; i<nums.length; i++) {
            nums2[i] = nums[i];
        }

        for (let j=0; j<nums.length; j++) {
            nums2[j+nums.length] = nums[j];
        }

        return nums2;
    }
}
