class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const tFrequencyCounter = new Map();
        const sFrequencyCounter = new Map();

        for (const tChar of t) {
            tFrequencyCounter.set(tChar, (tFrequencyCounter.get(tChar) ?? 0) + 1);
        }

        let i = 0, j = 0;
        const distinctCharacters = tFrequencyCounter.size;
        let formed = 0;
        let minWindowLength = 100001;
        let bestLengthRange = [];

        while (j < s.length) {
            const sChar = s[j];

            sFrequencyCounter.set(sChar, (sFrequencyCounter.get(sChar) ?? 0) + 1);
            
            if (sFrequencyCounter.get(sChar) === tFrequencyCounter.get(sChar)) {
                formed += 1;

                while (formed === distinctCharacters) {
                    const windowLength = j - i + 1;

                    if (windowLength < minWindowLength) {
                        minWindowLength = windowLength;
                        bestLengthRange = [i, j + 1];
                    }

                    const sCharRemoved = s[i];
                    sFrequencyCounter.set(sCharRemoved, sFrequencyCounter.get(sCharRemoved) - 1);
                         
                    i++;

                    if (tFrequencyCounter.has(sCharRemoved) && sFrequencyCounter.get(sCharRemoved) < tFrequencyCounter.get(sCharRemoved)) {
                        formed--;
                        break;
                    }
                }

            }
            
            
            j++;
    
        }

        return minWindowLength < 100001 ? s.slice(bestLengthRange[0], bestLengthRange[1]) : "";
    }
}


// OUZODYXAZV XYZ

// s1 substring needs to contain all the characters of s2

// it may also contain additional characters

// we need to return the shortest substring of s1 that contains all characters of s2

// sliding window variable size

// start i at 0 and j at 0
    // keep incrementing j until all the characters in s2 are found
    // question: how to know if all elements are found?

    // case1: once all elements are found
        // we may start shrinking the window to see if we can get rid of any useless characters in the start

    // case2: there may be a character after the window that is useful in reducing the existing found window even further

    // so the main question is as the window is expanding and shrinking how can we efficiently compare the characters of s1 and s2.