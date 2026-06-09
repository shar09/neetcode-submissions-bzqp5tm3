class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = '';

        for (const str of strs) {
            for (let i = 0; i < str.length; i++) {
                const asciiCode = str.charCodeAt(i);

                encodedString += asciiCode + '(.#char)';
            }

            encodedString += '(.#word)'
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];

        const wordsArray = [];
        const encodedWords = str.split('(.#word)');
        
        for (let i = 0; i < encodedWords.length - 1; i++) {
            const word = encodedWords[i];
            const encodedCharacters = word.split('(.#char)');
            let decodedWord = '';
            for (let j = 0; j < encodedCharacters.length - 1; j++) {
                const value = encodedCharacters[j];
                const character = String.fromCharCode(value);

                decodedWord += character;
            }
            wordsArray.push(decodedWord);
        }

        return wordsArray;
    }
}


// you can convert the letter into ascii code separated by a delimiter '#'