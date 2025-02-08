function foo(a, b) {
  // Explicit type conversion using Number()
  return Number(a) + Number(b);
}

console.log(foo(5, "5")); // Output: 10