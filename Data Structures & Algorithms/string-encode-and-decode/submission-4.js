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
        const decodedStrings = [];

        let i = 0, j = 0;
        let stringLength = 0;

        while (i < str.length) {
            while (str[j] !== '#') {
                j++;
            }

            stringLength = Number(str.slice(i, j));
            i = j + 1;
            decodedStrings.push(str.slice(i, i + stringLength));

            i = i + stringLength;
            j = i;
        }

        return decodedStrings; 
    }
}

// encode:
    // initialize a new encodedString variable
    // LOOP over strs array
        // for each string get the length of string and append it to the
        // start of the string with a unique character like a '#'
        // append this new encoded string to the variable
    // return encodedString variable

// decode:
    // intialize new array
    // use 2 pointers i and j
    // start i and j at 0
    // increment j until '#' is encountered
    // at this point we have the length of the string
    // move i to j + 1 and get the string using the length
    // push the string to the array
    // i = i + length of string
    // j = i
    // 

// 5#hello5#world

