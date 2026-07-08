class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let i = 0, j = s.length - 1;

        function checkPalindrome(left, right) {
            while (left < right) {
                if (s[left] === s[right]) {
                    left++;
                    right--;
                } else {
                    return false;
                }
            }

            return true;   
        }

        while (i < j) {
            if (s[i] !== s[j]) {
                return checkPalindrome(i + 1, j) || checkPalindrome(i, j - 1);
            } else {
                i++;
                j--;
            }
        }

        return true;
    }
}


// for each delete we need to check if palindrome is possible from both sides
// pointers start at 0 and len - 1;
    // at delete check i + 1, j and j - 1, i paths