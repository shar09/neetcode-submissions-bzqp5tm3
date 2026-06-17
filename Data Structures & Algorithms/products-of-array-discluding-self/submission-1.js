class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProduct = 1;
        let postfixProduct = 1;

        const prefixProductArray = Array(nums.length).fill(1);
        const postfixProductArray = Array(nums.length).fill(1);

        const productExceptSelfArray = [];

        for (let k = 0; k < nums.length - 1; k++) {
            prefixProduct = prefixProduct * nums[k];
            prefixProductArray[k+1] = prefixProduct;
        }

        for (let i = nums.length - 1; i > 0; i--) {
            postfixProduct = postfixProduct * nums[i];
            postfixProductArray[i - 1] = postfixProduct;
        }

        for (let j = 0; j < nums.length; j++) {
            const productExceptSelf = prefixProductArray[j] * postfixProductArray[j];
            productExceptSelfArray.push(productExceptSelf);
        }

        return productExceptSelfArray;
    }
}

// create a new array with prefix product?
// create another array with postfix product

// [1, 1, 2, 8]

// [48, 24, 6, 1]

// [48, 24, 12, 8]