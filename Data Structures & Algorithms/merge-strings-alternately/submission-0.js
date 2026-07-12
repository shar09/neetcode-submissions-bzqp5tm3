class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0, j = 0;
        let newWord = '';

        while (i < word1.length && j < word2.length) {
            newWord += word1[i] + word2[j];
            i++;
            j++;
        }

        if (i < word1.length) newWord += word1.slice(i);
        if ( j < word2.length) newWord += word2.slice(j);

        return newWord;
    }
}
