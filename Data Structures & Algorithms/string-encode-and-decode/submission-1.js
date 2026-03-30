class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for (const str of strs) {
            encodedString += `${str}(<|>)`
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return str.split('(<|>)').slice(0, -1);
    }
}

// Question:
// 2 functions:

//  encode -> takes in list of strings, returns single encoded string
//  decode -> takes in single string, returns list of strings


// Psudeo code: