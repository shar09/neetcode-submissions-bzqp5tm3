class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let longestLengthFound = 0;
        let i = 0, j = 0;

        while (j < s.length) {
            const character = s[j];

            if (set.has(character)) {
                const length = j - i;

                if (length > longestLengthFound) {
                    longestLengthFound = length;
                }

                while (set.has(character)) {
                    set.delete(s[i]);
                    i++;
                }
            }

            set.add(character);
            j++;
        }

        longestLengthFound = Math.max(longestLengthFound, j - i);

        return longestLengthFound;
    }
}

// pwwkew
// 012345

// pekye

// abcdef

// zxyz
// 0123
// use hashset to store the values in window
// keep expanding until duplicate is found
// once duplicate is found
//     update longeststring value if applicable
//     shrink the left - remove the value from hashset

// xxx
