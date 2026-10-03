class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = height[0]; 
        let rightMax = height[height.length - 1];
        let totalTrappedWater = 0;
        
        let l = 0, r = height.length - 1; 
        
        while (l <= r) {
            if (height[l] <= height[r]) {
                if (height[l] > leftMax) leftMax = height[l];

                totalTrappedWater += Math.max(0, leftMax - height[l]);
                l++;
            } else {
                if (height[r] > rightMax) rightMax = height[r];

                totalTrappedWater += Math.max(0, rightMax - height[r]);
                r--;
            }
        }

        return totalTrappedWater;
    }
}


// loop through height
// create an array with the biggest height so far
// loop through height from back
// create another array with biggest height so far

// [0, 2, 2, 3, 3, 3, 3, 3, 3, 3]
// [3, 3, 3, 3, 3 ,3, 3, 3, 2, 1]

// height at any given position = min (maxLeft, maxRight) - height[i]
// if value >= 0 add to total water

// ----
// 2 pointers
// leftMax = 0, rightMax = 0
// start left pointer at 0 and right pointer at len - 1
    // if l <= r
        // calculate water for left index and increment left
    // else
        // calculate water for right index and decrement right

// Why 2 pointers works:
    // at index i we need the min of leftMax and rightMax
    // lets say left max is 2 and right max is 3
    // lets say l and i are 0 and r is 3
        // then the water that can be stored at i is only 2, no matter the right side height of i is greater or smaller than right max
        // why? because if right side height is greater than 2, it does not matter because left max is only 2 and water will overflow even if right max is greater than 2
        // if is right side height is smaller than 2, it does not matter because the water that can be stored at i will still be 2 because there is a rightMax if height atleast 3
    
    // how does incrementing the smaller index work?
        //<fill this for me>

// -------        

// identify: what is the water that can be stored at an index i?
    // max left height so far
    // max right height so far
    // take minimum of the heights. why because no matter how big one side is, water will be overflowed from other side
    // why max heights so far: we do not need to consider the heights exactly to the left or right of i, but the max height to left and the max height to right, why because if there is a max right height > the height to the right of i, the water that can be stored at i will the min(leftmax, rightmax) - height[i]
// example: [5, 1, 3, 4], lets say i is at index 1, the water that can be stored at i is not 2 but it is 3 because the right max is 4.
// *** at the ends no water can be stored because left max of left end is 0, and right max at right end is 0 the min max at the ends will be 0

// for this we will need to maintain 2 arrays, one for leftmax so far and one for right max so far
// then again loop through heights and use the formula to check the water at each index
// make the arrays inclusive of current height because that can be directly translated to the 2 pointers solution

// ----

// 2 pointers:

// calculating the height at the smaller index and moving the pointer is always safe due to below factor:
// 1. the water trapped at height i can be determined:
    // - because we know there is a right max at least greater than the left max, so even if there is a height or heights smaller or larger than the leftmax, the water that can be trapped at height i is already determined
    // - water at the bigger height is not fully determined because there could be leftmax some where in between. i.e. to the left of the bigger index. 
    // for example: 2 0 4 2 6
                //  i.      j
    // if we move the right index then the water at index 3 cannot be correctly determined because there could a leftmax some where in between > 2, in this case it is 4. so water at 3 can be stored is 2 but if we move the right bigger before it self the water cannot be determined correctly
    // however we can move the left index because at index 1, no matter the height of the right side heights, we already have a right max that is greater than the current left max, so any bigger or smallers heights in between does not make any difference
    // now lets flip the example to opposite sides
        // 6 2 4 0 2
    // in this case the index at position 3 can be fully determined because we know there is a rightmax which is 2 a leftmax 6 which is greater than the existing left max for that index so, the water storage is fully determined
    // so finally moving the smaller index means that the water storage is fully determined due to the fact that min (leftmax, rightmax) is determined.
    // why can't the min (leftmax, rightmax) not be fully determined if we move the bigger index? because the min value has a chance of increasing as there is still chance for the smaller max to grow upto the existing max. but moving the smaller height means the min (leftmax, rightmax) cannot change because on one side we have the tallest tower and the other side upto that point we have determined the tallest tower. so on the bigger side no matter the height of the other towers, the water level cannot change.



        //     for (let i = 0; i < height.length; i++) {
        //     if (i === 0) {
        //         leftMaxArray[i] = height[i];
        //     }else if (height[i] > leftMaxArray[i-1]) {
        //         leftMaxArray[i] = height[i];
        //     } else {
        //         leftMaxArray[i] = leftMaxArray[i-1];
        //     }
        // }

        // for (let j = height.length - 1; j >= 0; j--) {
        //     if (j === height.length - 1) {
        //         rightMaxArray[j] = height[j];
        //     }else if (height[j] > rightMaxArray[j + 1]) {
        //         rightMaxArray[j] = height[j];
        //     } else {
        //         rightMaxArray[j] = rightMaxArray[j + 1];
        //     }
        // }

        // for (let k = 0; k < height.length; k++) {
        //     const lMaxAtK = leftMaxArray[k];
        //     const rMaxAtK = rightMaxArray[k];
        //     const waterAtK = Math.max(0, Math.min(lMaxAtK, rMaxAtK) - height[k]);

        //     totalTrappedWater += waterAtK;
        // }