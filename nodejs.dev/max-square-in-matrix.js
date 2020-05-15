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

find_max_square_1(matrix);


