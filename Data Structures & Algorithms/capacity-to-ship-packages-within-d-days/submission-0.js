class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let low = 0, high = 0;

        for (const weight of weights) {
            low = Math.max(low, weight);
            high += weight;
        }

        let midWeight = low + Math.floor((high - low) / 2);
        let totalDays = 0
        let minWeight = high;

        while (low <= high) {
            let i = 0;

            while (i < weights.length && totalDays < days) {
                let sumOfWeights = 0;

                while (i < weights.length && sumOfWeights + weights[i] <= midWeight) {
                    const weight = weights[i];
                    sumOfWeights += weight;
                    i++;
                }

                sumOfWeights = 0;
                totalDays += 1;
            }

            if (i === weights.length) {
                minWeight = Math.min(minWeight, midWeight) 
                high = midWeight - 1;
            } else if (i < weights.length) {
                low = midWeight + 1;
            }

            midWeight = low + Math.floor((high - low) / 2);
            totalDays = 0;
        }

        return minWeight;
    }
}


// to find:
    // least weight capacity of the ship that can transport all the packages in x days

// max weight capacity of ship = sum of all weights; since day can be 1

// min weight capacity of ship = max (weights)

// min weight that can transport all the packages can be between maxWeight .... sum of all weights

// choose mid weight
    // loop through the weights and add to totalDays
    // if totalDays <= days
        // update min weight
        // high = mid - 1
    // if totalDays > days
        // low = mid + 1