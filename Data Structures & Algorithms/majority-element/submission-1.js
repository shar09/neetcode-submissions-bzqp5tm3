class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let lastManStanding;
        let count = 0;

        for (const num of nums) {
            if (count === 0) {
                lastManStanding = num;
                count = 1;
                continue;
            } else {
                if (num === lastManStanding) count += 1;
                else count -= 1;
            }
        }

        return lastManStanding;
    }
}
