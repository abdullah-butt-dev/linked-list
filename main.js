import { linkedList } from "./factory.js";

const list = linkedList();


// append
list.append(10);
list.append(20);
list.append(30);
console.log("After append 10,20,30:", list.toString()); // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// prepend
list.prepend(5);
console.log("After prepend 5:", list.toString()); // ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

// size
console.log("Size:", list.size()); // 4 (or 5 if counting fixed)

// getHead and getTail
console.log("Head:", list.getHead()); // 5
console.log("Tail:", list.getTail()); // 30

// at()
console.log("Value at index 2:", list.at(2)); // 20
console.log("Value at index 0:", list.at(0)); // 5
console.log("Value at index 10 (out of bounds):", list.at(10)); // undefined

// contains()
console.log("Contains 20:", list.contains(20)); // true
console.log("Contains 99:", list.contains(99)); // false

// findIndex()
console.log("Index of 20:", list.findIndex(20)); // 2
console.log("Index of 99:", list.findIndex(99)); // -1

// insertAt()
list.insertAt(2, 15, 17);
console.log("After insertAt index 2 (15,17):", list.toString());
// ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 17 ) -> ( 20 ) -> ( 30 ) -> null

// removeAt()
list.removeAt(3);
console.log("After removeAt index 3:", list.toString());
// ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> ( 30 ) -> null

list.removeAt(0);
console.log("After removeAt head:", list.toString());
// ( 10 ) -> ( 15 ) -> ( 20 ) -> ( 30 ) -> null

list.removeAt(list.size() - 1);
console.log("After removeAt tail:", list.toString());
// ( 10 ) -> ( 15 ) -> ( 20 ) -> null

const popped = list.pop();
console.log("Popped value:", popped); // 20
console.log("After pop():", list.toString()); // ( 10 ) -> ( 15 ) -> null

