// We need to find the largest square comprising of all ones in the given m×n matrix.
// In other words we need to find the largest set of connected ones in the given matrix that forms a square.
const findMaxSquareBruteForce = matrix => {
    // O((mn)^2) worst case
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxsqlen = 0; // max square size
    // console.log(`rows: ${rows}`);
    // console.log(`cols: ${cols}`);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 1) {
                // found a 1, calculate size of square starting here
                let sqlen = 1;
                let flag = true;
                // console.log(`${i}, ${j}`);
                // while the current square length (sqlen) plus the current i or j is within the matrix and the flag is true
                while (sqlen + i < rows &&  sqlen + j < cols && flag) {
                    // loop from current column to last column of current sqlen
                    for (let k = j; k <= sqlen + 1; k++) {
                        if (matrix[i + sqlen][k] == 0) {
                            flag = false;
                            break;
                        }
                    }
                    // loop from current row to last row of current sqlen
                    for (let k = i; k <= sqlen + i; k++) {
                        if (matrix[k][j + sqlen] == 0) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        sqlen++;
                    }
                }
                if (maxsqlen < sqlen) {
                    maxsqlen = sqlen;
                }
            }
        }
    }
    return maxsqlen;

}

const findMaxSquare = (matrix) => {
    // Time complexity : O(mn)O(mn). Single pass.
    // Space complexity : O(mn)O(mn)

    // this will shallow copy so it won't be a real clone
    // const cache = [...matrix];
    const cache = [];
    let result = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    for (i = 0 ; i < rows; i++) {
        // spread can simplify cloning making a shallow copy of each row
        cache.push([...matrix[i]]);
        // this would be copying each value per column
        // cache.push([]);
        // for (j = 0; j < cols; j++) {
        //     cache[i].push(matrix[i][j]);
        // }
    }

    for (i = 0 ; i < rows; i++) {
        for (j = 0; j < cols; j++) {
            if (i == 0 || j == 0) {
                // do nothing for top row or left column
                // cache[i][j] = matrix[i][j];
            } else if (matrix[i][j] > 0) {
                cache[i][j] = 1 + Math.min(...[
                    cache[i - 1][j],
                    cache[i][j - 1],
                    cache[i - 1][j - 1],
                ]);
            }
            if (cache[i][j] > result) {
                result = cache[i][j];
            }
        }
    }
    // console.log('cache');
    // console.log(cache);
    return result;

};

// const matrix = [
//     [1, 1, 1, 1, 0],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 0],
// ];

const matrix = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0],
];

// const matrix = [
//     [1, 1],
//     [1, 1],
//     [1, 1],
// ];

console.log('matrix');
console.log(matrix);

const maxSquareBruteForce = findMaxSquareBruteForce(matrix);
console.log('maxSquareBruteForce', maxSquareBruteForce);

const maxSquare = findMaxSquare(matrix);
console.log('maxSquare', maxSquare);

// Math.min and Math.max expect numbers but I can spread an array and pass it
// const nums = [1, 2, 3]
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));



