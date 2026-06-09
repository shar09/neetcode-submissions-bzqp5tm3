class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';

        for (const str of strs) {
            encodedString += String(str.length) + '#' + str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedArray = [];

        let i = 0, j = 0;
    

        while (i < str.length) {
            let wordLength = 0;
            let word;
            while (str[j] !== '#') {
                j += 1;
            }

            wordLength = Number(str.substring(i, j));
            word = str.substring(j + 1, j + 1 + wordLength);

            decodedArray.push(word);
            i = j + 1 + wordLength;
            j = i;
        }

        return decodedArray;
    }
}

// 5#Hello5#World

// decode
// use i and j
// use j to read length of string
// read string using i to len
// move i and j to new indexes + len
// repeat for every word

// encode
// loop through strs
// for each str add length and delimiter at the start of the string

// read delimiter
// append characters until you encounter hash
// read length found
// repeat