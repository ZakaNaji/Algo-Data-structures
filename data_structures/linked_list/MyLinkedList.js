class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
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
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
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
      let newNode = new Node(value);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }
    this.length++;
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
const ll = new MyLinkedList(10);
ll.append(11);
ll.append(12);
ll.prepend(9);
ll.insert(1, 9.5);
ll.insert(4, 13);
console.log(ll.listOfValues());
