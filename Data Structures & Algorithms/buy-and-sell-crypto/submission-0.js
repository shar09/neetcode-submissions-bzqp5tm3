class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0, r = l + 1;

        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r;
                r = l + 1;
                continue;
            }

            maxProfit = Math.max(prices[r] - prices[l], maxProfit);
            r++;
        }

        return maxProfit;
    }
}
