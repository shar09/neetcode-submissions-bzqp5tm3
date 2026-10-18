class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let currentString = '';
        let currentNumber = '';
        const stack = [];

        for (const ch of s) {
            if (ch >= '0' && ch <= '9') {
                currentNumber += ch;
            } else if (ch >= 'a' && ch <= 'z') {
                currentString += ch;
            } else if (ch === '[') {
                stack.push([currentString, currentNumber]);
                currentNumber = '';
                currentString = '';
            } else if (ch === ']') {
                const outerContext = stack.pop();
                const outerString = outerContext[0];
                const outerNumber = Number(outerContext[1]);

                currentString = outerString + currentString.repeat(outerNumber);
            }
        }

        return currentString;
    }
}

// new approach:
    // don't use ascii

    // current string
    // current number

    // how to build stack:
    // digit → build currentNumber
    // letter → append to currentString
    // '[' → save currentString + currentNumber
    // ']' → resolve the nested section

    // outer context enters the stack on '['
    // inner context is popped and added to outer context on ']'
    // regular strings without any open and closed braces are just added to the current string in sequential order
    // current string does not always hold the entire string built so far, instead the current string state is stored in a stack

// ----

// text format:
    // just regular letters
    // number -> square brackets -> letters
    // nested: number -> square brackets -> letter -> number -> square brackets
    // number can be of range 1 to 300

// 2 pointers:
    // start i at 0 and j at 0
    
    // if stack.length === 0
        // if only letters -> just add to output string
    
    // else
    // tempString
    // if number -> build the number -> add to stack
        // a number is immediately followed by open square bracket

        // build the string inside -> add to stack

        // inside can have numbers and square brackets again

        // if number or square bracket then build the number and add to stack
        
        // if string build the string and add to stack

        // if closing square bracket

        // pop last two -> number * string
        // add to temp string


//  stuck: 2[a3[b]c]c
// now how to build temp string? because we will pop c and a, how to we know we need to add c after b and a before b?
    

// ascii:
// [ - 91
// ] - 93
// 0 - 9: 48 - 57
// a - z: 97 to 122



// 2[a3[b]]c

// current string = ''
// current number = 2

// open braces
// current string = a

// again number - 3
// push 2a to stack
// current number = 3
// current string = ''

// open braces
// current string = b

// closed braces


// on closed brace should we push to stack or pop?
// on new number, we push the existing string to stack?
// when do we push to stack and when do we pop?
// when do we add to output string?