class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1FrequencyCount = Array(26).fill(0);
        const s2FrequencyCount = Array(26).fill(0);

        for (let k = 0; k < s1.length; k++) {
            const index = s1.charCodeAt(k) - 97;

            s1FrequencyCount[index] = s1FrequencyCount[index] + 1;
        }
        
        let i = 0, j = 0;

        while (j <= s2.length) {
            const windowLength = j - i + 1;
            
            if (windowLength > s1.length) {
                if (s2FrequencyCount.toString() === s1FrequencyCount.toString()) {
                    return true;
                }

                if (j === s2.length) break;

                const iIndex = s2.charCodeAt(i) - 97;
                const jIndex = s2.charCodeAt(j) - 97;

                s2FrequencyCount[iIndex] = s2FrequencyCount[iIndex] - 1
                s2FrequencyCount[jIndex] = s2FrequencyCount[jIndex] + 1

                i++;
                j++;
            } else {
                const index = s2.charCodeAt(j) - 97;
                s2FrequencyCount[index] = s2FrequencyCount[index] + 1;
                j++;
            }
        }

        return false;
    }
}

// once a streak breaks from where will we restart the search
    // because there could be instances where we might need to start searching from the middle again and not where the streak ends:
    // for example: aabc -> s1, s2 -> aaabc

// to solve this we might need a sliding window that shrinks until the window is valid again

// once all the values in the hashmap become 0 without the streak being broken that is when we have found our answer. but how can we do this efficiently?

// Pseudo code:

// abc  lecaabee

// loop through s1:
    // store the values in hashmap

// sliding window for s2:
    // store values as window is expanding in hashmap

    // once a character appears that is not in s1 or character count in s2 > character count in s1, the window needs to shrink and s2 hashmap updated

    // how can efficiently compare s1 and s2 on every window expand?

    // because on expand:
        // stuck: we need to compare to know if window became invalid or if we have succesfully found a permutation

    // but on shrink we can do it efficiently:
        // if the newly entered element is not existing at all in s1 then we need to start fresh again from j + 1
        // if newly enetered element has exceeded the s1 character count, then shrink until that character count s2 === character count s1 and update all other characters in s2 accordingly


// two fixes:
    // checking for permutation match is not very costly because there are only 26 characters in total
    // so time will be O(n) * 26

    // we do not need a variable size window, a fixed window should work for this problem
