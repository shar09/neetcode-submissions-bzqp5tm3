class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let low = 0, high = matrix.length * matrix[0].length;
        let mid = low + Math.floor((high - low) / 2);
        let matrixRow = Math.floor(mid / matrix[0].length);
        let matrixCol = mid % matrix[0].length;

        while (low < high) {
            const number = matrix[matrixRow][matrixCol];
            if (number > target) {
                high = mid;
            } else if (number < target) {
                low = mid + 1;
            } else {
                return true;
            }

            mid = low + Math.floor((high - low) / 2);
            matrixRow = Math.floor(mid / matrix[0].length);
            matrixCol = mid % matrix[0].length;
        }
        
        return false;
    }   
}

// virtually flatten the matrix
// 0 .... m * n - 1 indexes

