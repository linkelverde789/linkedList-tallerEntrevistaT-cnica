console.log("Data Structures Challenge: Linked List");

const LinkedList = require("./data-structures/linked-list.js");

const linkedList = new LinkedList();
const MAX = 10;

// Insert elements into the linked list
console.log("Inserting elements...");
for (let i = 0; i < MAX; i++) {
  const res = linkedList.insert(i);
  if (!res) {
    console.log(`Insert ${i} returned ${res}`);
  }
}

// Print the current state of the linked list
print(linkedList);

// Delete an element by position
console.log("\nDeleting element at position 3...");
const deletedByPosition = linkedList.deleteByPosition(3);
console.log(`Delete by position result: ${deletedByPosition}`);
print(linkedList);

// Delete an element by value
console.log("\nDeleting element with value 7...");
const deletedByValue = linkedList.deleteByValue(7);
console.log(`Delete by value result: ${deletedByValue}`);
print(linkedList);

// Search for a value in the list
console.log("\nSearching for value 5...");
const searchResult = linkedList.searchByValue(5);
console.log(`Search result for value 5: ${searchResult}`);

// Reverse the linked list
console.log("\nReversing the linked list...");
linkedList.reverse();
print(linkedList);

// Helper function to print the state of the linked list
function print(list) {
  console.log(
    `Linked List: [${list.toArray().join(", ")}] | Elements: ${list.elements}`
  );
}
