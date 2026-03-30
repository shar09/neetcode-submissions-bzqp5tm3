class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let bought = false;
        let currentStockHoldingPrice = 0;
        let totalProfit = 0;

        for (let i = 0; i < prices.length - 1; i++) {
            if (!bought) {
                if (prices[i] > prices[i + 1]) {
                    continue;
                } else {
                    currentStockHoldingPrice = prices[i];
                    bought = true;
                }
            } else {
                if (prices[i] < prices[i + 1]) {
                    continue;
                } else {
                    totalProfit = totalProfit + (prices[i] - currentStockHoldingPrice);
                    currentStockHoldingPrice = 0;
                    bought = false;
                }
            }
        }

        if (bought && currentStockHoldingPrice < prices[prices.length - 1]) {
            totalProfit = totalProfit + (prices[prices.length - 1] - currentStockHoldingPrice);
        }

        return totalProfit;
    }
}
// bought = false

// if bought === false
// check current element > next element?
// if greater then don't buy current element
// else buy and set bought to true

// if bought === true
// check if current element < next element
// if less then don't sell
// else sell and set bought to false


// on last day we need to sell if we are getting a max profit