class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const hashArray = Array(26).fill(0);

            for (let i = 0; i < str.length; i++) {
                const characterCode = str.charCodeAt(i);
                const hashIndex = characterCode - 97;
                hashArray[hashIndex] = hashArray[hashIndex] + 1;
            }

            const key = hashArray.toString();
            if (map.has(key)) {
                map.set(key, [...map.get(key), str]);
            } else {
                map.set(key, [str]);
            }
        }

        return Array.from(map.values());
    }
}

// loop through strs
    // sort the string
    // store the string in hashmap -> sortedstring: [originalStrings]

// O(n * m log m)

// Instead of sorting:
    // create an array of size 26
    // loop through each char in the string
    // increment char at index in array using charcodeat -  97

// O(n * m)