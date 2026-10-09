class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        let i = 0;
        
        while (i < asteroids.length) {
            const asteroid = asteroids[i];
            let j = stack.length - 1;

            while (true) {
                if (stack.length === 0 || (stack[j] > 0 && asteroid > 0) || (stack[j] < 0 && asteroid < 0) || (stack[j] < 0 && asteroid > 0)) {
                    stack.push(asteroid);
                    break;
                } else if (Math.abs(asteroid) === Math.abs(stack[j])) {
                    stack.pop();
                    break;
                } else if (Math.abs(asteroid) > Math.abs(stack[j])) {
                    stack.pop();
                    j--;
                } else if (Math.abs(asteroid) < Math.abs(stack[j])) {
                    break;
                }
            }
            i++;
        }

        return stack;
    }
}

// why 2 pointers will not work
// [2, -3, 2, 1]

// stack:
// push to stack

// if same side as top
    // push to stack
    
// else if opposide side and same number as top
    // pop
// else
    // while opposite element > top
        // pop

// i++;

// the stack can have only one side of asteroid at a time
    // opposite asteroid will either eliminate all asteroids in stack or get destroyed

// [5, 5, -3, -8] -> -8
// [10, -8, 5, -10]
