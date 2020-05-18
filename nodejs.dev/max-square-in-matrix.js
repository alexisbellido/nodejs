// We need to find the largest square comprising of all ones in the given m×n matrix.
// In other words we need to find the largest set of connected ones in the given matrix that forms a square.
const find_max_square_1 = matrix => {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    let maxsqlen = 0; // max square size
    // console.log(`rows: ${rows}`);
    // console.log(`cols: ${cols}`);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // row, col
            // console.log(`${i}, ${j}`);
            if (matrix[i][j] == 1) {
                // found a 1, calculate size of square starting here
                // console.log(`${i}, ${j}`);
                let sqlen = 1;
                let flag = true;
            }
        }
    }

}

const findMaxSquare = (matrix) => {
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
    console.log('cache');
    console.log(cache);
    return result;

};

const matrix = [
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
];

// const matrix = [
//     [1, 0, 1, 0, 0],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 1, 0],
// ];

// const matrix = [
//     [1, 1],
//     [1, 1],
//     [1, 1],
// ];

console.log('matrix');
console.log(matrix);

const result = findMaxSquare(matrix);
console.log('result', result);

// Math.min and Math.max expect numbers but I can spread an array and pass it
// const nums = [1, 2, 3]
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));



