class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const hashKeyArray = Array(26).fill(0);
            for (const letter of str) {
                const indexOfLetter = letter.charCodeAt() - 97;
                hashKeyArray[indexOfLetter] = hashKeyArray[indexOfLetter] + 1;
            }

            const hashKey = hashKeyArray.join();
            if (map.has(hashKey)) {
                map.set(hashKey, [...map.get(hashKey), str]);
            } else {
                map.set(hashKey, [str]);
            }
        }

        return Array.from(map.values());
    }
}

// use hashmap
// generate a hash key
// sort string to generate hashkey
// or hashkey - 0 to 25 with each index containing the frequency of letter

// input -> strs array
// output -> return 2d array with grouped anagrams

// edge cases:
// strs can have just one element
// str can be empty. group all empty strings into one array

// Pseudo code:
// loop over str array
// loop over each str and create an hashkey with length of string and frequency of alpahbet
// for each hashkey create an array.
// if array already exsists for hashkey then push the new string to the array


