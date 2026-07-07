class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let i = 0, j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) break;
            i++;
            j--;
        }

        let secondPassI = i + 1, secondPassJ = j;
        let thirdPassI = i, thirdPassJ = j - 1;


        while (secondPassI < secondPassJ) {
            if (s[secondPassI] !== s[secondPassJ]) break;
            secondPassI++;
            secondPassJ--
        }

        while (secondPassI < secondPassJ && thirdPassI < thirdPassJ) {
            if (s[thirdPassI] !== s[thirdPassJ]) return false;
            thirdPassI++;
            thirdPassJ--
        }

        return true;
    }
}

// "abdbcbda"
// i.   j

// "cupufupucu"

// 
// if not match
    // check with j with i + 1
    // if match increment i
    // else check i with j - 1
    // if match decrement j
