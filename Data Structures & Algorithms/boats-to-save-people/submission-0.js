class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let i = 0, j = people.length - 1;
        let boatCount = 0;

        while (i <= j) {
            if (i === j) {
                boatCount += 1;
                break;
            }

            let sum = people[j];
            j--;
            
            if (sum + people[i] <= limit) i++;

            boatCount += 1;
        }

        return boatCount;
    }
}

// case 1: i and j converge at same index that need to be checked
// case 2: i and j are checked already and are converged: not possible
// [1, 2, 4, 5]

// sort and 2 pointers

// once sorted
    // create boatCount
    // start i at 0, j at end
    // while i <= j
        // sum = j
        // j--;
        // IF i can be added to sum
            // add to sum
            // i++
        
        // bountCount += 1;

        