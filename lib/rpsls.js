#!/usr/bin/env node

export {rps, rpsls}

// Rock, Paper, Scissors Game
function rps(shot) {
    const playableOptions = ["rock", "paper", "scissors"];
    
    if (!shot) shot = playableOptions[Math.floor(Math.random() * 3)];
    shot = shot.toLowerCase();
    
    if (!playableOptions.includes(shot)){
        console.error(`${shot} is out of range. Please choose rock, paper, or scissors.`);
        process.exit(1);
    }

    let opponentShot = playableOptions[Math.floor(Math.random() * 3)];
    let result = getResult(shot, opponentShot, playableOptions);
    
    return { player: shot, opponent: opponentShot, result: result };
}

// Rock, Paper, Scissors, Lizard, Spock Game
function rpsls(shot) {
    const playableOptions = ["rock", "paper", "scissors", "lizard", "spock"];
    
    if (!shot) shot = playableOptions[Math.floor(Math.random() * 5)];
    shot = shot.toLowerCase();

    if (!playableOptions.includes(shot)){
        console.error(`${shot} is out of range. Please choose rock, paper, scissors, lizard, or spock.`);
        process.exit(1);
    }

    let opponentShot = playableOptions[Math.floor(Math.random() * 5)];
    let result = getResult(shot, opponentShot, playableOptions);

    return { player: shot, opponent: opponentShot, result: result };
}

// Common function to get result of the game
function getResult(playerShot, opponentShot, playableOptions) {
    let winConditions = {
        'rock': ['scissors', 'lizard'],
        'paper': ['rock', 'spock'],
        'scissors': ['paper', 'lizard'],
        'lizard': ['paper', 'spock'],
        'spock': ['scissors', 'rock']
    };

    if (playerShot === opponentShot) return 'tie';
    return winConditions[playerShot].includes(opponentShot) ? 'win' : 'lose';
}
