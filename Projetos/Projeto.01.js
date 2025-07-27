<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Aventura do Herói</title>
  <style>
    body {
      margin: 0;
      background: #222;
    }
    #game {
      width: 800px;
      height: 400px;
      margin: 50px auto;
      background: #a3d9ff;
      position: relative;
      border: 4px solid #000;
    }
    #player {
      width: 40px;
      height: 40px;
      background: blue;
      position: absolute;
      top: 20px;
      left: 20px;
      border-radius: 50%;
    }
    #obstacle {
      width: 100px;
      height: 40px;
      background: red;
      position: absolute;
      top: 120px;
      left: 300px;
    }
    #princess {
      width: 40px;
      height: 40px;
      background: pink;
      position: absolute;
      top: 300px;
      left: 720px;
      border-radius: 50%;
    }
  </style>
</head>
<body>

<div id="game">
  <div id="player"></div>
  <div id="obstacle"></div>
  <div id="princess"></div>
</div>

<script>
  const player = document.getElementById("player");
  const obstacle = document.getElementById("obstacle");
  const princess = document.getElementById("princess");

  let posX = 20;
  let posY = 20;

  document.addEventListener("keydown", function(e) {
    const step = 10;
    if (e.key === "ArrowRight") posX += step;
    if (e.key === "ArrowLeft") posX -= step;
    if (e.key === "ArrowUp") posY -= step;
    if (e.key === "ArrowDown") posY += step;

    // Limites da tela
    posX = Math.max(0, Math.min(760, posX));
    posY = Math.max(0, Math.min(360, posY));

    player.style.left = posX + "px";
    player.style.top = posY + "px";

    checkCollision();
  });

  function isColliding(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
      aRect.right < bRect.left ||
      aRect.left > bRect.right ||
      aRect.bottom < bRect.top ||
      aRect.top > bRect.bottom
    );
  }

  function checkCollision() {
    if (isColliding(player, obstacle)) {
      alert("Você bateu em um obstáculo! Tente de novo.");
      // Reset posição
      posX = 20;
      posY = 20;
      player.style.left = posX + "px";
      player.style.top = posY + "px";
    }

    if (isColliding(player, princess)) {
      alert("Parabéns! Você encontrou a princesa! 👸💖");
      // Aqui você pode reiniciar o jogo ou fazer algo novo
    }
  }
</script>

</body>
</html>
