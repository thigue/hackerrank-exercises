'use strict';

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

function plusMinus(arr) {
    let zeroFilter = 0;
    let negativeFilter = 0;
    let positiveFilter = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            negativeFilter++;
        }
        else if(arr[i] == 0) {
            zeroFilter++;
        }
        else {
            positiveFilter++;
        }
    }
    console.log((positiveFilter / arr.length).toFixed(6));
    console.log((negativeFilter / arr.length).toFixed(6));
    console.log((zeroFilter / arr.length).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
