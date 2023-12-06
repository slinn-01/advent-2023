// https://adventofcode.com/2023/day/3
const inputFile = '../input/day3.txt';
const fs = require('node:fs');

function isDigit(c) {
    return (c >= '0' && c <= '9');
}

function isSymbol(c) {
    return !isDigit(c) && c != '.';
}

function getValueFromIndex(line, i, j) {
    return parseInt(line.slice(i,j+1));
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    const tempLines = lines;
    let sum = 0;
    for (let lineIndex = 0; lineIndex < tempLines.length; lineIndex++) {
        for (let i = 0; i < tempLines[lineIndex].length; i++) {
            if (isDigit(tempLines[lineIndex][i])) {
                let j = i;
                while (isDigit(tempLines[lineIndex][j])) {
                    j++;
                }
                j--;
                // Check previous position in line
                if (tempLines[lineIndex][i-1] && isSymbol(tempLines[lineIndex][i-1])) {
                    sum += getValueFromIndex(tempLines[lineIndex], i, j);
                    i = j + 1;
                    continue;
                }
                // Check above
                if (tempLines[lineIndex - 1]) {
                    // Loop from i-1-j+1 in this line, checking for symbol. If so, add me
                    let symbolFound = false;
                    for (let k = i - 1; k <= j+1; k++) {
                        if (tempLines[lineIndex - 1][k] && isSymbol(tempLines[lineIndex - 1][k])) {
                            symbolFound = true;
                            break;
                        }
                    }
                    if (symbolFound) {
                        sum += getValueFromIndex(tempLines[lineIndex], i, j);
                        i = j + 1;
                        continue;
                    }
                }
                // Check after
                if (tempLines[lineIndex][j+1] && isSymbol(tempLines[lineIndex][j+1])) {
                    sum += getValueFromIndex(tempLines[lineIndex], i, j);
                    i = j + 1;
                    continue;
                }
                //
                if (tempLines[lineIndex + 1]) {
                    // Loop from i-1-j+1 in this line, checking for symbol. If so, add me
                    let symbolFound = false;
                    for (let k = i - 1; k <= j+1; k++) {
                        if (tempLines[lineIndex + 1][k] && isSymbol(tempLines[lineIndex + 1][k])) {
                            symbolFound = true;
                            break;
                        }
                    }
                    if (symbolFound) {
                        sum += getValueFromIndex(tempLines[lineIndex], i, j);
                        i = j + 1;
                        continue;
                    }
                }
            }
        }
    }
    console.log(sum);
});
