class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const anagramArray = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            const sCode = s.charCodeAt(i) - 97;
            const tCode = t.charCodeAt(i) - 97;

            anagramArray[sCode] = anagramArray[sCode] + 1;
            anagramArray[tCode] = anagramArray[tCode] - 1;
        }

        for (const num of anagramArray) {
            if (num !== 0) return false;
        }

        return true;
    }
}

// hashing and frequency counter
// fixed arrays

// Pseudo code: fixed arrays

// Check lengths of s and t are same ELSE return false
// Create an array of length 26 and fill the array with all zeros
// FOR LOOP:
    // start at 0
    // break at s.length
    // increment by 1
// for every ith character in s and t, check the charcodeAt value.
// ASCII value for small case letters a to z is 97 to 122 inclusive
// for s increment the value at index: s.charCodeAt(i) - 97
// for t decrement the value at index t.charCodeAt(t) - 97

// if s and t are anagrams then the array values will be 0
// LOOP through array
// IF any value in array is not zero then return false
// ELSE return true