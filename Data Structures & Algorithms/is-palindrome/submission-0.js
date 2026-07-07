class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length - 1;
        const regex = /[a-z0-9]/i
        const isAlphaNumeric = (char) => regex.test(char);

        while (i < j) {
            if (!isAlphaNumeric(s[i])) {
                i++;
                continue;
            }

            if (!isAlphaNumeric(s[j])) {
                j--;
                continue;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
