class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1, high = 0;

        for (const pile of piles) {
            high = Math.max(high, pile);
        }

        let speed = low + Math.floor((high - low) / 2);
        let minSpeed = high;
        let totalHours = 0;

        while (low <= high) {
            for (let i = 0; i < piles.length; i++) {
                if (totalHours > h) break;

                const pile = piles[i];
                const hoursToEatPile = Math.ceil(pile / speed);
                totalHours += hoursToEatPile;
            }

            if (totalHours > h) {
                low = speed + 1;
            } else if (totalHours <= h) {
                minSpeed = Math.min(speed, minSpeed);
                high = speed - 1;
            }

            totalHours = 0;
            speed = low + Math.floor((high - low) / 2);
        }

        return minSpeed;
    }
}

// lets k is the speed at which koko can eat the bananas
// min k = 1
// max k = max (piles); since h >= length of piles

// binary search the speeds