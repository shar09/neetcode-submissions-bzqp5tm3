class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function isPalindrome(start, end) {
            while (start < end) {
                if (s[start] !== s[end]) {
                    return false;
                }

                start++;
                end--;
            }

            return true;
        }

        let i = 0, j = s.length - 1;

        while (i <= j) {
            if (s[i] !== s[j]) {
                return isPalindrome(i, j - 1) || isPalindrome(i + 1, j);
            }
            
            i++;
            j--;
        }

        return true;
    }
}

// main trick:
    // once we see a mismatch
        // we need to check both sides from there. i.e
            // check i === j--

            // also check i++ === j

// instead of repeating the palindrome check in multiple while loops, can we create a helper function which accepts index start and end points checks for palidrome?

// below code is also not fully ideal. better way to think of it this keep moving i and j until a mismatch occurs, then from there use a helper function that can return a boolean.

    // validPalindrome(s) {
    //     function isPalindrome(start, end) {
    //         while (start < end) {
    //             if (s[start] !== s[end]) {
    //                 return [start, end];
    //             }

    //             start++;
    //             end--;
    //         }

    //         return [start, end];
    //     }

    //     let i = 0, j = s.length - 1;
    //     const firstPossibleMismatch = isPalindrome(i, j);
    //     [i, j] = firstPossibleMismatch;

    //     if (i >= j) return true;

    //     const secondPossibleMismatch = isPalindrome(i + 1, j);
    //     if (secondPossibleMismatch[0] >= secondPossibleMismatch[1]) return true;

    //     const thridPossibleMismatch = isPalindrome(i, j - 1);
    //     if (thridPossibleMismatch[0] >= thridPossibleMismatch[1]) return true;

    //     return false;
    // }
