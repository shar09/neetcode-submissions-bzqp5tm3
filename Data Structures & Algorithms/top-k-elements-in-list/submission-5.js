class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = Array(2001).fill(0);
        let output = [];

        for (const num of nums) {
            const index = num + 1000;
            bucket[index] = bucket[index] + 1;
        }

        const frequency = Array.from({ length: nums.length + 1 }, () => []);

        for (let i = 0; i < bucket.length; i++) {
            const count = bucket[i];
            if (count === 0) continue;

            frequency[count].push(i - 1000);
        }

        for (let j = frequency.length - 1; j >= 0; j--) {
            if (frequency[j].length > 0) {
                output = output.concat(frequency[j]);
            }

            if (output.length >= k) break;
        }

        return output.slice(0, k);
    }
}

// bucket sort:

// first use bucket sort to find the counts of each value

// then create a new array where indexes will be counts -> 1 to array.length

// then loop the array from backwards to return k elements

