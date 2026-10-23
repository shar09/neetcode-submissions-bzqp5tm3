/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let low = 1, high = n;
        let mid = low + Math.floor((high - low) / 2);

        let res = guess(mid);

        while (res !== 0) {
            if (res > 0) {
                low = mid + 1;
            } else if (res < 0) {
                high = mid - 1;
            }

            mid = low + Math.floor((high - low) / 2);
            res = guess(mid);
        }

        return mid;
    }
}
