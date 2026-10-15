class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const positionXspeed = [];
        let fleet = position.length;

        for (let i = 0; i < position.length; i++) {
            positionXspeed[i] = [position[i], speed[i]];
        }

        positionXspeed.sort((a, b) => a[0] - b[0]);

        let j = positionXspeed.length - 1;

        while (j >= 0) {
            const fleetTime = (target - positionXspeed[j][0]) / positionXspeed[j][1];

            let k = j - 1;

            while (k >= 0) {
                const incomingCarTime = (target - positionXspeed[k][0]) / positionXspeed[k][1];

                if (incomingCarTime <= fleetTime) {
                    fleet--;
                    k--;
                } else {
                    break;
                }
            }

            j = k;
        }

        return fleet;
    }
}


// 0 1 2 3 4 5 6 7 8 9 10

//   3     2
//         3   2
//               3 2
//                     32


// 0 1 2 3 4 5 6 7 8 9 10
// 1 2     2     1
//   1.  2.    2.  1
//     1.    2     2 1
//       1.      2.     21
//         1.         2.      21
//           1.               2
//                            1


// create a new array of length target
// where index is the position
// constraint: all values of position are unique in the beginning, they cars may be at same positon later

// loop through positions array
    // new array highway[positon[i]] = speed[i]

// loop through highway
    // add another loop until all elements reach the end
        // once a higher speed car catches up to the lower speed car they move at the speed of lower speed car. i.e 0th element in the fleet


// new approach:
    // time = (target - position) / speed
    // loop through the highway array from back 
    // calculate time for j
    // if j >= j - 1 the keep adding the cars to the fleet
    // else increment fleet count and start new fleet

// we need to compare the new car speed with the time of the fleet ahead, not just the car ahead.

