class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        this.prefixSumMatrix = this.prefixSumMatrix(this.matrix);
    }

    prefixSumMatrix(matrix) {
        const prefixSumMatrix = Array.from({ length: matrix.length }, () => []);
        for (let row = 0; row < matrix.length; row++) {
            let prefixSumRow = 0;
            for (let col = 0; col < matrix[row].length; col++) {
                prefixSumRow += matrix[row][col];
                const prefixSumCell = prefixSumRow + (prefixSumMatrix[row - 1]?.[col] ?? 0);
                prefixSumMatrix[row][col] = prefixSumCell;
            }
            prefixSumRow = 0;
        }

        return prefixSumMatrix;
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        const currentElement = this.prefixSumMatrix[row2][col2] ?? 0;
        const leftCorner = this.prefixSumMatrix[row2]?.[col1 - 1] ?? 0;
        const topCorner = this.prefixSumMatrix[row1 - 1]?.[col2] ?? 0;
        const topLeftCorner = this.prefixSumMatrix[row1 - 1]?.[col1 - 1] ?? 0;

        return currentElement - leftCorner - topCorner + topLeftCorner;
        
        // if (!Number.isInteger(leftCorner) && !Number.isInteger(topCorner)) {
        //     return currentElement;
        // }

        // if (Number.isInteger(leftCorner) && Number.isInteger(topCorner)) {
        //     return currentElement - leftCorner - topCorner + topLeftCorner;
        // }

        // if (Number.isInteger(leftCorner) && !Number.isInteger(topCorner)) {
        //     return currentElement - leftCorner;
        // }

        // if (!Number.isInteger(leftCorner) && Number.isInteger(topCorner)) {
        //     return currentElement - topCorner;
        // }
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// prefixsum [i] - prefixsum[row2][col1 -1] - prefix[row1 -1][col2] + matrix[row1-1][col1 - 1]
// check for out of bounds -> all out of bounds values will be 0s
// only add back the corner element if both subtracted values are in bounds. if only one subtracted or no subtracted value is in bound do not add corner element.

// how to create the prefix sum array:
    // loop through the matrix: double loop i, j
    // create a variable for prefix sum of row so far
    // matrix[i][j] + prefixSumMatrix[i - 1] + prefixSum of row so far

