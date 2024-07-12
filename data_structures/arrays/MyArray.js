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
      throw new Error("index out of bound");
    }
    const deletedItem = this.data[index];
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push("hello");
myArray.push("world");
myArray.push("!");
console.log(myArray.delete(2));
console.log(myArray);
