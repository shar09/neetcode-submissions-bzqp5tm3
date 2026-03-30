class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    merge(arr1, arr2) {
        let i=0, j=0;
        let newArr = [];
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                newArr.push(arr1[i]);
                i++;
            } else {
                newArr.push(arr2[j]);
                j++;
            }
        }
        newArr = newArr.concat(arr1.slice(i), arr2.slice(j));

        return newArr;
    }

    splitArray(arr, left, right) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = left + Math.floor((right - left) / 2);
        const leftArr = this.splitArray(arr.slice(0, mid), 0, mid);
        const rightArr = this.splitArray(arr.slice(mid), mid, arr.length);
        return this.merge(leftArr, rightArr);
    }

    sortArray(nums) {
        return this.splitArray(nums, 0, nums.length);
    }
}
