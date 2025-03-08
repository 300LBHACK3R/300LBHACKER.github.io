document.addEventListener("DOMContentLoaded", function() {
  /******************************************************
   * MOBILE MENU TOGGLE
   ******************************************************/
  window.toggleMenu = function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  /******************************************************
   * SMOOTH SCROLL
   ******************************************************/
  window.scrollToSection = function(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  /******************************************************
   * STAR BACKGROUND ANIMATION
   ******************************************************/
  const starCanvas = document.getElementById("stars-canvas");
  const starCtx = starCanvas.getContext("2d");

  function resizeCanvas() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const stars = [];
  const numStars = 200;
  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * starCanvas.width,
      y: Math.random() * starCanvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2
    });
  }

  function animateStars() {
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    starCtx.fillStyle = "#fff";
    stars.forEach(star => {
      star.y += star.speed;
      if (star.y > starCanvas.height) {
        star.y = 0;
        star.x = Math.random() * starCanvas.width;
      }
      starCtx.beginPath();
      starCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starCtx.fill();
    });
    requestAnimationFrame(animateStars);
  }
  animateStars();

  /******************************************************
   * SPACE INVADERS GAME
   ******************************************************/
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d");

  const W = gameCanvas.width;
  const H = gameCanvas.height;

  // Player
  const player = {
    x: W / 2 - 15,
    y: H - 30,
    w: 30,
    h: 15,
    speed: 5
  };
  let rightPressed = false;
  let leftPressed = false;

  // Bullets
  const bullets = [];
  const bulletSpeed = 6;

  // Invaders
  const invaders = [];
  const rows = 3;
  const cols = 6;
  const invW = 30;
  const invH = 20;
  const padding = 10;
  let direction = 1;

  // Build invaders
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 30 + c * (invW + padding);
      const y = 30 + r * (invH + padding);
      invaders.push({ x, y, w: invW, h: invH, alive: true });
    }
  }

  // Key handlers for desktop
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") rightPressed = true;
    if (e.key === "ArrowLeft") leftPressed = true;
    if (e.key === " " || e.key === "Spacebar") shoot();
  });
  document.addEventListener("keyup", e => {
    if (e.key === "ArrowRight") rightPressed = false;
    if (e.key === "ArrowLeft") leftPressed = false;
  });

  // Touch + click controls for mobile
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");
  const btnShoot = document.getElementById("btn-shoot");

  // If the user taps or clicks the left button
  btnLeft.addEventListener("touchstart", e => {
    e.preventDefault();
    leftPressed = true;
  });
  btnLeft.addEventListener("touchend", e => {
    e.preventDefault();
    leftPressed = false;
  });
  btnLeft.addEventListener("mousedown", () => { leftPressed = true; });
  btnLeft.addEventListener("mouseup", () => { leftPressed = false; });

  // If the user taps or clicks the right button
  btnRight.addEventListener("touchstart", e => {
    e.preventDefault();
    rightPressed = true;
  });
  btnRight.addEventListener("touchend", e => {
    e.preventDefault();
    rightPressed = false;
  });
  btnRight.addEventListener("mousedown", () => { rightPressed = true; });
  btnRight.addEventListener("mouseup", () => { rightPressed = false; });

  // If the user taps or clicks the shoot button
  btnShoot.addEventListener("touchstart", e => {
    e.preventDefault();
    shoot();
  });
  btnShoot.addEventListener("mousedown", shoot);

  // Helper function to fire a bullet
  function shoot() {
    bullets.push({ x: player.x + player.w / 2 - 2, y: player.y, w: 4, h: 10 });
  }

  // Update game logic
  function updateGame() {
    // Move player
    if (rightPressed && player.x + player.w < W) player.x += player.speed;
    if (leftPressed && player.x > 0) player.x -= player.speed;

    // Update bullets
    bullets.forEach((b, i) => {
      b.y -= bulletSpeed;
      // Remove off-screen
      if (b.y + b.h < 0) {
        bullets.splice(i, 1);
      }
    });

    // Move invaders
    let reverse = false;
    invaders.forEach(inv => {
      if (inv.alive) {
        inv.x += direction;
        if (inv.x + inv.w > W || inv.x < 0) {
          reverse = true;
        }
      }
    });
    if (reverse) {
      direction *= -1;
      invaders.forEach(inv => {
        inv.y += 10;
      });
    }

    // Check collisions (bullets vs invaders)
    bullets.forEach((b, bi) => {
      invaders.forEach(inv => {
        if (inv.alive &&
            b.x < inv.x + inv.w &&
            b.x + b.w > inv.x &&
            b.y < inv.y + inv.h &&
            b.y + b.h > inv.y) {
          inv.alive = false;
          bullets.splice(bi, 1);
        }
      });
    });
  }

  // Render game
  function drawGame() {
    ctx.clearRect(0, 0, W, H);

    // Player
    ctx.fillStyle = "#ff6f61";
    ctx.fillRect(player.x, player.y, player.w, player.h);

    // Bullets
    ctx.fillStyle = "#fff";
    bullets.forEach(b => {
      ctx.fillRect(b.x, b.y, b.w, b.h);
    });

    // Invaders
    ctx.fillStyle = "#fff";
    invaders.forEach(inv => {
      if (inv.alive) {
        ctx.fillRect(inv.x, inv.y, inv.w, inv.h);
      }
    });
  }

  // Game loop
  function gameLoop() {
    updateGame();
    drawGame();
    requestAnimationFrame(gameLoop);
  }
  gameLoop();
});
