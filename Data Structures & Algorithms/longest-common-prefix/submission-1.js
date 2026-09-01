class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let output = strs[0];

        for (const str of strs) {
            for (let i = 0; i < output.length; i++) {
                if (str[i] !== output[i]) {
                    output = output.slice(0, i);
                    break;
                }
            }
        }

        return output;
    }
}

// [bat, bag, band, bank]
// ba

// brute force:
// incrementally check all strings, starting from first letter
// once there is a mismatch return the string
// time = 200 * 200
