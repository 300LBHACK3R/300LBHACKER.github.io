document.addEventListener("DOMContentLoaded", function() {
  // 1) Hook up the mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', function() {
    console.log("Toggle function called");
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
  
  // Starry Background Animation
  const starCanvas = document.getElementById("stars-canvas");
  const starCtx = starCanvas.getContext("2d");
  function resizeStarCanvas() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeStarCanvas);
  resizeStarCanvas();

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

  // Space Invaders Game
  const gameCanvas = document.getElementById("game-canvas");
  const ctx = gameCanvas.getContext("2d");
  const W = gameCanvas.width;
  const H = gameCanvas.height;
  const player = { x: W / 2 - 15, y: H - 30, w: 30, h: 15, speed: 5 };
  let rightPressed = false, leftPressed = false;
  const bullets = [];
  const bulletSpeed = 6;
  const invaders = [];
  const rows = 3, cols = 6;
  const invW = 30, invH = 20, padding = 10;
  let direction = 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = 30 + c * (invW + padding);
      const y = 30 + r * (invH + padding);
      invaders.push({ x, y, w: invW, h: invH, alive: true });
    }
  }

  // Key handlers for desktop
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") rightPressed = true;
    if (e.key === "ArrowLeft") leftPressed = true;
    if (e.key === " " || e.key === "Spacebar") shoot();
  });
  document.addEventListener("keyup", function(e) {
    if (e.key === "ArrowRight") rightPressed = false;
    if (e.key === "ArrowLeft") leftPressed = false;
  });

  // Touch controls for mobile (if buttons exist)
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");
  const btnShoot = document.getElementById("btn-shoot");
  if (btnLeft) {
    btnLeft.addEventListener("touchstart", function(e) { e.preventDefault(); leftPressed = true; });
    btnLeft.addEventListener("touchend", function(e) { e.preventDefault(); leftPressed = false; });
    btnLeft.addEventListener("mousedown", function() { leftPressed = true; });
    btnLeft.addEventListener("mouseup", function() { leftPressed = false; });
  }
  if (btnRight) {
    btnRight.addEventListener("touchstart", function(e) { e.preventDefault(); rightPressed = true; });
    btnRight.addEventListener("touchend", function(e) { e.preventDefault(); rightPressed = false; });
    btnRight.addEventListener("mousedown", function() { rightPressed = true; });
    btnRight.addEventListener("mouseup", function() { rightPressed = false; });
  }
  if (btnShoot) {
    btnShoot.addEventListener("touchstart", function(e) { e.preventDefault(); shoot(); });
    btnShoot.addEventListener("mousedown", shoot);
  }
  
  function shoot() {
    bullets.push({ x: player.x + player.w / 2 - 2, y: player.y, w: 4, h: 10 });
  }
  
  function updateGame() {
    if (rightPressed && player.x + player.w < W) player.x += player.speed;
    if (leftPressed && player.x > 0) player.x -= player.speed;
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].y -= bulletSpeed;
      if (bullets[i].y + bullets[i].h < 0) { bullets.splice(i, 1); i--; }
    }
    let reverse = false;
    invaders.forEach(function(inv) {
      if (inv.alive) {
        inv.x += direction;
        if (inv.x + inv.w > W || inv.x < 0) reverse = true;
      }
    });
    if (reverse) {
      direction *= -1;
      invaders.forEach(function(inv) { inv.y += 10; });
    }
    bullets.forEach(function(bullet, bi) {
      invaders.forEach(function(inv) {
        if (inv.alive &&
            bullet.x < inv.x + inv.w &&
            bullet.x + bullet.w > inv.x &&
            bullet.y < inv.y + inv.h &&
            bullet.y + bullet.h > inv.y) {
          inv.alive = false;
          bullets.splice(bi, 1);
        }
      });
    });
  }
  
  function drawGame() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#ff6f61";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "#fff";
    bullets.forEach(function(bullet) {
      ctx.fillRect(bullet.x, bullet.y, bullet.w, bullet.h);
    });
    ctx.fillStyle = "#fff";
    invaders.forEach(function(inv) {
      if (inv.alive) {
        ctx.fillRect(inv.x, inv.y, inv.w, inv.h);
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


