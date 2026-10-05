class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();

        let i = 0, j = 0;
        let mostSignificantCharacterCount = 0;
        let maxLength = 0;

        while (j < s.length) {    
            const character = s[j];

            map.set(character, (map.get(character) ?? 0) + 1);

            mostSignificantCharacterCount = Math.max(mostSignificantCharacterCount, map.get(character));

            while (j - i + 1 - mostSignificantCharacterCount > k) {
                map.set(s[i], map.get(s[i]) - 1);
                i++;

                let newMostSignificantCharacterCount = 0;
                for (const [key, value] of map) {
                    newMostSignificantCharacterCount = Math.max(newMostSignificantCharacterCount, value);
                }

                mostSignificantCharacterCount = newMostSignificantCharacterCount;
            }

            maxLength = Math.max(maxLength, j - i + 1);
            j++;
        }

        return maxLength;
    }
}

// AAABABB
// 0123456

// in any given window we need to replace the most distinct character

// hashmap

// a: 4
// b: 5

// store the frequency of the characters in a hashmap
// once k becomes 0
// window length

// pseudo code:
// start i at 0, j at 0
// store the j element in hasmap frequency counter
// incremenent j until non distinct character is found
// once non distinct element is found
// add that element to the frequency counter
// and decrement k

// once k becomes 0
// calculate the max length and update it if needed
// decrement the window start at i
// reduce the count of the element in hashmap
// now in the current window another element may become the most distinct element

// xyyyx
