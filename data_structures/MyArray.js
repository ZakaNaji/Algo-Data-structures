class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const popedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return popedItem;
  }

  delete(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    } else {
      const deletedItem = this.data[index];
      for (let i = index; i < this.length; i++) {
        delete this.data[i];
        if (i + 1 < this.length) {
          this.data[i] = this.data[i + 1];
        }
      }
      this.length--;
      return deletedItem;
    }
  }
}

const myArray = new MyArray();
myArray.push("hello");
myArray.push("world");
myArray.push("!");
console.log(myArray.delete(0));
console.log(myArray);
