function validGame(game) {
    if (!game) {
        return null;
    }
    const colonSplit = game.split(':');
    console.log(colonSplit);
    const roundSplit = colonSplit[1].split(';');
    console.log(roundSplit);
    roundSplit.forEach((round) => {
        console.log(round.split(','));
    })
}

validGame(`Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green`);
