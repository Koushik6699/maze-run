const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const levelSpan = document.getElementById('level-val');
const timerBar = document.getElementById('timer-bar');
const timerCont = document.getElementById('timer-container');
const deathScreen = document.getElementById('death-screen');

let level = 1;
let tileSize = 60;
let maze = [];
let player = { x: 1, y: 1 };
let enemy = { x: -1, y: -1, active: false };
let rows, cols;
let timeLeft = 100;
let gameActive = true;

const dollImg = new Image(); dollImg.src = 'charector.png';
const tailImg = new Image(); tailImg.src = 'tails.png';
const endImg = new Image(); endImg.src = 'end.png';

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}
window.addEventListener('resize', resize);

function createMaze(lvl) {
    cols = 7 + (lvl * 2); 
    rows = 7 + (lvl * 2);
    maze = Array.from({ length: rows }, () => Array(cols).fill(1));

    function carve(x, y) {
        const dirs = [[0, -2], [0, 2], [-2, 0], [2, 0]].sort(() => Math.random() - 0.5);
        dirs.forEach(([dx, dy]) => {
            const nx = x + dx, ny = y + dy;
            if (nx > 0 && nx < cols - 1 && ny > 0 && ny < rows - 1 && maze[ny][nx] === 1) {
                maze[y + dy/2][x + dx/2] = 0;
                maze[ny][nx] = 0;
                carve(nx, ny);
            }
        });
    }

    maze[1][1] = 0;
    carve(1, 1);
    maze[rows - 2][cols - 2] = 2; 
    player = { x: 1, y: 1 };

    // CHALLENGE LOGIC (LEVEL 4+)
    if (lvl >= 4) {
        timerCont.style.display = "block";
        timeLeft = 150;
        enemy = { x: cols - 2, y: rows - 2, active: true };
    } else {
        timerCont.style.display = "none";
        enemy.active = false;
    }
    gameActive = true;
}

function updateEnemy() {
    if (!enemy.active || !gameActive) return;
    
    // Slow enemy movement toward player
    if (Math.random() > 0.8) { 
        let dx = player.x > enemy.x ? 1 : (player.x < enemy.x ? -1 : 0);
        let dy = player.y > enemy.y ? 1 : (player.y < enemy.y ? -1 : 0);
        
        if (maze[enemy.y + dy][enemy.x] !== 1) enemy.y += dy;
        else if (maze[enemy.y][enemy.x + dx] !== 1) enemy.x += dx;
    }

    // Collision check
    if (enemy.x === player.x && enemy.y === player.y) fail();
}

function fail() {
    gameActive = false;
    deathScreen.style.display = "flex";
    setTimeout(() => {
        deathScreen.style.display = "none";
        createMaze(level);
        draw();
    }, 1500);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const camX = (canvas.width / 2) - (player.x * tileSize + tileSize / 2);
    const camY = (canvas.height / 2) - (player.y * tileSize + tileSize / 2);

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            let dx = x * tileSize + camX;
            let dy = y * tileSize + camY;
            if (maze[y][x] === 0) ctx.drawImage(tailImg, dx, dy, tileSize, tileSize);
            else if (maze[y][x] === 1) {
                ctx.fillStyle = "#2e7d32";
                ctx.fillRect(dx, dy, tileSize, tileSize);
            } else if (maze[y][x] === 2) {
                ctx.drawImage(tailImg, dx, dy, tileSize, tileSize);
                ctx.drawImage(endImg, dx, dy, tileSize, tileSize);
            }
        }
    }

    // Draw Enemy
    if (enemy.active) {
        ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
        ctx.beginPath();
        ctx.arc(enemy.x * tileSize + camX + tileSize/2, enemy.y * tileSize + camY + tileSize/2, tileSize/3, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.drawImage(dollImg, canvas.width/2 - tileSize/2, canvas.height/2 - tileSize/2, tileSize, tileSize);
}

// Game Loop for timer and enemy
setInterval(() => {
    if (gameActive && level >= 4) {
        timeLeft -= 0.5;
        timerBar.style.width = timeLeft + "%";
        if (timeLeft <= 0) fail();
        updateEnemy();
        draw();
    }
}, 100);

function move(dx, dy) {
    if (!gameActive) return;
    let nx = player.x + dx, ny = player.y + dy;
    if (ny >= 0 && ny < rows && nx >= 0 && nx < cols && maze[ny][nx] !== 1) {
        player.x = nx; player.y = ny;
        if (maze[ny][nx] === 2) {
            gameActive = false;
            level++;
            levelSpan.innerText = level;
            setTimeout(() => { alert("Level Cleared!"); createMaze(level); draw(); }, 100);
        }
    }
    draw();
}

document.getElementById('up').onclick = () => move(0, -1);
document.getElementById('down').onclick = () => move(0, 1);
document.getElementById('left').onclick = () => move(-1, 0);
document.getElementById('right').onclick = () => move(1, 0);

createMaze(level);
resize();