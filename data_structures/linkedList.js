
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
}

const myLinkedList = new LinkedList(19)
console.log(myLinkedList.append(11))
console.log(myLinkedList.append(11123))
console.log(myLinkedList.prepend(99))
 