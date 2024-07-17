class MyHashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if (!currentBucket) return undefined;
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return currentBucket[i][1];
      }
    }
  }
}

const ht = new MyHashTable(50);
ht.set("grapes", 10000);
ht.set("scream", "ahhhhhhhhh!");
ht.set("test", "this is a simple test");
console.log(ht.get("grapes"));
console.log(ht.get("scream"));
console.log(ht.get("test"));
