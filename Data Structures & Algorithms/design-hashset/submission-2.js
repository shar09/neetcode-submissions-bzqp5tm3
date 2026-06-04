class MyHashSet {
    constructor() {
        this.array = Array(2).fill(null);
        this.count = 0;
        this.size = 2;
    }

    rehash() {
        const oldArray = this.array;
        const newArray = Array(this.size * 2).fill(null);
        this.array = newArray;
        this.count = 0;
        this.size = this.size * 2;

        for (const key of oldArray) {
            if (key === null || key === 'deleted') continue;

            this.add(key);
        }
    }

    hash(key) {
        return key % this.size;
    }

    findEmptySlot(hash, key) {
        if (this.array[hash] === key) return;
        if (this.array[hash] === null || this.array[hash] === 'deleted') {
            this.array[hash] = key;
        } else {
            let i = hash + 1;
            for (; i < this.array.length; i++) {
                if (this.array[i] === key) return;
                if (this.array[i] === null || this.array[i] === 'deleted') {
                    this.array[i] = key;
                    return;
                }
            }

            if (i === this.size) {
                for (let i = 0; i < hash + 1; i++) {
                    if (this.array[i] === key) return;
                    if (this.array[i] === null || this.array[i] === 'deleted') {
                        this.array[i] = key;
                        return;
                    }
                }
            }
        }
    }

    findKey(action, hash, key) {
        if (this.array[hash] === key) {
            if (action === 'remove') {
                this.array[hash] = 'deleted';
            } else if (action === 'contains') {
                return true;
            }
        } else {
            let i = hash + 1;
            for (; i < this.array.length; i++) {
                if (this.array[i] === key) {
                    if (action === 'remove') {
                        this.array[i] = 'deleted';
                    } else if (action === 'contains') {
                        return true;
                    }
                    break;
                }
            }

            if (i === this.size) {
                for (let i = 0; i < hash + 1; i++) {
                    if (this.array[i] === key) {
                        if (action === 'remove') {
                            this.array[i] = 'deleted';
                        } else if (action === 'contains') {
                            return true;
                        }
                        break;
                    }
                }
            }
        }

        return false;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        const hash = this.hash(key);
        this.findEmptySlot(hash, key);

        this.count += 1;

        if (this.count >= (this.size / 2)) {
            this.rehash();
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = this.hash(key);
        this.findKey('remove', hash, key);

        this.count -= 1;
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const hash = this.hash(key);
        return this.findKey('contains', hash, key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

// you need a hash function that will map to the array index
// in case of collision store element in next available index

// create array with length 2
// if size of array >= length then double the array
// rehash the existing elements and store them

// hash function: mod the number by array.length
// rehash: find empty slot
// add: find empty slot
// remove: find the actual value
// contains: find the actual value

// add: slot is null, has element, 'deleted', if end of array is reached
