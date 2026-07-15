class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        const sortedNums = [...nums].sort((a, b) => a - b);
        const output = [];

        for (let i = 0; i < sortedNums.length; i++) {
            const a = sortedNums[i];
            
            if (i > 0 && a === sortedNums[i-1]) continue;
            
            for (let j = i + 1; j < sortedNums.length; j++) {
                const b = sortedNums[j];

                if (j > i + 1 && b === sortedNums[j - 1]) continue;

                let l = j + 1, r = sortedNums.length - 1;

                while(l < r) {
                    while (l > j + 1 && sortedNums[l] === sortedNums[l-1]) {
                        l++;
                    }

                    while (r < sortedNums.length - 1 && sortedNums[r] === sortedNums[r + 1]) {
                        r--;
                    }

                    if (l >= r) break;

                    const c = sortedNums[l];
                    const d = sortedNums[r];

                    if (a + b + c + d > target) {
                        r--;
                    } else if (a + b + c + d < target) {
                        l++;
                    } else {
                        output.push([a, b, c, d]);
                        l++;
                        r--;
                    }
                }
            }
        }

        return output;
    }
}

// sort the array
// 4 loops
// a + b + c + d