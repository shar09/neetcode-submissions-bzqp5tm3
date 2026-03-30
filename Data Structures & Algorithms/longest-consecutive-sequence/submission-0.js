class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSequence = 0;
        const numsSet = new Set(nums);

        for (const num of nums) {
            const isStartOfSequence = !numsSet.has(num -1);

            if (isStartOfSequence) {
                let currentSequenceLength = 1;
                let i = num + 1;
                while (numsSet.has(i)) {
                    currentSequenceLength +=1;
                    i++;
                }

                if (currentSequenceLength > longestSequence) {
                    longestSequence = currentSequenceLength;
                }
            }
        }

        return longestSequence;
    }
}

// For a given num check if it is start of the sequence
// If it is then keep checking until sequence end
// Store sequqence length if it is max

