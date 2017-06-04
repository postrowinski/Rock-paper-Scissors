document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    //All buttons
    var button = {
            newGame: document.getElementById('js-newGameButton'),
            rock: document.getElementById('js-playerPick_rock'),
            paper : document.getElementById('js-playerPick_paper'),
            scissors : document.getElementById('js-playerPick_scissors')
        },
        player = {
            getName: '',
            setName: document.getElementById('js-playerName'),
            setPoints : document.getElementById('js-playerPoints'),
            setPick : document.getElementById('js-playerPick'),
            resault : document.getElementById('js-playerResult'),
            score: 0
        },
        computer = {
            setPick : document.getElementById('js-computerPick'),
            setPoints : document.getElementById('js-computerPoints'),
            resault : document.getElementById('js-computerResult'),
            score: 0
        },
        section = {
            newGame: document.getElementById('js-newGameElement'),
            buttons: document.getElementById('js-playerPickElement'),
            resultsTable: document.getElementById('js-resultsTableElement')
        },
        gameStatus = 'notStarted',
        playerPicking = '';
        
    function status() {
        switch (gameStatus) {
        case 'started':
            section.newGame.style.display = 'none';
            section.buttons.style.display = 'block';
            section.resultsTable.style.display = 'block';
            break;
        case 'ended':
            button.newGame.innerHTML = 'Zagraj jeszcze raz';
            computer.score = player.score = 0;
        case 'notStarted':
            section.newGame.style.display = 'block';
            section.buttons.style.display = 'none';
            section.resultsTable.style.display = 'none';
        }
    }
    
    function newGame() {
        player.getName = prompt('Podaj swoje imię');
        if (player.getName !== '') { 
            gameStatus = 'started';
            status();
            player.setPoints.innerHTML = computer.setPoints.innerHTML = 0;
            player.setName.innerHTML = player.getName; 
        }
    }
    
    function cpuPick() {
        var passibleCpuPick = ['Scissors', 'Rock', 'Paper'],
            passibleCpuPickLenght = passibleCpuPick.length;
        return passibleCpuPick[(Math.floor(Math.random() * passibleCpuPickLenght))];
    }
    
    function Challenge(playerPicking, cpuRandomPick) {
        var winner = 'player';
        player.resault.innerHTML = computer.resault.innerHTML = '';
                
        if (playerPicking === cpuRandomPick) {
            winner = 'none';
        } else if ((cpuRandomPick === 'Paper' && playerPicking === 'Rock') || (cpuRandomPick === 'Rock' && playerPicking === 'Scissors') || (cpuRandomPick === 'Scissors' && playerPicking === 'Paper')) {
            winner = 'cpu';
        }
                
        if (winner === 'player') {
            player.resault.innerHTML = 'Wygrywa gracz';
            player.score++;
            player.setPoints.innerHTML = player.score;
        }
                
        if (winner === 'cpu') {
            computer.resault.innerHTML = 'Wygrywa Cpu';
            computer.score++;
            computer.setPoints.innerHTML = computer.score;
        }
        
        if (winner === 'none') {
            computer.resault.innerHTML = player.resault.innerHTML = 'Remis';
        }  
    }
    
    function fullLogic() {
        var cpuRandomPick = cpuPick();
        Challenge(playerPicking, cpuRandomPick);
        player.setPick.innerHTML = 'Player selection ' + playerPicking;
        computer.setPick.innerHTML = 'Computer selection ' + cpuRandomPick;
        if (computer.score > 4 || player.score > 4) {
            gameStatus = 'ended';              
        }
    }
   
    //Start Game
    status();
    button.newGame.addEventListener('click', function () {
        newGame();
    });
    button.paper.addEventListener('click', function () {     
        playerPicking = 'Paper';
        fullLogic();
        status();
    });
    button.rock.addEventListener('click', function () {     
        playerPicking = 'Rock';
        fullLogic();
        status();
    });
    button.scissors.addEventListener('click', function () {     
        playerPicking = 'Scissors';
        fullLogic();
        status();
    });   
});