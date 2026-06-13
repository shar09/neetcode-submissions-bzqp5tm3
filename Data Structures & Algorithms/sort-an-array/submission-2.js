class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge (left, right) {
        const mergedArray = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                mergedArray.push(left[i]);
                i++;
            } else {
                mergedArray.push(right[j]);
                j++;
            }
        }

    
        for (; i < left.length; i++) {
            mergedArray.push(left[i]);
        }

        for (; j < right.length; j++) {
            mergedArray.push(right[j]);
        }

        return mergedArray;
    }


    sortArray(nums) {
        if (nums.length <= 1) return nums;

        const mid = Math.floor(nums.length / 2);

        const left = this.sortArray(nums.slice(0, mid));
        const right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }
}
