class MyHashMap {
    constructor() {
        this.array = Array(2).fill(null);
        this.capacity = 2;
        this.count = 0;
        this.deletedCount = 0;
        this.deleted = Symbol('DELETED');
    }

    hashIndex(key) {
        return key % this.capacity;
    }

    rehash() {
        const oldArray = this.array;

        this.capacity = Math.max(this.count * 2, 2);
        this.array = Array(this.capacity).fill(null);
        this.count = 0;
        this.deletedCount = 0;

        for (const element of oldArray) {
            if (element === null || element === this.deleted) continue;

            this.putWithoutRehash(element[0], element[1]);
        }

    }

    putWithoutRehash(key, value) {
        let index = this.hashIndex(key);
        let deletedIndex = -1;
        for (let step = 0; step < this.capacity; step++) {
            const element = this.array[index];

            if (element === this.deleted) {
                deletedIndex = index;
            } else if (element === null && deletedIndex >=0) {
                this.array[deletedIndex] = [key, value];
                this.count++;
                this.deletedCount--;
                break;
            } else if (element === null) {
                this.array[index] = [key, value];
                this.count++;
                break;
            } else if (element[0] === key) {
                this.array[index] = [key, value];
                break;
            }

            index = (index + 1) % this.capacity;
        }
    }

    contains(key) {
        let index = this.hashIndex(key);

        for (let step = 0; step < this.capacity; step++) {
            const element = this.array[index];

            if (element === null) return -1;

            if (element !== this.deleted && element[0] === key) return index;

            index = (index + 1) % this.capacity;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.count + this.deletedCount >= Math.floor(this.capacity / 2)) {
            this.rehash();
        }

        this.putWithoutRehash(key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const index = this.contains(key);
        if (index < 0) return -1;

        return this.array[index][1];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.contains(key);
        if (index >= 0) {
            this.array[index] = this.deleted;
            this.count--;
            this.deletedCount++;
        }

        if (this.deletedCount > this.count) this.rehash();
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// linear probing is used in case of collisions

// state:
    // array of length 2
    // capacity = 2
    // count = 0
    // deletedCount = 0
    // symbol('deleted')

// hashIndex = key % capacity;

// get - can also be used for remove
    //  get hashIndex
    // for loop: step = 0; step < capacity
        // IF value return 1;
        // IF null return -1;
        // index = (index + 1) capacity

// remove
    // use get
    // if value found mark it as this.deleted
    // if deleted count > count: rehash

// put
    // get hashindex
    // for loop: step = 0; step < capacity
        // IF value matches: update value and return
        // IF deleted remember index;
        // IF null && deletedIndex: insert at deletedIndex; count++; deletedCount--;
        // IF null: insert at null;  count++;
        // index = (index + 1) capacity
        

