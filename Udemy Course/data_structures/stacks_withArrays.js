 
  
  class Stack {
    constructor(){
      this.array = [];
    }
    peek() {

        return this.array[this.array.length-1];

    }
    push(value){
        this.array.push(value)
        return this
    }
    pop(){
        if(this.array.length>0){
            this.array.pop()
        }
        return this
    }
    isEmpty(){
        
    }
  }
  
  const myStack = new Stack();
  
  myStack.push('Discord')
  myStack.push('Udemy')
  console.log(myStack.push('google'))
  console.log(myStack.peek())
//   console.log(myStack.isEmpty())
  console.log(myStack.pop())
  console.log(myStack.pop())
  console.log(myStack.pop())
//   console.log(myStack.isEmpty())
  //Discord
  //Udemy
  //google
  