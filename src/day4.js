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
    return score;
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
    const counts = [1];
    tempLines.forEach((line, linenumber) => {
        const cardSplit = line.split('|');
        const winners = cardSplit[0].split(' ').slice(2).filter(item => item != '');
        const results = cardSplit[1].split(' ').filter(item => item != '');
        const score = getScore(winners, results);
        if (!counts[linenumber]) {
            counts[linenumber] = 1;
        }
        const currentCount = counts[linenumber];
        for (let i = 0; i < currentCount; i++) {
            for (let j = 0; j < score; j++) {
                if (counts[linenumber + j + 1]) {
                    counts[linenumber + j + 1]++;
                } else {
                    counts[linenumber + j + 1] = 2;
                }
            }
        }
    });
    counts.forEach((count) => {
        sum += count;
    });
    console.log(sum);
});
