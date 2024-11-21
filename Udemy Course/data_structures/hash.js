let user = {
    age: 11,
    scream: function(a){
        for(let i= 0; i<a;i++){
            console.log("aaaahhhh")
        }
    }
}

user.scream(2)


// Example 2
class HashTable {
    constructor(size){
      this.data = new Array(size);

    }

    set(key,value){
        let address = this._hash(key) 
        if(!this.data[address]){ // We need to initialize the second array in data to insert values
            this.data[address] = []
        }
        this.data[address].push([key, value]);

        return this.data;

    }//O(1)
  

    get(key){
        let adress = this._hash(key);
        const currentBucket =  this.data[adress]
        console.log(currentBucket)
        if(currentBucket){

            for(let i = 0;i<currentBucket.length;i++){
                if(currentBucket[i][0] === key){
                    console.log(currentBucket[i][1])
                    return currentBucket[i][1]

                }
            }


        }else{
            return undefined
        }

    }//O(1)

    getKeys(){
        let keyArray = []
        for(let i = 0;i<this.data.length;i++){
            if(this.data[i]){
                // console.log(this.data[i])
                this.data[i].forEach(element => {
                    // console.log(element[0])
                    keyArray.push(element[0])
                });
            }
        }
        return keyArray
    }
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){ 
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    } //  O(1)
  }
  
const myHashTable = new HashTable(2);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 11200)
// myHashTable.get('apples')
console.log(myHashTable.getKeys())
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')

  