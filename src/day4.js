// https://adventofcode.com/2023/day/3
const inputFile = '../input/day4.txt';
const fs = require('node:fs');

function getScore(winners, results) {
    if (!winners || !results) {
        return 0;
    }
    const winnerMap = new Map();
    winners.forEach((winner) => {
        winnerMap.set(winner, winner);
    });
    let score = 0;
    results.forEach((result) => {
        if (winnerMap.has(result)) {
            score++
        }
    });
    return !!score ? 2**(score-1) : 0;
}


fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split('\n');
    lines.pop();
    const tempLines = lines;
    let sum = 0;
    tempLines.forEach((line) => {
        const cardSplit = line.split('|');
        const winners = cardSplit[0].split(' ').slice(2).filter(item => item != '');
        const results = cardSplit[1].split(' ').filter(item => item != '');
        sum += getScore(winners, results);
    })
    console.log(sum);
});
