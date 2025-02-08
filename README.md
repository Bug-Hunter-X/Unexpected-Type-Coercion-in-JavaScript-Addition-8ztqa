# Unexpected Type Coercion in JavaScript Addition

This example demonstrates a common error in JavaScript caused by loose typing and implicit type coercion during addition. When adding a number and a string, JavaScript concatenates them instead of performing numerical addition, leading to unexpected results.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## How to reproduce

1. Clone the repository.
2. Run `node bug.js` to see the unexpected output.
3. Run `node bugSolution.js` to see the corrected output.

## Solution

The solution is to ensure that both operands are numbers before performing the addition.  This can be done using `parseInt()` or `Number()` to explicitly convert the string to a number.