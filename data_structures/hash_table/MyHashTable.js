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
    this.data[this._hash(key)] = value;
  }
  get(key) {
    return this.data[this._hash(key)];
  }
}

const ht = new MyHashTable(50);
ht.set("grapes", 10000);
ht.set("scream", "ahhhhhhhhh!");
console.log(ht.get("grapes"));
console.log(ht.get("scream"));
