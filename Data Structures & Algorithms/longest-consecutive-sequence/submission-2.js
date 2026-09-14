class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let count = 0;

        for (const num of nums) {
            if (set.has(num - 1)) continue;
            
            let currentCount = 1;
            let nextNum = num + 1;

            while (set.has(nextNum)) {
                currentCount++;
                nextNum++;
            }

            count = Math.max(count, currentCount);
        }

        return count;
    }
}

// create a hashset of the array

// loop through the array and see if it is start of a sequence
    // if it is start of a sequence
        // then keep incrementing and check if the next number exists in the hashset
    // else
        // move to next number in the array


