// underscore indicates node class is a private class
class _Node {
  constructor(value, next) {
      this.value=value,
      this.next=next;
  }
}

/*
  Primary operations in a linked list are 
  insert, remove, and find.

  LinkedList has a head to indicate beginning of list
  Start with empty list represented by null
*/
class LinkedList {
  constructor() {
    this.head = null;
  }
}

/*
  Insertion: beginning, end, anywhere between
  two nodes (insert, insertAt)

  Insertion at beginning:
    1. create new node
    2. point the head to that new node
*/
insertFirst(item) {
  this.head = new _Node(item, this.head);
}

/*
  How insertion is implemented
*/
insertLast(item){
  if(this.head === null){
      this.insertFirst(item);
  }
  else{
      let tempNode = this.head;
      while(tempNode.next !== null){
          tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
  }
}

/*
  Retrieval (find) operation
  Traverse the list, comparing 
  the value stored in each node with the value
  you are searching

  When item is found, return the node.
*/
find(item) { 
  //start at the head
  let currNode = this.head;
  //if the list is empty
  if (!this.head){
      return null;
  }
  //Check for the item 
  while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
          return null;
      }
      else {
          //otherwise keep looking 
          currNode = currNode.next;
      }
  }
  //found it
  return currNode;
}

/*
  Removal

  Delete first item on the list:
  change the head to indicate the new first item on the list

  Delete item for n = 1 to n = end:
  start at head of the list and find node that contains dragon fruit
*/
remove(item){ 
  //if the list is empty
  if (!this.head){
      return null;
  }
  //if the node to be removed is head, make the next node head
  if(this.head === item){
      this.head = this.head.next;
      return;
  }
  //start at the head
  let currNode = this.head;
  //keep track of previous
  let previousNode = this.head;

  while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
  }
  if(currNode === null){
      console.log('Item not found');
      return;
  }
  previousNode.next = currNode.next;
}