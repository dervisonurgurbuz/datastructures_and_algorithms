// USING MAP AS A HASH TABLE

// Creating a hash table using Map
let hashTable = new Map();

// Adding key-value pairs
hashTable.set("name", "Alice");
hashTable.set("age", 30);

// Accessing values
console.log(hashTable.get("name")); // Output: "Alice"

// Updating a value
hashTable.set("age", 31);

// Removing a key-value pair
// hashTable.delete("name");
console.log(hashTable.has('name')); 
console.log(hashTable.size);
console.log(hashTable); // Output: Map { 'age' => 31 }
hashTable.delete('age')
console.log(hashTable);


// USING OBJECTS AS A HASH TABLE

// // Creating a hash table using an object
// let hashTable2 = {};

// // Adding key-value pairs
// hashTable2["name"] = "Alice";
// hashTable2["age"] = 30;

// // Accessing values
// console.log(hashTable2["name"]); // Output: "Alice"

// // Updating a value
// hashTable2["age"] = 31;

// // Removing a key-value pair
// delete hashTable2["name"];
// console.log(hashTable2); // Output: { age: 31 }
