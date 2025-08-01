class HashTable {
    constructor(size) {
        this.array = new Array(size);
    }

    _getBucket(key) {
        const index = hash(key) % this.array.length;
        return { index, bucket: this.array[index] };
    }

    set(key, value) {
        const obj = this._getBucket(key);
        const index = obj.index;
        const bucket = obj.bucket || [];
        if (this.array[index] === undefined) {
            this.array[index] = bucket;
        }
        const found = bucket.find((element) => element[0] === key); //[key, value] | undefined
        if (!found) {
            bucket.push([key, value]);
        } else {
            found[1] = value;
        }
    }

    get(key) {
        const bucket = this._getBucket(key).bucket;
        if (!bucket) {
            return undefined;
        }
        const found = bucket.find((element) => element[0] === key); 
        if (!found) {
            return undefined;
        } else {
            return found[1];
        }
    }

    delete(key) {
        const bucket = this._getBucket(key).bucket;
        if (!bucket) {
            return false;
        }
        const foundIndex = bucket.findIndex((element) => element[0] === key);
         if (foundIndex === -1) {
            return false;
        } else {
            bucket.splice(foundIndex, 1);
            return true;
        }
    }

    has(key) {
        const bucket = this._getBucket(key).bucket;
        if (!bucket) {
            return false;
        }
        const found = bucket.find((element) => element[0] === key); 
        return !!found;
    }
}

function hash(key) {
    return key.toString()
    .split('')
    .map((char, i) => char.charCodeAt(0) * Math.pow((i + 1), 2))
    .reduce((acc, code) => (acc + code), 0);
}

const hashTable = new HashTable(110);
hashTable.set(3, "value");
hashTable.set("apple", "sweet");
hashTable.set("ABC", "pink");
hashTable.set("CAB", "red");
console.dir(hashTable, { depth: null });
console.log(hashTable.get(3));
console.log(hashTable.get(1));
console.log(hashTable.delete("apple"));
console.log(hashTable.delete(1));
console.dir(hashTable, { depth: null });
console.log(hashTable.has(3));
console.log(hashTable.has("prikol"));
