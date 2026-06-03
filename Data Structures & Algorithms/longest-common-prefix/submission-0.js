class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let lcp = strs[0];

        for (let i = 1; i < strs.length; i++) {
            const str = strs[i];

            let j = 0;
            while (j < lcp.length) {
                if (str[j] !== lcp[j]) {
                    break;
                }
                j++;
            }

            if (j < lcp.length) lcp = lcp.substring(0, j);
        }

        return lcp;
    }
} 

// Pseudo code:
// Intialize lcp to ''
// Loop through strs
    // lcp = str[0]
    // compare str[i] with lcp
    // where i stops, check if i < lcp.length