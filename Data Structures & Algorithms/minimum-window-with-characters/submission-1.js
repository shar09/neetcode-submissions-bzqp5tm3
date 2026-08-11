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

        let output = s + 'X';
        let l = 0, r = 0;

        while (r < s.length) {
            let validWindowFound = true;

            const sCharacter = s[r];
            windowFrequencyMap.set(sCharacter, (windowFrequencyMap.get(sCharacter) ?? 0) + 1);

            for (const key of tFrequencyMap.keys()) {
                if ((windowFrequencyMap.get(key) ?? 0) < tFrequencyMap.get(key)) {
                    validWindowFound = false;
                    break;
                }
            }

            while (validWindowFound) {
                const windowCharacters = s.slice(l, r + 1);
                    
                if (windowCharacters.length < output.length) {
                    output = windowCharacters;
                }

                windowFrequencyMap.set(s[l], windowFrequencyMap.get(s[l]) - 1);
                l++;

                for (const key of tFrequencyMap.keys()) {
                    if ((windowFrequencyMap.get(key) ?? 0) < tFrequencyMap.get(key)) {
                        validWindowFound = false;
                        break;
                    }
                }
            }

            r++;
        }

        if (output.length === s.length + 1) return "";
        else return output;
    }
}

// Y A X Z Y

// create frequency count hashmap for t
// create a frequency count hashmap for current window
// create output variable

// start l at 0, r at 0
    // WHILE r < s.length
        // move r until all elements of t are covered:
        // keep incrementing values in window frequency count hashmap
        // once all elements are covered, add the string to output
        // how to check all elements are covered: loop over t hashmap and compare the values to that in window hash map

        // WHILE as we move l, the values of keys in t hashmap should equal that of window hash map

            // now start skrinking l
            // keep updating window hashmap
            // keep updating output



        

