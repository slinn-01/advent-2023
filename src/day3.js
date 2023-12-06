// https://adventofcode.com/2023/day/3
const inputFile = '../input/day3.txt';
const fs = require('node:fs');

function isGear(c) {
    return c === '*';
}

function isDigit(c) {
    return (c >= '0' && c <= '9');
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
        
            if (!isGear(tempLines[lineIndex][i])) {
                continue;
            }
            const numbers = [];
            // check for leading number
            if (isDigit(tempLines[lineIndex][i-1])) {
                let digitEnd = i - 1;
                let digitStart = digitEnd;
                while(isDigit(tempLines[lineIndex][digitStart])) {
                    digitStart--;
                }
                digitStart++;
                numbers.push(getValueFromIndex(tempLines[lineIndex], digitStart, digitEnd));
            }
            // check for trailing number
            if (isDigit(tempLines[lineIndex][i+1])) {
                let digitStart = i + 1;
                let digitEnd = digitStart;
                while(isDigit(tempLines[lineIndex][digitEnd])) {
                    digitEnd++;
                }
                digitEnd--;
                numbers.push(getValueFromIndex(tempLines[lineIndex], digitStart, digitEnd));
            }
            // check for numbers above
            if (tempLines[lineIndex - 1]) {
                // Check for number in middle (if num in middle, only one on top)
                if (isDigit(tempLines[lineIndex - 1][i])) {
                    let digitStart = i;
                    while(isDigit(tempLines[lineIndex - 1][digitStart])) {
                        digitStart--;
                    }
                    digitStart++;
                    let digitEnd = i;
                    while(isDigit(tempLines[lineIndex - 1][digitEnd])) {
                        digitEnd++
                    }
                    digitEnd--;
                    numbers.push(getValueFromIndex(tempLines[lineIndex - 1], digitStart, digitEnd));
                    if (numbers.length > 2) {
                        continue;
                    }
                } else {
                    // Check for left diag
                    if (isDigit(tempLines[lineIndex - 1][i-1])) {
                        let digitEnd = i - 1;
                        let digitStart = digitEnd;
                        while (isDigit(tempLines[lineIndex - 1][digitStart])) {
                            digitStart--;
                        }
                        digitStart++;
                        numbers.push(getValueFromIndex(tempLines[lineIndex - 1], digitStart, digitEnd));
                        if (numbers.length > 2) {
                            continue;
                        }
                    }

                    // Check for right diag
                    if (isDigit(tempLines[lineIndex - 1][i+1])) {
                        let digitStart = i + 1;
                        let digitEnd = digitStart;
                        while (isDigit(tempLines[lineIndex - 1][digitEnd])) {
                            digitEnd++;
                        }
                        digitEnd--;
                        numbers.push(getValueFromIndex(tempLines[lineIndex - 1], digitStart, digitEnd));
                        if (numbers.length > 2) {
                            continue;
                        }
                    }
                }
            }

            // check for numbers below
            if (tempLines[lineIndex + 1]) {
                // Check for number in middle (if num in middle, only one on top)
                if (isDigit(tempLines[lineIndex + 1][i])) {
                    let digitStart = i;
                    while(isDigit(tempLines[lineIndex + 1][digitStart])) {
                        digitStart--;
                    }
                    digitStart++;
                    let digitEnd = i;
                    while(isDigit(tempLines[lineIndex + 1][digitEnd])) {
                        digitEnd++
                    }
                    digitEnd--;
                    numbers.push(getValueFromIndex(tempLines[lineIndex + 1], digitStart, digitEnd));
                    if (numbers.length > 2) {
                        continue;
                    }
                } else {
                    // Check for left diag
                    if (isDigit(tempLines[lineIndex + 1][i-1])) {
                        let digitEnd = i - 1;
                        let digitStart = digitEnd;
                        while (isDigit(tempLines[lineIndex + 1][digitStart])) {
                            digitStart--;
                        }
                        digitStart++;
                        numbers.push(getValueFromIndex(tempLines[lineIndex + 1], digitStart, digitEnd));
                        if (numbers.length > 2) {
                            continue;
                        }
                    }

                    // Check for right diag
                    if (isDigit(tempLines[lineIndex + 1][i+1])) {
                        let digitStart = i + 1;
                        let digitEnd = digitStart;
                        while (isDigit(tempLines[lineIndex + 1][digitEnd])) {
                            digitEnd++;
                        }
                        digitEnd--;
                        numbers.push(getValueFromIndex(tempLines[lineIndex + 1], digitStart, digitEnd));
                        if (numbers.length > 2) {
                            continue;
                        }
                    }
                }
            }
            if (numbers.length != 2) {
                continue;
            }
            console.log(numbers);
            sum += (numbers[0] * numbers[1]);
        }
    }
    console.log(sum);
});
