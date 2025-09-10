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

function getTotalX(a, b) {
    let count = 0;

    let start = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > start) {
            start = a[i];
        }
    }

    let end = b[0];
    for (let j = 1; j < b.length; j++) {
        if (b[j] < end) {
            end = b[j];
        }
    }

    for (let x = start; x <= end; x++) {
        let divisibleByA = true;
        for (let i = 0; i < a.length; i++) {
            if (x % a[i] !== 0) {
                divisibleByA = false;
                break;
            }
        }

        let dividesB = true;
        for (let i = 0; i < b.length; i++) {
            if (b[i] % x !== 0) {
                dividesB = false;
                break;
            }
        }

        if (divisibleByA && dividesB) {
            count++;
        }
    }

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const brr = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const total = getTotalX(arr, brr);

    ws.write(total + '\n');

    ws.end();
}
