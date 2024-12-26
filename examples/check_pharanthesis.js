// ## This code validates paranthesis usage in a text

function isValidParentheses(input) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };

    for (const char of input) {
        if (pairs[char]) { // It's a closing bracket
            if (stack.pop() !== pairs[char]) {
                return false; // Mismatch or no matching opening bracket
            }
        } else if ('({['.includes(char)) {
            stack.push(char); // It's an opening bracket
        }
    }

    return stack.length === 0; // Check if all brackets matched
}

// Example usage:
console.log(isValidParentheses("{[()]}")); // true
console.log(isValidParentheses("{[(])}")); // false
console.log(isValidParentheses("{[()]}()")); // true
