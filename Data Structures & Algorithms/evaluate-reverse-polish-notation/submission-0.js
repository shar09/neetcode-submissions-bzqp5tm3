class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ["+", "-", "*", "/"];

        for (const token of tokens) {
            let isOperator;
            if (operators.includes(token)) {
                isOperator = true;
            }

            if (isOperator) {
                let n1 = stack.pop();
                let n2 = stack.pop();

                let result;
                
                if (token === '+') {
                    result = n2 + n1;
                } else if (token === '-') {
                    result = n2 - n1;
                } else if (token === '*') {
                    result = n2 * n1;
                } else {
                    result = Math.trunc(n2 / n1);
                }

                stack.push(result);
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}

// RPN: postfix

// operands can be just integers or the results of the operations
// operators include +, -, *, /

// 3 + 4; 34+;
// 1 - 2 * 3; 123*-;
// 1 * 2 - 3; 12*3-;

// pseudo code:
    // push integers to the stack
        // if operator then pop the last 2 elements and push the result
        // (n - 2) operator (n - 1) = result

        // if operator is /, just convert the value to an integer - Math.trunc


