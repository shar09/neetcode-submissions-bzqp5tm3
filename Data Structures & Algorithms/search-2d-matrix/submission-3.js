class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let low = 0, high = matrix.length;
        let mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            const firstElementInRow = matrix[mid][0];
            const lastElementInRow = matrix[mid][matrix[mid].length - 1];

            if (firstElementInRow <= target && lastElementInRow >= target) {
                break;
            } else if (firstElementInRow > target) {
                high = mid;
            } else if (firstElementInRow < target) {
                low = mid + 1;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        let row = mid;
        
        if (row === -1 || row === matrix.length) {
            return false;
        }

        low = 0, high = matrix[row].length;
        mid = low + Math.floor((high - low) / 2);

        while (low < high) {
            if (matrix[row][mid] === target) {
                return true;
            } else if (matrix[row][mid] > target) {
                high = mid;
            } else if (matrix[row][mid] < target) {
                low = mid + 1;
            }

            mid = low + Math.floor((high - low) / 2);
        }

        return false;
    }
}


// binary search first element of each row
// binary search all columns in found row