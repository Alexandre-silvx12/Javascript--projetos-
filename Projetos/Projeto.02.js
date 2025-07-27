<!DOCTYPE html>
<html>
<head>
  <title>Jogo da Memória</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f0f0f0;
      text-align: center;
    }

    #tabuleiro {
      display: grid;
      grid-template-columns: repeat(4, 100px);
      gap: 10px;
      justify-content: center;
      margin-top: 50px;
    }

    .carta {
      width: 100px;
      height: 100px;
      background-color: #333;
      color: white;
      font-size: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      user-select: none;
    }

    .virada {
      background-color: #fff;
      color: #333;
      cursor: default;
    }

    h1 {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>🧠 Jogo da Memória</h1>
  <div id="tabuleiro"></div>

  <script>
    const emojis = ["🍎", "🍌", "🍇", "🍓", "🍎", "🍌", "🍇", "🍓"];
    let cartas = [];
    let primeiraCarta = null;
    let segundaCarta = null;
    let bloqueado = false;

    function embaralhar(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function criarTabuleiro() {
      embaralhar(emojis);
      const tabuleiro = document.getElementById("tabuleiro");

      emojis.forEach((emoji, index) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.dataset.valor = emoji;
        carta.dataset.index = index;
        carta.innerText = "";
        carta.addEventListener("click", virarCarta);
        tabuleiro.appendChild(carta);
        cartas.push(carta);
      });
    }

    function virarCarta(e) {
      const carta = e.target;
      if (bloqueado || carta.classList.contains("virada")) return;

      carta.innerText = carta.dataset.valor;
      carta.classList.add("virada");

      if (!primeiraCarta) {
        primeiraCarta = carta;
      } else {
        segundaCarta = carta;
        bloquearCartas();

        setTimeout(() => {
          if (primeiraCarta.dataset.valor === segundaCarta.dataset.valor) {
            primeiraCarta = null;
            segundaCarta = null;
          } else {
            primeiraCarta.classList.remove("virada");
            segundaCarta.classList.remove("virada");
            primeiraCarta.innerText = "";
            segundaCarta.innerText = "";
            primeiraCarta = null;
            segundaCarta = null;
          }
          desbloquearCartas();
        }, 1000);
      }
    }

    function bloquearCartas() {
      bloqueado = true;
    }

    function desbloquearCartas() {
      bloqueado = false;
    }

    criarTabuleiro();
  </script>
</body>
</html>
