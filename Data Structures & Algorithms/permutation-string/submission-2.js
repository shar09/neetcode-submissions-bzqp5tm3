class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1FrequencyMap = new Map();

        for (const character of s1) {
            s1FrequencyMap.set(character, (s1FrequencyMap.get(character) ?? 0) + 1);
        }

        let s1FrequencyMapClone = new Map(s1FrequencyMap);
        let l = 0, r = 0;


        while (r < s2.length) {
            if (s1FrequencyMapClone.has(s2[r]) && s1FrequencyMapClone.get(s2[r]) > 0) {
                s1FrequencyMapClone.set(s2[r], s1FrequencyMapClone.get(s2[r]) - 1);
                r++;
            } else {
                if (l === r) {
                    l++;
                    r++;
                    s1FrequencyMapClone = new Map(s1FrequencyMap);
                } else {
                    s1FrequencyMapClone.set(s2[l], s1FrequencyMapClone.get(s2[l]) + 1);
                    l++;
                }
                
            }

            if (r - l === s1.length) {
                return true;
            }

        }
        
        return false;
    }
}

// Brute force:
    // bc a cb
    // b x a c

    // start i at 0 for s1
        // start j at 0 for s2
    
// after finding the first character
    // calculate the window size

    // window size = (index of a - s1.length - 1) + (index of a + s1.length - 1);

    // safe guard for the indexes that are out of bounds

// keep going until all s1 elements are found within that window

// the windows can be plenty so store them in a hashmap
// keep eliminating non valid windows as looping through s1

// once we are left with valid windows, we need to again validate the characters within that window to ensure that the characters are contiguous.

// what can be a window?
    // double the size of s1
    // within that we need to find a contiguous sub array of valid characters

// validation logic:
    // create a new array of length window size and intialize all elements to zero
    // loop through s1 again and for each element found at index change the 0 to 1 in the array
    // if there are all 1s within the array that equal the length of s1 then it is a valid permutation
    