// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

// Iteration 1.3: Add background sound

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

// Iteration 5: Creating timer

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer

let score = 0;
let lives = 3;
let timeLeft = 60; 

const shotgunSound = new Audio('bgm.mp3');


const backgroundSound = new Audio('shotgun.mp3');
backgroundSound.loop = true;
backgroundSound.play();


const MAX_ZOMBIE_ESCAPES = 4;


function createZombie() {
    const zombie = document.createElement('div');
    zombie.classList.add('zombie');
   
    const maxX = window.innerWidth - 100; 
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); 
    zombie.style.left = `${randomX}px`;
    zombie.style.top = `${randomY}px`;
    document.body.appendChild(zombie);

   
    setTimeout(() => {
        if (!zombie.classList.contains('shot')) {
            zombie.remove();
            if (lives > 0) {
                lives--; 
                if (lives === 0) {
                   
                    gameOver();
                }
            }
        }
    }, 5000); 
}


function missedZombie() {
    if (lives > 0) {
        lives--;
        if (lives === 0) {
          
            gameOver();
        }
    }
}

function destroyZombie(zombie) {
    if (!zombie.classList.contains('shot')) {
        zombie.classList.add('shot');
        score++; 
        shotgunSound.play(); 
        zombie.remove();
    }
}


let timerInterval;

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
          
            gameOver();
        }
    }, 1000);
}


function startGame() {
    startTimer();
    createZombie();
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function gameOver() {
   
    clearInterval(timerInterval);
    
}


startGame();

