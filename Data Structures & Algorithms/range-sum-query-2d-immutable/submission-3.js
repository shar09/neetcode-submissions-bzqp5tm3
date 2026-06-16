class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.prefixSumMatrix = [];

        for (let rows = 0; rows < matrix.length; rows++) {
            let prefixSum = 0;
            const prefixSumRow = [];
            for (let cols = 0; cols < matrix[rows].length; cols++) {
                prefixSum += matrix[rows][cols];

                const previousRowPrefixSum = this.prefixSumMatrix[rows-1]?.[cols] ?? 0;

                prefixSumRow.push(prefixSum + previousRowPrefixSum);
            }
            this.prefixSumMatrix.push(prefixSumRow);
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        if (row1 - 1 === -1 && col1 - 1 === -1) {
            return this.prefixSumMatrix[row2][col2];
        }

        if (col1 - 1 >= 0 && row1 - 1 >= 0) {
            return this.prefixSumMatrix[row2][col2] - this.prefixSumMatrix[row2][col1 - 1] 
                - this.prefixSumMatrix[row1 - 1][col2] + this.prefixSumMatrix[row1 - 1][col1 - 1];
        }

        if (row1 - 1 === -1) {
            return this.prefixSumMatrix[row2][col2] - this.prefixSumMatrix[row2][col1 - 1];
        }

        if (col1 - 1 === -1) {
            return this.prefixSumMatrix[row2][col2] - this.prefixSumMatrix[row1 - 1][col2];
        }
    }
}

// prefixSumMatrix[row2][col2]

// subtract only once: prefixSumMatrix[row1][col-1]
// IF col1 - 1 >= 0 && row1 - 1 >= 0
     // RETURN prefixSumMatrix[row2][col2] - prefixSumMatrix[row2][col1-1] 
    // - prefixSumMatrix[row1 - 1][col2] + prefixSumMatrix[row1][col-1]

// IF row1 - 1 === -1
    // RETURN prefixSumMatrix[row2][col2] - prefixSumMatrix[row2][col1-1]

// IF col1 - 1 === -1
    // RETURN prefixSumMatrix[row2][col2] - prefixSumMatrix[row1 - 1][col2]

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]

// [3, 0, 1, 4, 2]
// 3 0 4 8 2

// how to calculate prefix sum for matrix?
    // prefixSumRow[j-1] + matrix[i][j] + prefixSumMatrix[i - 1][j];
    // check for -1 indexes when calculating for i - 1 and j -1
