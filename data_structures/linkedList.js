
// # Linklist append, prepend, insert and remove

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next : null
        }
        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        };
        // this states the initial linkedlist that where this method has been used.
       this.tail.next = newNode
       this.tail = newNode
       this.length += 1
       return this
    }

    prepend (value){
        const newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head
        this.head = newNode
        this.length++;
        return this
    }

    insert(index, value) {
        if (index >= this.length) {
          return this.append(value); // Append if index is out of bounds
        }
      
        const newNode = { value, next: null };
        const leader = this.traverseToIndex(index - 1); // Get the node before the index
        console.log(leader)
        console.log(leader.value)
        newNode.next = leader.next; // Link the new node to the next node
        leader.next = newNode; // Link the leader to the new node
        this.length++; // Increase the length
        return this.printList() // Return the updated list

        // ## Key Takeaway: In a singly linked list, you don't need direct access to previous nodes. 
        // By managing the next pointers of the leader and the new node, you can efficiently perform insertions.
      }
      
      traverseToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
          currentNode = currentNode.next;
        }
        return currentNode;
      }

      remove(index){
        let leader = this.traverseToIndex(index-1)

        leader.next = leader.next.next
        return this.printList()
      }

      printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
      }
}

const myLinkedList = new LinkedList(19)
myLinkedList.append(11)
myLinkedList.append(11123)
myLinkedList.prepend(99)
console.log(myLinkedList.insert(3,3))
console.log(myLinkedList.remove(2))