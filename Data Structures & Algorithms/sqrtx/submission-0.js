class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let low = 0, high = x;
        let mid = low + Math.floor((high - low) / 2);

        while (low <= high) {
            if (mid * mid > x) {
                high = mid - 1;
            } else if (mid * mid < x) {
                low = mid + 1;
            } else {
                return mid;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return high;
    }
}

// given x:
    // the result could be anywhere between 1 to x

    // if mid * mid > x
        // high = mid - 1
    // if mid * mid < x
        // low = mid + 1


// 0 to 13

// mid = 6

// 0 to 6
// mid = 3

// 4 to 6
// mid = 5

// lr, mid = 4
