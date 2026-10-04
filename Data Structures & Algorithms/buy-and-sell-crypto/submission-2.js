class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minStock = 101;
        let maxProfit = 0;

        let i = 0;

        while (i < prices.length) {
            const currentPrice = prices[i];
            const nextPrice = prices[i + 1];
            
            if (i === prices.length - 1) {
                maxProfit = Math.max(maxProfit, currentPrice - minStock);
            }

            if (currentPrice < minStock) {
                minStock = currentPrice;
            } else if (nextPrice < currentPrice) {
                maxProfit = Math.max(maxProfit, currentPrice - minStock);
            }

            i++;
        }

        return maxProfit;    
    }
}

// high low high high high low
//      buy           sell

// how to determine buy?

// if i < i + 1 
    
//     if not holding: buy
//     if holding: wait

// if i > i + 1 sell

//     if not holding: wait
//     if holding: sell

// [10, 4, 5, 1, 10, 2]

// stuck: 4 5 1, we will buy at 4 when 1 is best
// trick: use a min stock and max profit variables. keep updating it as we loop through the array

// current min
// update the min when you see a smaller value

// when ever you see a bigger value than the holding stock
// calculate max profit and update it when there is bigger profit

// states:
    // minStock: number
    // maxProfit: number
    // holdingStock: boolean

// conditions:
    // if i < min
        // update min
        // continue
    // if not holding and i < i + 1
        //  buy: update minstock and holdingStock
    // if holding and i > i + 1
        // sell: calculate max profit and update if max
