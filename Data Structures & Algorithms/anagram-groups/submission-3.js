class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            const hashArray = new Array(26).fill(0);

            for(let j = 0; j < str.length; j++) {
                const index = str.charCodeAt(j) - 97;
                hashArray[index] += 1;
            }

            const hashFunction = hashArray.join(',');

            if (hashMap.has(hashFunction)) {
                hashMap.set(hashFunction, [...hashMap.get(hashFunction), str]);
            } else {
                hashMap.set(hashFunction, [str]);
            }
        }

        return Array.from(hashMap.values());
    }
}

// we can solve this problem using hashing technique
// hash function:
    // create a fixed array of length 26 for each string assigning all zeros
    // for each character in the string get charcodeat - 97
    // increment the value in the array index
    // join the array