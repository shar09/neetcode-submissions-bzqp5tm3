class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (const row of board) {
            const rowSet = new Set();
            for (const element of row) {
                if (element === '.') continue;
                if (rowSet.has(element)) {
                    return false;
                }
                rowSet.add(element);
            }
            
        }

        let j = 0;
        while (j < board[0].length) {
            const colSet = new Set();
            for (let i = 0; i < board.length; i++) {
                const element = board[i][j];
                if (element === '.') continue;
                if (colSet.has(element)) return false;
                colSet.add(element);
            }
            j++;
        }

        const map = new Map();
        for (let c = 0; c < board.length; c++) {
            for (let r = 0; r < board[c].length; r++) {
                const element = board[c][r];
                if (element === '.') continue;

                const key = Math.floor(c / 3).toString() + ',' + Math.floor(r / 3).toString();

                if (map.has(key)) {
                    const valSet = map.get(key);
                    if (valSet.has(element)) return false;
                    valSet.add(element);
                } else {
                    map.set(key, new Set([element]))
                }
            }
        }

        return true;
    }
}

