class MyHashMap {
    constructor() {
        this.array = Array(2).fill(null);
        this.count = 0;
        this.size = 2;
    }

    rehash() {
        const oldArray = this.array;
        this.array = Array(this.size * 2).fill(null);
        this.count = 0;
        this.size = this.size * 2;

        for (const entry of oldArray) {
            if (entry === null || entry === 'deleted') {
                continue;
            } else {
                this.put(entry[0], entry[1]);
            }
        }
    }

    hash(key) {
        return key % this.size;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const hash = this.hash(key);

        if (this.array[hash] === null || this.array[hash] === 'deleted') {
            this.array[hash] = [key, value];
            this.count +=1;
        } else if (this.array[hash][0] === key) {
            this.array[hash] = [key, value];
        } else {
            let i = hash + 1;
            for ( ; i < this.array.length; i++) {
                if (this.array[i] === null || this.array[i] === 'deleted') {
                    this.array[i] = [key, value];
                    this.count +=1;
                    break;
                }
                
                if (this.array[hash][0] === key) {
                    this.array[hash] = [key, value];
                    break;
                }
            }

            if (i === this.array.length) {
                i = 0;
                for ( ; i < hash; i++) {
                    if (this.array[i] === null || this.array[i] === 'deleted') {
                        this.array[i] = [key, value];
                        this.count +=1;
                        break;
                    }
                    
                    if (this.array[hash][0] === key) {
                        this.array[hash] = [key, value];
                        break;
                    }
                }
            }
        }

        if (this.count >= Math.floor(this.size / 2)) {
            this.rehash();
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const hash = this.hash(key);
        if (this.array[hash] === null) {
            return -1;
        }
        
        if (this.array[hash]?.[0] === key) return this.array[hash]?.[1];

        let i = hash + 1;
        for ( ; i < this.array.length; i++) {
            if (this.array[i] === null) return -1;

            if (this.array[i]?.[0] === key) return this.array[i]?.[1];
        }

        if (i === this.array.length) {
            i = 0;
            for( ; i < hash; i++) {
                if (this.array[i] === null) return -1;

                if (this.array[i]?.[0] === key) return this.array[i]?.[1];
            } 
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const hash = this.hash(key);
        if (this.array[hash] === null) {
            return null;
        }

        if (this.array[hash]?.[0] === key) {
            this.array[hash] = 'deleted';
            this.count -= 1;
            return null;
        }

        let i = hash + 1;
        for ( ; i < this.array.length; i++) {
            if (this.array[i] === null) return null;

            if (this.array[i]?.[0] === key) {
                this.array[i] = 'deleted';
                this.count -= 1;
                return null;
            }
        }

        if (i === this.array.length) {
            i = 0;
            for( ; i < hash; i++) {
                if (this.array[i] === null) return null;

                if (this.array[i]?.[0] === key) {
                    this.array[i] = 'deleted';
                    this.count -= 1;
                    return null;
                }
            } 
        }

        return null;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// put: find empty or deleted slot
// rehash: find empty or deleted slot
// get: find the exact value
// remove: find the exact value

