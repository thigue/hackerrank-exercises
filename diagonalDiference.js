'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function diagonalDifference(arr) {
    let n = arr.length;  
    let rlDiagonal = 0;
    let lrDiagonal = 0;
    
    for (let i = 0; i < n; i++) {
        lrDiagonal += arr[i][i]; 
        rlDiagonal += arr[i][n - 1 - i];   
    }

    return Math.abs(lrDiagonal - rlDiagonal);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().trim().split(' ').map(Number);
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');
    ws.end();
}