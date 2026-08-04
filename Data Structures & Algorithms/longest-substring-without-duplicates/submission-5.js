class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map();
        let l = 0;
        let maxLength = 0;

        for (let r = 0; r < s.length; r++) {
            const character = s[r];
            if (map.has(character)) {
                if (map.get(character) >= l) {
                    l = map.get(character) + 1;
                }
            }
            
            map.set(character, r);
            maxLength = Math.max(r - l + 1, maxLength);     
        }

        return maxLength;
    }
}
