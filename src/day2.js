// https://adventofcode.com/2023/day/2
const inputFile = '../input/day2.txt';
const fs = require('node:fs');

function getRoundMinimum(rounds) {
    const minimums = {
        'blue': 0,
        'red': 0,
        'green': 0,
    };
    // console.log('rds', rounds);
    for (let roundIndex = 0; roundIndex < rounds.length; roundIndex++) {
        const cubes = rounds[roundIndex].split(',');
        // console.log('cub', cubes);
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

function isRoundValid(round) {
    if (!round) {
        return false;
    }
    for (let i = 0; i < round.length; i++) {
        const cubeCount = parseInt(round[i].replace(/\D/g, ''));
        if (cubeCount > 14) {
            return false;
        }
        if (cubeCount <= 12) {
            continue;
        }
        if (cubeCount === 13 & round[i].includes('red')) {
            return false
        }
        if (cubeCount === 14 & !round[i].includes('blue')) {
            return false;
        }
    }
    return true;
}

function validGame(game) {
    if (!game) {
        return 0;
    }
    const gameNameAndRound = game.split(':');
    const rounds = gameNameAndRound[1].split(';');
    for (let i = 0; i < rounds.length; i++) {
        if (!isRoundValid(rounds[i].split(','))) {
            return 0;
        }
    }
    // All rounds valid
    return parseInt(gameNameAndRound[0].replace(/\D/g, ''));
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    const testLines = lines.slice(0,5);
    let sum = 0;
    lines.forEach((line, index) => {
        if (!line) {
            return;
        }
        const minimums = getRoundMinimum(line.split(':')[1].split(';'));
        let product = 1;
        for (cube in minimums) {
            product *= minimums[cube];
        }
        // console.log(product);
        sum += product;
    });
    console.log(sum);
});
