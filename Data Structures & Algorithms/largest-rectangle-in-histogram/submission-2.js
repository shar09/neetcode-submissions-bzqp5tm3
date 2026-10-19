class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = [];
        let area = 0;
        let i = 0;

        for (; i < heights.length; i++) {
            const height = heights[i];
            
            if (stack.length === 0) {
                stack.push([i, height]);
            } else {
                let topOfStack = stack[stack.length - 1];

                if (topOfStack[1] <= height) {
                    stack.push([i, height]);
                } else {
                    let popped;
                    while (stack.length > 0 && topOfStack[1] > height) {
                        popped = stack.pop();
                        
                        area = Math.max(area, (i - popped[0]) * popped[1]);
                        topOfStack = stack[stack.length - 1];                      
                    }

                    stack.push([popped[0], height]);
                }
            }
        }

        while (stack.length > 0) {
            const popped = stack.pop();
            area = Math.max(area, (i - popped[0]) * popped[1]);
        }

        return area;
    }
}

// Brute force: o (n) square

// given an index i
    // it can expand to the left until left height < i
    // it can expand to the right until right height < i

        // let area = 0;
        // let i = 0;

        // while (i < heights.length) {
        //     const height = heights[i];

        //     // expand left
        //     let l = i - 1;
        //     while (l >= 0 && height <= heights[l]) {
        //         l--;
        //     }

        //     // expand right
        //     let r = i + 1;
        //     while (r < heights.length && height <= heights[r]) {
        //         r++;
        //     }

        //     area = Math.max(area, (r - l - 1) * height);
        //     i++;
        // }

        // return area;
    
