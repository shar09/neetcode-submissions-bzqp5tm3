class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProduct = 1;
        let postfixProduct = 1;

        const output = []

        for (let i = 0; i < nums.length; i++) {
            prefixProduct = prefixProduct * (nums[i - 1] ?? 1);
            output[i] = prefixProduct;
        }

        for (let j = nums.length - 1; j >=0; j--) {
            postfixProduct = postfixProduct * (nums[j + 1] ?? 1);
            output[j] = output[j] * postfixProduct;
        }

        return output;
    }
}

// prefix product: [1, 1, 2, 8]

// postfix product: [48, 24, 6, 1]

// prefix product[i] * postfix product[i]