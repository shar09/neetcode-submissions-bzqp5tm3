class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const output = [];

        for (let i = 0; i < sortedNums.length - 2; i++) {
            if (i !== 0 && sortedNums[i] === sortedNums[i-1]) continue;

            const a = sortedNums[i];
            let l = i + 1, r = sortedNums.length - 1;

            while (l < r) {
                const b = sortedNums[l];
                const c = sortedNums[r];

                if (l !== i + 1 && b === sortedNums[l - 1]) {
                    l++;
                    continue;
                }

                if (c === sortedNums[r + 1]) {
                    r--;
                    continue;
                }

                if (a + b + c > 0) r--;
                else if (a + b + c < 0) l++;
                else {
                    output.push([a, b, c]);
                    l++;
                    r--;
                }
            }
        }

        return output;
    }
}
