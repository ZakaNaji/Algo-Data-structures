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
}

const myArray = new MyArray();
myArray.push("hello");
myArray.push("world");
console.log(myArray);
myArray.pop();
console.log(myArray);
