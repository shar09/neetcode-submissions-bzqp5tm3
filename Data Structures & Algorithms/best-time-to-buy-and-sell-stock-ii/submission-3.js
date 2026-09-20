class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let holdingStock = false;
        let totalProfit = 0;
        let holdingStockValue = 0;

        let i = 0;

        while (i < prices.length) {
            let current = prices[i];
            let next = prices[i + 1];

            if (i === prices.length - 1) {
                if (holdingStock) {
                    totalProfit += current - holdingStockValue;
                    holdingStock = false;
                    holdingStockValue = 0;
                }
            }

            if (holdingStock) {
                if (current > next) {
                    totalProfit += current - holdingStockValue;
                    holdingStock = false;
                    holdingStockValue = 0;
                }
            } else {
                if (current < next) {
                    holdingStock = true;
                    holdingStockValue = current;
                }
            }

            i++;
        }

        return totalProfit;
    }
}

// high low, high, low, high, low

// loop through the array
    // NOT HOLDING STOCK
        // if current is higher than next
            // dont buy
        // if current is lower than next
            // buy
    // HOLDING STOCK
        // if current is higher than next
            // sell
        // if current is lowe than next
            // hold

// states:
    // holdingStock: boolean
    // totalProfit: number
    // holdingStockValue: number
    
