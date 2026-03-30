class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();

        for (const num of nums) {
            if(map.has(num)) {
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1);
            }
        }

        let max = 0;
        let majorityElement;
        for (const [key, value] of map.entries()) {
            if (value > max) {
                majorityElement = key;
                max = value;
            }
        }

        return majorityElement;
    }
}

