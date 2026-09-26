class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0, j = 0;
        let output = '';

        while (i < word1.length && j < word2.length) {
            output += word1[i];
            output +=word2[j];
            i++;
            j++;
        }

        if (i < word1.length) output += word1.slice(i);
        if (j < word2.length) output += word2.slice(j);

        return output;
    }
}
