class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFrequencyMap = new Map();
        const windowFrequencyMap = new Map();

        for (const character of t) {
            tFrequencyMap.set(character, (tFrequencyMap.get(character) ?? 0) + 1);
        }

        let outputLength = s.length + 1;
        let bestStart;
        let l = 0, r = 0;
        let formed = 0;

        while (r < s.length) {
            const sCharacter = s[r];
            windowFrequencyMap.set(sCharacter, (windowFrequencyMap.get(sCharacter) ?? 0) + 1);

            if (windowFrequencyMap.get(sCharacter) === tFrequencyMap.get(sCharacter)) {
                formed++;
            }

            while (formed === tFrequencyMap.size) {
                if (r - l + 1 < outputLength) {
                    bestStart = l;
                    outputLength = r - l + 1;
                }

                windowFrequencyMap.set(s[l], windowFrequencyMap.get(s[l]) - 1);

                if (windowFrequencyMap.get(s[l]) < tFrequencyMap.get(s[l])) {
                    formed--;
                }

                l++;
            }

            r++;
        }

        if (outputLength === s.length + 1) return "";
        else return s.slice(bestStart, bestStart + outputLength);
    }
}
