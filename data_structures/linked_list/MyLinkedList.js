class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoubleLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  listOfValues() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error("index out of bounds");
    }
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.length) {
      this.append(value);
    } else {
      let prevNode = this._findNodeAt(index - 1);
      let nextNode = prevNode.next;
      let newNode = new Node(value);
      newNode.next = nextNode;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      nextNode.prev = newNode;
    }
    this.length++;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      throw new Error("index out of bounds");
    }
    if (index === 0) {
      let nodeToBeRemoved = this.head;
      this.head = nodeToBeRemoved.next;
      nodeToBeRemoved.next = null;
    } else {
      let prevNode = this._findNodeAt(index - 1);
      let nodeToBeRemoved = this._findNodeAt(index);
      prevNode.next = nodeToBeRemoved.next;
    }
    this.length--;
  }

  _findNodeAt(index) {
    let nodeAt = this.head;
    let i = 0;
    while (i < index) {
      nodeAt = nodeAt.next;
      i++;
    }
    return nodeAt;
  }
}
const dl = new MyDoubleLinkedList(10);
dl.append(11);
dl.insert(1, 10.5);
console.log(dl);
