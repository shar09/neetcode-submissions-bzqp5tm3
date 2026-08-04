class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();

        let l = 0, r = 0;
        let maxLength = 0;

        while (r < s.length) {
            const value = s[r];

            while (set.has(value)) {
                set.delete(s[l])
                l++;
            }


            set.add(value);
            maxLength = Math.max(1 + (r - l), maxLength);
            r++;
            
        }

        return maxLength;
    }
}

// start l and r at 0
// add value at r to hashset
// keep incrementing r until value not found in hashset
// if duplicate found in hashset
// calculate string length 1 + (r - l)
// update maxLength
// set l to r 
