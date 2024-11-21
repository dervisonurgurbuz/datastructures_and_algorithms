class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the end of the list
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        // If the list is empty, make the new node the head
        this.head = newNode;
      } else {
        // Otherwise, find the last node
        let current = this.head;
        while (current.next !== null) {
          current = current.next; // Move to the next node
        }
        current.next = newNode; // Append the new node at the end
      }
    }
  
    // Traverse and print the list
    traverse() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value); // Process the current node
        current = current.next;    // Move to the next node
      }
    }
  }
  
  // Node class
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Example usage:
  const list = new LinkedList();
  list.append(10);
  list.append(20);
  list.append(30);
  
  console.log("Traversing the list:");
  list.traverse();
  