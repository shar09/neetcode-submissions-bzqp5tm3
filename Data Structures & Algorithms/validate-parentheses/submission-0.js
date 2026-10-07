class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const openRound = '(';
        const closeRound = ')';

        const openSquare = '[';
        const closeSquare = ']';

        const openCurly = '{'
        const closeCurly = '}';

        for (const bracket of s) {
            if (bracket === openRound || bracket === openSquare || bracket === openCurly) stack.push(bracket);

            else {
                const lastBracketInStack = stack[stack.length - 1];
                const negatingBracketFound = (bracket === closeRound && lastBracketInStack === openRound) || (bracket === closeSquare && lastBracketInStack === openSquare) || (bracket === closeCurly && lastBracketInStack === openCurly);

                if (negatingBracketFound) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0 ? true : false;
    }
}


// when you see a open bracket push to stack
// when you see a closed bracket, check if the last element has a corresponding open bracket, it is does then pop it

// the stack is always filled with open brackets only and the brackets are popped only if matching closed brackets are seen at the correct position