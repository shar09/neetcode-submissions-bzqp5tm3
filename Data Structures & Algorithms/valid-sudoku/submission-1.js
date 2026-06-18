class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowsMap = new Map();
        const colsMap = new Map();
        const gridMap = new Map();
    
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                const num = board[row][col];
                if (num === '.') continue;

                // Row
                if (rowsMap.has(row)) {
                    if (rowsMap.get(row).includes(num)) {
                        return false;
                    } else {
                        rowsMap.get(row).push(num);
                    }
                } else {
                    rowsMap.set(row, [num]);
                }
                
                // Column
                if (colsMap.has(col)) {
                    if (colsMap.get(col).includes(num)) {
                        return false;
                    } else {
                        colsMap.get(col).push(num);
                    }
                } else {
                    colsMap.set(col, [num]);
                }

                // Grid
                const gridKey = Math.floor(row / 3).toString() + Math.floor(col / 3).toString();

                if (gridMap.has(gridKey)) {
                    if (gridMap.get(gridKey).includes(num)) {
                        return false;
                    } else {
                        gridMap.get(gridKey).push(num);
                    }
                } else {
                    gridMap.set(gridKey, [num]);
                }         
            }
        }

        return true;
    }
}

// [["1","2",".",".","3",".",".",".","."],
//  ["4",".",".","5",".",".",".",".","."],
//  [".","9","8",".",".",".",".",".","3"],
//  ["5",".",".",".","6",".",".",".","4"],
//  [".",".",".","8",".","3",".",".","5"],
//  ["7",".",".",".","2",".",".",".","6"],
//  [".",".",".",".",".",".","2",".","."],
//  [".",".",".","4","1","9",".",".","8"],
//  [".",".",".",".","8",".",".","7","9"]]

// HashMap: 1 for rows and 1 for columns with key: [array of values]

// Loop through the array: for each element add them to respective row and column key in the hashmap
// when adding the element to the hashmap
    // IF the element already exists in the hashmap then return false

// Math.floor(rows / 3), Math.floor(cols / 3) -> this will give us the grid elements
// Create a hashmap for grid elements with key (x, y): [array of values]