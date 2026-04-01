class MyHashSet {
    constructor() {
        this.count = 0;
        this.size = 2;
        this.set = new Array(2).fill(null);
    }

    hash(key) {
        return key % this.size;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let index = this.hash(key);
        const set = this.set;

        if (set[index] === null) {
            set[index] = key;
            this.count++;
        } else if (set[index] === key) {
            set[index] = key;
        } else {
            // open addressing
            let i = index;

            while (i < set.length) {
                if (set[i] === null) {
                    index = i;
                    break;
                }
                i++;
            }

            if (i !== this.size) {
                set[index] = key;
            } else {
                index = i % this.size;
                for (let j = index; j < set.length; j++) {
                    if (set[j] === null) {
                        index = j;
                        break;
                    }
                }

                set[index] = key;
            }

            this.count++;
        }

        if (this.count >= Math.floor(this.size / 2)) {
            // rehash
            this.rehash();
        }
    }

    rehash() {
        const oldSet = this.set;
        const oldSize = this.size;

        this.size = oldSize * 2;
        this.set = new Array(this.size).fill(null);
        this.count = 0;

        for (const element of oldSet) {
            if (element === null || element === 'deleted') {
                continue;
            }

            this.add(element);
        }

    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hash(key);

        if (this.set[index] === key) {
            this.set[index] = 'deleted';
        } else {
            let i = index;
            while (i < this.size) {
                if (this.set[i] === key) {
                    this.set[i] = 'deleted';
                    break;
                }
                i++;
            }

            if (i === this.size) {
                i = 0;
                while (i < index) {
                    if (this.set[i] === key) {
                        this.set[i] = 'deleted';
                        break;
                    }
                    i++;
                }
            }

        }
        
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let index = this.hash(key);
        let i = index;
        while( i < this.size) {
            if (this.set[i] === key) {
                return true;
            }

            if (this.set[i] === null) {
                return false;
            }
            i++;
        }

        if (i === this.size) {
            i = 0;
            while (i < index) {
                if (this.set[i] === key) {
                    return true;
                }

                if (this.set[i] === null) {
                    return false;
                }
                i++;
            }
        }
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
