class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        this.matrix = matrix;
        this.prefixSumMatrix = this.prefixSum();
    }

    prefixSum() {
        const matrix = this.matrix;
        const prefixSumMatrix = Array.from({ length: matrix.length }, () => []);

        // calculate prefix sum of first row
        let firstRowPrefixSum = 0;
        for (const num of matrix[0]) {
            firstRowPrefixSum += num;
            prefixSumMatrix[0].push(firstRowPrefixSum);
        }

        for (let i = 1; i < matrix.length; i++) {
            let prefixSum = 0;
            for (let j = 0; j < matrix[i].length; j++) {
                prefixSum += matrix[i][j];
                const currentValue = prefixSum + prefixSumMatrix[i-1][j]
                prefixSumMatrix[i][j] = currentValue;
            }
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
        const psMatrix = this.prefixSumMatrix;
        return psMatrix[row2][col2] - (psMatrix[row1 - 1]?.[col2] ?? 0) - (psMatrix[row2][col1 - 1] ?? 0) + (psMatrix[row1 - 1]?.[col1 - 1] ?? 0);
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]
//      0 1 2 3 4

// 0    3 0 1 4 2
// 1    5 6 3 2 1
// 2    1 2 0 1 5
// 3    4 1 0 1 7
// 4    1 0 3 0 5