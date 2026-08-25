class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const sFrequency = new Map();
        const tFrequency = new Map();

        for (const character of s) {
            sFrequency.set(character, (sFrequency.get(character) ?? 0) + 1);
        }

        for (const character of t) {
            tFrequency.set(character, (tFrequency.get(character) ?? 0) + 1);
        }

        for (const [key, value] of sFrequency) {
            if (tFrequency.has(key) && tFrequency.get(key) === value) continue;

            return false;
        }

        return true;
    }
}


// create a frequency counter for s
// create a frequency counter for t

// loop through one frequency counter and check for key value in other frequency counter
// if not matching return false