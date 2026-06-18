class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let holdingStockValue = 0;
        let holdingStock = false;

        let profit = 0;
        let i = 0;
        for (; i < prices.length - 1; i++) {
            if (prices[i] > prices[i+1]) {
                if (holdingStock) {
                    // sell
                    profit += prices[i] - holdingStockValue;
                    holdingStock = false;
                } else {
                    continue;
                }
            }

            if (prices[i] < prices[i + 1]) {
                if (holdingStock) {
                    continue;
                } else {
                    // buy
                    holdingStockValue = prices[i];
                    holdingStock = true;
                }
            }
        }

        if (holdingStock) {
            profit += prices[i] - holdingStockValue;
        }

        return profit;
    }
}

// when to buy?

// we have an advantage here:
    // we can check if the price of the stock is dipping the next day
    // if we know that the price is dipping then do not buy but sell
    // if we know that the price is increasing then keep the stock
