class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        const set = new Set(nums);
        let res = 1;

        for (const num of nums) {
            if (set.has(num - 1)) {
                continue;
            } else {
                let nextNum = num + 1;
                let streak = 1;

                while (set.has(nextNum)) {
                    streak += 1;
                    nextNum += 1;
                }

                res = Math.max(streak, res);
            }
        }

        return res;
    }
}

// convert the nums array into a hash set

// for each num check if it is the start of a sequence
    // if it is not continue
    // if it is then look keep looking for next element until you reach end the streak
        // update res if best streak is found
