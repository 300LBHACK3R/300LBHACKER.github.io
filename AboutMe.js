document.addEventListener("DOMContentLoaded", function() {
  /* ---------- Mobile Menu & Smooth Scroll ---------- */
  window.toggleMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  window.scrollToSection = function(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  /* ---------- Starry Background Animation ---------- */
  const bgCanvas = document.getElementById("bg-canvas");
  const bgCtx = bgCanvas.getContext("2d");

  function resizeBgCanvas() {
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeBgCanvas);
  resizeBgCanvas();

  const stars = [];
  const numStars = 150;
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2
    });
  }

  function animateStars() {
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    bgCtx.fillStyle = "#fff";
    stars.forEach(star => {
      star.y += star.speed;
      if (star.y > bgCanvas.height) {
        star.y = 0;
        star.x = Math.random() * bgCanvas.width;
      }
      bgCtx.beginPath();
      bgCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      bgCtx.fill();
    });
    requestAnimationFrame(animateStars);
  }
  animateStars();

  /* ---------- Space Invaders Game ---------- */
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d");
  const gameWidth = gameCanvas.width;
  const gameHeight = gameCanvas.height;
  let rightPressed = false, leftPressed = false;

  // Player object
  const player = {
    width: 30,
    height: 15,
    x: gameWidth / 2 - 15,
    y: gameHeight - 30,
    speed: 5
  };

  // Bullets array
  const bullets = [];
  const bulletSpeed = 7;

  // Invaders configuration
  const invaders = [];
  const invaderRows = 3;
  const invaderCols = 6;
  const invaderWidth = 30;
  const invaderHeight = 20;
  const invaderPadding = 10;
  const invaderOffsetTop = 30;
  const invaderOffsetLeft = 30;
  let invaderDirection = 1; // 1: right, -1: left

  for (let row = 0; row < invaderRows; row++) {
    for (let col = 0; col < invaderCols; col++) {
      let invaderX = invaderOffsetLeft + col * (invaderWidth + invaderPadding);
      let invaderY = invaderOffsetTop + row * (invaderHeight + invaderPadding);
      invaders.push({ x: invaderX, y: invaderY, width: invaderWidth, height: invaderHeight, status: 1 });
    }
  }

  // Event listeners for key presses
  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  function keyDownHandler(e) {
    if (e.key === "ArrowRight") rightPressed = true;
    else if (e.key === "ArrowLeft") leftPressed = true;
    else if (e.key === " " || e.key === "Spacebar") {
      shootBullet();
    }
  }
  function keyUpHandler(e) {
    if (e.key === "ArrowRight") rightPressed = false;
    else if (e.key === "ArrowLeft") leftPressed = false;
  }

  function shootBullet() {
    bullets.push({ x: player.x + player.width / 2 - 2, y: player.y, width: 4, height: 10 });
  }

  function updateGame() {
    // Move player
    if (rightPressed && player.x + player.width < gameWidth) player.x += player.speed;
    if (leftPressed && player.x > 0) player.x -= player.speed;

    // Update bullets
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].y -= bulletSpeed;
      if (bullets[i].y < 0) {
        bullets.splice(i, 1);
        i--;
      }
    }

    // Move invaders
    let shouldReverse = false;
    invaders.forEach(invader => {
      if (invader.status === 1) {
        invader.x += invaderDirection;
        if (invader.x + invader.width > gameWidth || invader.x < 0) {
          shouldReverse = true;
        }
      }
    });
    if (shouldReverse) {
      invaderDirection *= -1;
      invaders.forEach(invader => { invader.y += 10; });
    }

    // Collision detection: bullets vs. invaders
    bullets.forEach((bullet, bIndex) => {
      invaders.forEach(invader => {
        if (invader.status === 1 &&
            bullet.x < invader.x + invader.width &&
            bullet.x + bullet.width > invader.x &&
            bullet.y < invader.y + invader.height &&
            bullet.y + bullet.height > invader.y) {
          invader.status = 0;
          bullets.splice(bIndex, 1);
        }
      });
    });
  }

  function drawGame() {
    ctx.clearRect(0, 0, gameWidth, gameHeight);
    // Draw player
    ctx.fillStyle = "#ff6f61";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    // Draw bullets
    ctx.fillStyle = "#fff";
    bullets.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
    // Draw invaders
    ctx.fillStyle = "#fff";
    invaders.forEach(invader => {
      if (invader.status === 1) {
        ctx.fillRect(invader.x, invader.y, invader.width, invader.height);
      }
    });
  }

  function gameLoop() {
    updateGame();
    drawGame();
    requestAnimationFrame(gameLoop);
  }
  gameLoop();
});
