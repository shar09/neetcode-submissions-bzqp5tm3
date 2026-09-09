class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(leftArray, rightArray) {
        let mergedArray = [];
        let i = 0, j = 0;

        while (i < leftArray.length && j < rightArray.length) {
            const leftElement = leftArray[i];
            const rightElement = rightArray[j];
            if (leftElement < rightElement) {
                mergedArray.push(leftElement);
                i++;
            } else {
                mergedArray.push(rightElement);
                j++;
            }
        }

        if (i < leftArray.length) {
            mergedArray = mergedArray.concat(leftArray.slice(i));
        } else {
            mergedArray = mergedArray.concat(rightArray.slice(j));
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
