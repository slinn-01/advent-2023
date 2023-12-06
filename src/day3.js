// https://adventofcode.com/2023/day/3
const inputFile = '../input/day3.txt';
const fs = require('node:fs');

function isDigit(c) {
    return (c >= '0' && c <= '9');
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    const tempLines = lines.slice(0,5);
    for (let i = 0; i < tempLines.length; i++) {
        if (isDigit(tempLines[i])) {
            let j = i;
            // while (isDigit(tempLines[j])
        }
    }
});
