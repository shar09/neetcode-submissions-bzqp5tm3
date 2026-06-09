class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        const frequencyArray = Array.from(map.entries());
        const sortedFrequencyArray = this.sort(frequencyArray);

        const kSortedFrequencyArray = sortedFrequencyArray.slice(-k);
        return kSortedFrequencyArray.map(arr => arr[0]);
        
    }

    merge(arr1, arr2) {
        let i = 0, j = 0;
        let newArr = [];

        while (i < arr1.length && j < arr2.length) {
            if (arr1[i][1] < arr2[j][1]) {
                newArr.push(arr1[i]);
                i++;
            } else {
                newArr.push(arr2[j]);
                j++;
            }
        }

        if (i < arr1.length) {
            newArr = [...newArr, ...arr1.slice(i)];
        }

        if (j < arr2.length) {
            newArr = [...newArr, ...arr2.slice(j)];
        }

        return newArr;
    }

    divide(arr) {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);

        const left = this.divide(arr.slice(0, mid));
        const right = this.divide(arr.slice(mid));

        return this.merge(left, right);
    }

    sort(arr) {
        return this.divide(arr);
    }
}

// Hash map with frequency counter n
// get all entries in the hash map n
// convert it to a 2D array n
// sort in ascending order based on the frequency n log n 
// return the last k keys


// [[1, 1], [2, 2], [3, 3]]

// [1, 1] [2, 2]          [3, 3]

// [1, 1] [2, 2]