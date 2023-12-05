// https://adventofcode.com/2023/day/1
const inputFile = '../input/day1.txt';
const fs = require('node:fs');
const numberMap = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
};
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    let sum = 0;
    lines.forEach((line) => {
        let firstDigit;
        for (let i = 0; i < line.length; i++) {
            if (!isNaN(parseInt(line.charAt(i)))) {
                // Character is a number, we can use this as the digit
                firstDigit = line.charAt(i);
                break;
            }
            const slice3 = line.slice(i, i + 3);
            if (numberMap[slice3]) {
                firstDigit = numberMap[slice3];
                break;
            }
            const slice4 = line.slice(i, i + 4);
            if (numberMap[slice4]) {
                firstDigit = numberMap[slice4];
                break;
            }
            const slice5 = line.slice(i, i + 5);
            if (numberMap[slice5]) {
                firstDigit = numberMap[slice5];
                break;
            }
        }
        if (firstDigit === undefined) {
            return;
        }
        let secondDigit;
        for (let i = line.length - 1; i >= 0; i--) {
            if (!isNaN(parseInt(line.charAt(i)))) {
                // Character is a number, we can use this as the digit
                secondDigit = line.charAt(i);
                break;
            }
            const slice3 = line.slice(i, i + 3);
            if (numberMap[slice3]) {
                secondDigit = numberMap[slice3];
                break;
            }
            const slice4 = line.slice(i, i + 4);
            if (numberMap[slice4]) {
                secondDigit = numberMap[slice4];
                break;
            }
            const slice5 = line.slice(i, i + 5);
            if (numberMap[slice5]) {
                secondDigit = numberMap[slice5];
                break;
            }
        }

        sum += parseInt(`${firstDigit}${secondDigit}`);
    });
    console.log(sum);
});
