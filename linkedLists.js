// https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392

// store data and point to another node
class _Node(data, next) {
  constructor(value, next) {
    this.data = data;
    this.next = null;
  }
}

// _length: assigned number of nodes in list
// head: points to the head of the list (node in front)
class SinglyList {
  constructor() {
    this._length = 0;
    this.head = null;
  }
} 

let LinkedList = new SinglyList();



function main() {
  
}