class MyHashSet {
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
        this.deletedCount = 0;
        this.count = 0;

        for (const element of oldArray) {
            if (element === this.deleted || element === null) continue;

            this.insert(element);
            this.count++;
        }
    }

    findIndex(key) {
        let index = this.hashIndex(key) % this.capacity;

        for (let step = 0; step < this.capacity; step++) {
            if (this.array[index] === key) {
                return index;
            }

            if (this.array[index] === null) {
                return -1;
            }

            index = (index + 1) % this.capacity;
        }

        return -1;
    }

    insert(key) {
        let firstDeletedIndex = -1;
        let index = this.hashIndex(key) % this.capacity;

        for (let step = 0; step < this.capacity; step++) {
            const slot = this.array[index];
            if (slot === key) {
                return false;
            }
            
            if (slot === this.deleted && firstDeletedIndex === -1) {
                firstDeletedIndex = index;
            }

            if (slot === null && firstDeletedIndex > -1) {
                this.array[firstDeletedIndex] = key;
                this.deletedCount--;
                return true;
            }

            if (slot === null) {
                this.array[index] = key;
                return true;
            }

            index = (index + 1) % this.capacity;
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (this.count + this.deletedCount >= Math.floor(this.capacity / 2)) {
            this.rehash();
        }

        const insert = this.insert(key);

        if (insert) this.count++;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.findIndex(key);

        if (index === -1) return null;

        this.array[index] = this.deleted;
        this.count--;
        this.deletedCount++;

        if (this.deletedCount > this.count) {
            this.rehash();
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this.findIndex(key);
        return index === -1 ? false : true;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// hash function:
    // mod the key by size of the array
    // this will ensure that the hash index found will be within the array bounds

// find index:
    // index = this.hash
    // for loop keep looking
        // if element === null return -1;
        // if element === key return index; 
        // index = (index + 1) % this.capacity;

// contains:
    // index = this.findIndex

// insert:
    // index = this.hash
    // for loop to look to deleted or null slot
        // if element is null 
            // insert key
        // if element is deleted
            // remember the slot but keep looking until you find the null slot

