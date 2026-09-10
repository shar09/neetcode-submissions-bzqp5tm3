class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const output = [];

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        const mapArray = Array.from(map);

        const sortedMapArray = mapArray.sort((a, b) => a[1] - b[1]);

        const lastKEntries = sortedMapArray.slice(-k);

        for (const entry of lastKEntries) {
            output.push(entry[0]);
        }

        return output;
    }
}



// given a nums array and a value k
// we need to return the k most frequent elements

// solution 1:
// hashmap to count the frequency
// sort the hash map in ascending order based on the values
// return the last k keys

// solution 2: bucket sort since we have a finite range
// unlike traditional bucket sort instead of having values as indexes. we will have counts as indexes
