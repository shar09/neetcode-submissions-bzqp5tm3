class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let i = 0, j = people.length - 1;
        let numberOfBoats = 0;

        while (i <= j) {
            if (i === j) {
                numberOfBoats++;
                break;
            }

            if (people[i] + people[j] <= limit) {
                i++;
                j--;
            } else {
                j--;
            }

            numberOfBoats++;
        }

        return numberOfBoats;
    }
}

// sort the array in asceding order
// [1, 2, 4, 5] l = 8

// can i and j both go together?
//     put i and j
//     i++;
//     j--;
// else
//     put largest of i or j
//         move either i or j depending on who went in the boat

// why does pairing heaviest with lightest work?
    // if the lightest cannot go with the heaviest then no one else can
        // so heaviest goes alone
    // why is pairing lighest with heaviest always work. because if an optimal solution pairs heaviest and lightest with different people, those pairings can be rearranged to pair lightest + heaviest without using more boats.
    // proof: L + MH <= limit
        //    H + ML <= limit
    // rearrange: MH <= H so ML can always go with MH "ML + MH" and L <= ML so H can always go with L
    // even though this may not be the most optimal solution always it still works because even if we rearrange them the numbers of boats with not decrease 

