function foo(a, b) {
  if (a === null || b === null) {
    return null; // Correct handling of null values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: null

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // Incorrect handling of null values
  }
  return a + b;
}

console.log(bar(1, 2)); // Output: 3
console.log(bar(null, 2)); // Output: 0
console.log(bar(1, null)); // Output: 0
console.log(bar(null, null)); // Output: 0
//This is a subtle bug that can be difficult to track down. The use of == instead of === when checking for null values can lead to unexpected results. 
//The difference is that == performs type coercion, while === does not.
//This means that == will consider null and undefined to be equal to 0, while === will not.
//In the example above, the function bar will return 0 if either a or b is null, even if the other value is a number.
//This is because the == operator will coerce null to 0, and then add 0 to the other value.
//This is a subtle error that is easy to miss. By using ===, you can ensure that null values are handled correctly, and prevent unexpected results.