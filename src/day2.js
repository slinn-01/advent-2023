// https://adventofcode.com/2023/day/2
const inputFile = '../input/day2.txt';
const fs = require('node:fs');

function getRoundMinimum(rounds) {
    const minimums = {
        'blue': 0,
        'red': 0,
        'green': 0,
    };
    for (let roundIndex = 0; roundIndex < rounds.length; roundIndex++) {
        const cubes = rounds[roundIndex].split(',');
        for (let cubeIndex = 0; cubeIndex < cubes.length; cubeIndex++) {
            const cubeInfo = cubes[cubeIndex];
            const cubeCount = parseInt(cubeInfo.replace(/\D/g, ''));
            if (cubeInfo.includes('blue')) {
                if (cubeCount > minimums.blue) {
                    minimums.blue = cubeCount;
                }
            } else if (cubeInfo.includes('red')) {
                if (cubeCount > minimums.red) {
                    minimums.red = cubeCount;
                }
            } else if (cubeCount > minimums.green){
                minimums.green = cubeCount;
            }
        } 
    }
    return minimums;
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    let sum = 0;
    lines.forEach((line,) => {
        if (!line) {
            return;
        }
        const minimums = getRoundMinimum(line.split(':')[1].split(';'));
        let product = 1;
        for (cube in minimums) {
            product *= minimums[cube];
        }
        sum += product;
    });
    console.log(sum);
});
