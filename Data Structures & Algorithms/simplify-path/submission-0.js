class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const tokens = path.split('/');
        const stack = [];
        let simplifiedPath = "";

        for (const token of tokens) {
            if (token === "") continue;

            if (token === ".") continue;

            if (token === "..") {
                stack.pop();
                continue;
            }

            stack.push(token);
        }

        if (stack.length === 0) return "/";

        while (stack.length > 0) {
            simplifiedPath = "/" + stack.pop() + simplifiedPath;
        }

        return simplifiedPath;
    }
}


// if .. then pop the most recently directly
// if ./ treat it as just slash
// all slashes can be treated as just one slash
// ... or abd.ef should be treated as directory names
// do not end the file name with a slash


// valid syntax
// ../ ; ./ ; / / / /; /

// rest everything is seen as folder names

// when we see a ../ we need to pop the top folder in the stack

// stack:
    // holds all the folder names from child to parent

// loop through the path
    // let i = 0, j = 0
        // keep icrementing j to identify whether it is a separator or folder name or neither

// stuck: how to properly identify the separators as they can literally be anything and not in a proper format

// approach:
    // split the tokens using a /
    // why? because valid tokens can be found between the slashes
    // this is the most important logic as it filters out most of the invalid tokens

    // token rules:
        // "": ignore
        // . : ignore
        // ".." pop from stack
        // anything else: push to stack


