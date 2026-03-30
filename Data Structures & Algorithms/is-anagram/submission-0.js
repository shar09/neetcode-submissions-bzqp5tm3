class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        for (const letter of s) {
            if (map.has(letter)) {
                map.set(letter, map.get(letter) + 1);
            } else {
                map.set(letter, 1);
            }
        }

        for (const letter2 of t) {
            if (map.has(letter2)) {
                map.set(letter2, map.get(letter2) - 1);

                if (map.get(letter2) === 0) map.delete(letter2);
            } else {
                return false;
            }
        }

        if (map.size === 0) return true;
        return false;
    }
}
