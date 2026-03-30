class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduct = [1];
        const suffixProduct = Array(nums.length).fill(0);
        suffixProduct[nums.length - 1] = 1;
        const finalResult = []

        for (let i = 1; i < nums.length; i++) {
            const product = prefixProduct[i - 1] * nums[i - 1];
            prefixProduct.push(product);
        }

        for (let j = nums.length - 2; j >= 0; j--) {
            const product = suffixProduct[j + 1] * nums[j + 1];
            suffixProduct[j] = product;
        }

        for (let j = 0; j < prefixProduct.length; j++) {
            finalResult.push(prefixProduct[j] * suffixProduct[j])
        }

        return finalResult;
    }
}

// [1, 2, 4, 6]
// [1, 1, 2, 8]
// [48, 24, 6, 1]