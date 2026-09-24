class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let i = 0, j = s.length - 1;

        while (i < j) {
            while (i < j && !/[a-zA-Z0-9]/.test(s[i])) {
                i++;
            }

            while (i < j && !/[a-zA-Z0-9]/.test(s[j])) {
                j--;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

            i++;
            j--;
        }

        return true;
    }
}

// start i at 0, j at s.length - 1;

// while i < j
    // if s[i] not alpha numeric then
        // i++;

    // if s[j] not alpha numerix then
        // j--;

    // compare s[i] and s[j]
    // if not same return false
// return true
