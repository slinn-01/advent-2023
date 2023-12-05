// https://adventofcode.com/2023/day/1
const inputFile = '../input/day1.txt';
const fs = require('node:fs');
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    let sum = 0;
    lines.forEach((line) => {
        let index = 0;
        while(isNaN(parseInt(line.charAt(index))) && index < line.length) {
            index++;
        }
        let digit = line.charAt(index);
        if (isNaN(parseInt(line.charAt(index)))) {
            return;
        }
        index = line.length - 1;
        while(isNaN(parseInt(line.charAt(index)))) {
            index--;
        }
        digit += line.charAt(index);
        sum += parseInt(digit);
    });
    console.log(sum);
});
