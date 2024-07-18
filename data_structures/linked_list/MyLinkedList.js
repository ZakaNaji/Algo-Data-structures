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
}
const ll = new MyLinkedList(10);
ll.append(11);
ll.append(12);
ll.prepend(9);
console.log(ll);
