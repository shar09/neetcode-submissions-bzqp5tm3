class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';

        for (const str of strs) {
            encodedString += str.length + '#' + str;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const output = [];
        let i = 0, j = 0;
        let stringLength = 0;
        
        while (j < str.length) {
            if (str[j] === '#') {
                stringLength = Number(str.slice(i, j));
                const startIndex = j + 1;
                const endIndex = j + 1 + stringLength;
                output.push(str.slice(startIndex, endIndex));
                i = endIndex;
                j = endIndex;
                stringLength = 0;
            } else {
                j++;
            }
        }

        return output;
    }
}
// 012345
// 4#hell

// encode:
    // strs is an array of strings
    // encode each string with length of string and a hash symbol
    // join all the strings

// decode:
    // read the length of the string until you encounter a hash symbol
    // read values after hash until length
    // add to array
