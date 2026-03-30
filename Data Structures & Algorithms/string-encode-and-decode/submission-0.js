class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';
        for(const str of strs) {
            const strLength = str.length.toString();
            encodedString = encodedString + strLength + '#' + str;
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];
        let trimmedStr = str; 
        
        while(trimmedStr.length > 0 ) {
            const delimiterIndex = trimmedStr.indexOf('#');
            const lengthOfWord = Number(trimmedStr.substring(0, delimiterIndex));
            const endOfWordIndex = delimiterIndex + lengthOfWord;

            const word = trimmedStr.substring(delimiterIndex + 1, endOfWordIndex + 1);
            strs.push(word);
            
            if(trimmedStr[endOfWordIndex + 1]) {
                trimmedStr = trimmedStr.substring(endOfWordIndex + 1);
            } else {
                trimmedStr = '';
            }
        }
        
        return strs;
    }
}

//Pseudo code: decode
// '4#abcd5#poklj'
// 

