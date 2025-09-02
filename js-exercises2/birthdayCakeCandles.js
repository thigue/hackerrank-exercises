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

function birthdayCakeCandles(candles) {
    let maiorVela = candles[0]; 
    for (let i = 1; i < candles.length; i++) {
        if (candles[i] > maiorVela) {
            maiorVela = candles[i];
        }
    }
    let contadorVelas = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] === maiorVela) {
            contadorVelas++;
        }
    }
    return contadorVelas;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
