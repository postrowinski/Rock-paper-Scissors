document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //Object for PLAYER and COMPUTER
    var player = {
            name: '',
            score: 0
        },
        computer = {
            score: 0
        },
        //game status i can be: notStarted, started, ended
        gameStatus = 'notStarted',
        //Container elements
        newGameElement = document.getElementById('js-newGameElement'),
        playerPickElement = document.getElementById('js-playerPickElement'),
        resultsTableElement = document.getElementById('js-resultsTableElement'),
        //All buttons
        newGameButton = document.getElementById('js-newGameButton'),
        playerPickRock = document.getElementById('js-playerPick_rock'),
        playerPickPaper = document.getElementById('js-playerPick_paper'),
        playerPickScissors = document.getElementById('js-playerPick_scissors'),
        //Player informations ext: name, points
        playerName = document.getElementById('js-playerName'),
        playerPoints = document.getElementById('js-playerPoints'),
        playerPick = document.getElementById('js-playerPick'),
        playerResault = document.getElementById('js-playerResult'),
        //Computer informanions 
        computerPick = document.getElementById('js-computerPick'),
        computerResault = document.getElementById('js-computerResult'),
        computerPoints = document.getElementById('js-computerPoints'),
        playerPicking = '';
        ////////////////////////////
        
    function status() {
        switch (gameStatus) {
        case 'started':
            newGameElement.style.display = 'none';
            playerPickElement.style.display = 'block';
            resultsTableElement.style.display = 'block';
            break;
        case 'ended':
            newGameButton.innerHTML = 'Zagraj jeszcze raz';
            break;
        case 'notStarted':
            newGameElement.style.display = 'block';
            playerPickElement.style.display = 'none';
            resultsTableElement.style.display = 'none';
            break;
        }
    }
    
    function newGame() {
        player.name = prompt('Podaj swoje imię');
        if (player.name !== '') {
            gameStatus = 'started';
            status();
            playerName.innerHTML = player.name;
        }
    }
    
    function cpuPick() {
        var passibleCpuPick = ['Scissors', 'Rock', 'Paper'],
            passibleCpuPickLenght = passibleCpuPick.length;
        return passibleCpuPick[(Math.floor(Math.random() * passibleCpuPickLenght))];
    }
    
    function Challenge(playerPicking, cpuRandomPick) {
                var winner = 'player';
                playerResault.innerHTML = computerResault.innerHTML = '';
                
                if (playerPicking == cpuRandomPick) {
                    winner = 'none';
                } else if (cpuRandomPick === 'Paper' && playerPicking === 'Rock' || cpuRandomPick === 'Rock' && playerPicking === 'Scissors' || cpuRandomPick === 'Scissors' && playerPicking === 'Paper') {
                    winner = 'cpu';
                }
                
                if (winner === 'player') {
                    playerResault.innerHTML = 'Wygrywa gracz';
                    player.score++;
                    playerPoints.innerHTML = player.score;
                }
                
                if (winner === 'cpu') {
                    computerResault.innerHTML = 'Wygrywa Cpu';
                    computer.score++;
                    computerPoints.innerHTML = player.score;
                }
            }
    
    function fullLogic() {
        var cpuRandomPick = cpuPick();
            Challenge(playerPicking, cpuRandomPick);
            playerPick.innerHTML = 'Player selection ' + playerPicking;
            computerPick.innerHTML = 'Computer selection ' + cpuRandomPick;
    }
    
    // main program
    status();
    newGameButton.addEventListener('click', function () {
        newGame();
        playerPickRock.addEventListener('click', function () {     
            playerPicking = 'Rock';
            fullLogic();
        });
    });  
});
