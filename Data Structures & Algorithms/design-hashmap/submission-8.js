class MyHashMap {
    constructor() {
        this.arr = new Array(2).fill(null);
        this.count = 0;
        this.size = 2;
    }

    hash(key) {
        const index = key % this.size;
        return index;
    }

    rehash() {
        const oldArr = this.arr;
        const oldSize = this.size;

        this.size = oldSize * 2;
        this.arr = new Array(this.size).fill(null);
        this.count = 0;

        for (const element of oldArr) {
            if (element === null || element === 'deleted') {
                continue;
            }

            const key = element.key;
            const value = element.value;

            this.put(key, value);
        }
    }
    
 
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const index = this.hash(key);
        const arr = this.arr; // object reference
        let count = this.count; // primtive reference
        const size = this.size;
        let map = arr[index];
        let emptySlot = map === null;
        let deletedSlot = map === 'deleted';
        let i;
        if (emptySlot || deletedSlot || map.key === key) {
            i = index;
        } else {
            // collision
            i = index;
            while (i < size) {
                map = arr[i];
                emptySlot = map === null;
                deletedSlot = map === 'deleted';
                if (emptySlot || deletedSlot || map.key === key) {
                    break;
                }
                i++;
            }

            // array out of bounds reached    
            if (i === size) {
                i = 0
                while (i < index) {
                    map = arr[i];
                    emptySlot = map === null;
                    deletedSlot = map === 'deleted';
                    if (emptySlot || deletedSlot || map.key === key) {
                        break;
                    }
                    i++;
                }
            }
        }

        // set key value in found location
        arr[i] = {key, value}
        if (emptySlot) this.count += 1;

        // rehash
        if (this.count >= Math.floor(size / 2)) {
            this.rehash();
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const arr = this.arr;
        const index = this.hash(key);
        const size = this.size;

        let i = index;
        while (i < size) {
            if (arr[i] === 'deleted') i++;

            else if (arr[i] === null) return -1;

            else if (arr[i].key === key) return arr[i].value;

            else if (arr[i].key !== key) i++;     
        }

        if (i === size) {
            i = 0;
            while (i < index) {
                if (arr[i] === 'deleted') i++;

                else if (arr[i] === null) return -1;

                else if (arr[i].key === key) return arr[i].value;

                else if (arr[i].key !== key) i++;
            }
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const arr = this.arr;
        const index = this.hash(key);
        const size = this.size;

        let i = index;
        while (i < size) {
            if (arr[i] === null) return null; 

            if (arr[i].key === key) {
                arr[i] = 'deleted';
                return null;
            }

            i++;
        }

        if (i === size) {
            i = 0;
            while (i < index) {
                if (arr[i] === null) return null;

                if (arr[i].key === key) {
                    arr[i] = 'deleted';
                    return null;
                }

                i++;
            }
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
