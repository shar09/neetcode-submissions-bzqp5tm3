class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const keyStore = this.keyStore;

        if (keyStore.has(key)) {
            keyStore.get(key).push([value, timestamp]);
        } else {
            keyStore.set(key, [[value, timestamp]]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const keyStore = this.keyStore;

        if (!keyStore.has(key)) {
            return "";
        }

        const values = keyStore.get(key); 

        if (values[0][1] > timestamp) {
            return "";
        }

        let low = 0, high = values.length - 1;
        let mid = low + Math.ceil((high - low) / 2);

        while (low < high) {
            const midTs = values[mid][1];

            if (midTs > timestamp) {
                high = mid - 1; 
            } else {
                low = mid;
            }

            mid = low + Math.ceil((high - low) / 2);
        }

        return values[mid][0];
    }
}

// 2, 2, 5

// inclusive range binary search where mid always falls to the right
// this way low and high will always converge at the smaller index
// mid = low
// high = mid - 1

// even if target is found
// still keep looking and make sure low and high meet at the latest target

// alice: [[happy, 1], [sad, 2], [happy, 3]]

// if timestamp is not present, return the previous timestamp
// if there are duplicate timestamps, return the latest one among them
