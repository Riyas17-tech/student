// Import named exports
import { add, multiply } from './mathUtils.js';

// Import default export
import greet from './mathUtils.js';

// Use functions
console.log("Addition:", add(5, 3));          // 8
console.log("Multiplication:", multiply(4, 6)); // 24

// Call greet function
greet("Mohameed");

// Display results in HTML
document.getElementById("output").textContent =
  `add(5, 3) = ${add(5, 3)}\n` +
  `multiply(4, 6) = ${multiply(4, 6)}`;
