class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const colMap = new Map();
        const boxMap = new Map();

        for (let row = 0; row < board.length; row++) {
            const rowSet = new Set();
            for (let col = 0; col < board[row].length; col++) {
                const element = board[row][col];

                if (element === '.') continue;

                const colKey = col.toString();
                const boxKey = Math.floor(row / 3).toString() + Math.floor(col / 3).toString();

                if (rowSet.has(element)) return false;
                rowSet.add(element);

                if (colMap.has(colKey)) {
                    const colKeyElements = colMap.get(colKey);

                    if (colKeyElements.includes(element)) return false;

                    colKeyElements.push(element);
                } else {
                    colMap.set(colKey, [element]);
                }

                if (boxMap.has(boxKey)) {
                    const boxKeyElements = boxMap.get(boxKey);

                    if (boxKeyElements.includes(element)) return false;

                    boxKeyElements.push(element);
                } else {
                    boxMap.set(boxKey, [element]);
                }
            }
        }

        return true;
    }
}
