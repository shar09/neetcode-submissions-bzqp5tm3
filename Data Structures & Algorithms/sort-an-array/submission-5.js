class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findPivot(nums, low, high) {
        let pivot = low, i = low + 1, swapIndex = low;

        while (i <= high) {
            if (nums[i] < nums[pivot]) {
                swapIndex++;
                [nums[i], nums[swapIndex]] = [nums[swapIndex], nums[i]];
            }
            i++;
        }

        [nums[pivot], nums[swapIndex]] = [nums[swapIndex], nums[pivot]];
        return swapIndex;
    }

    quickSort(nums, low, high) {
        if (low >= high) return nums;

        const pivot = this.findPivot(nums, low, high);
        this.quickSort(nums, low, pivot - 1);
        this.quickSort(nums, pivot + 1, high);

        return nums;
    }

    sortArray(nums) {
        return this.quickSort(nums, 0, nums.length - 1);
    }
}
