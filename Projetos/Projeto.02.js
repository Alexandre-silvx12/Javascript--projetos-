
<!DOCTYPE html><html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jogo da Memória - Frutas</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(to right, #fceabb, #f8b500);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      color: #333;
    }h1 {
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 1px 1px 2px #000;
}

.entrada {
  text-align: center;
  animation: fadeIn 2s ease-in-out;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  margin-top: 20px;
  background-color: #ff7043;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f4511e;
}

#jogo {
  display: grid;
  gap: 10px;
  margin-top: 20px;
}

.carta {
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border: 2px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s;
}

.carta.virada {
  background-color: #81c784;
  transform: rotateY(180deg);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

  </style>
</head>
<body>
  <div class="entrada">
    <h1>Jogo da Memória: Frutas 🍓🍌🍍</h1>
    <button onclick="iniciarJogo()">Começar Jogo</button>
    <p id="nivelAtual"></p>
    <p>Tentativas: <span id="tentativas">0</span></p>
  </div>
  <div id="jogo"></div><audio id="acerto" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_daf7b0cb0d.mp3?filename=correct-2-46134.mp3"></audio> <audio id="erro" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_50484aa816.mp3?filename=error-2-43860.mp3"></audio> <audio id="vitoria" src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_1689d226a2.mp3?filename=success-1-6297.mp3"></audio>

  <script>
    const frutas = ["🍓", "🍌", "🍍", "🍇", "🍉", "🥝", "🍒", "🍑", "🍎", "🍐"];
    let primeiraCarta = null;
    let segundaCarta = null;
    let bloqueado = false;
    let tentativas = 0;
    let acertos = 0;
    let nivel = 1;
    const jogo = document.getElementById("jogo");
    const tentativasTexto = document.getElementById("tentativas");
    const nivelTexto = document.getElementById("nivelAtual");

    const somAcerto = document.getElementById("acerto");
    const somErro = document.getElementById("erro");
    const somVitoria = document.getElementById("vitoria");

    function iniciarJogo() {
      tentativas = 0;
      acertos = 0;
      tentativasTexto.textContent = tentativas;
      nivelTexto.textContent = `Nível: ${nivel}`;
      jogo.innerHTML = "";

      let totalCartas = 8 + (nivel - 1) * 4;
      let frutasSelecionadas = frutas.slice(0, totalCartas / 2);
      let cartas = [...frutasSelecionadas, ...frutasSelecionadas];
      cartas.sort(() => 0.5 - Math.random());

      if (totalCartas <= 8) {
        jogo.style.gridTemplateColumns = "repeat(4, 1fr)";
      } else if (totalCartas <= 12) {
        jogo.style.gridTemplateColumns = "repeat(4, 1fr)";
      } else if (totalCartas <= 16) {
        jogo.style.gridTemplateColumns = "repeat(4, 1fr)";
      } else {
        jogo.style.gridTemplateColumns = "repeat(5, 1fr)";
      }

      cartas.forEach(fruta => {
        const carta = document.createElement("div");
        carta.className = "carta";
        carta.dataset.valor = fruta;
        carta.addEventListener("click", virarCarta);
        jogo.appendChild(carta);
      });
    }

    function virarCarta() {
      if (bloqueado || this.classList.contains("virada")) return;

      this.classList.add("virada");
      this.innerText = this.dataset.valor;

      if (!primeiraCarta) {
        primeiraCarta = this;
      } else {
        segundaCarta = this;
        bloqueado = true;
        tentativas++;
        tentativasTexto.textContent = tentativas;

        setTimeout(() => {
          if (primeiraCarta.dataset.valor === segundaCarta.dataset.valor) {
            somAcerto.play();
            acertos++;
            if (acertos === (jogo.children.length / 2)) {
              if (nivel < 4) {
                nivel++;
                alert("Parabéns! Avançando para o próximo nível!");
                iniciarJogo();
              } else {
                somVitoria.play();
                alert("Você venceu todos os níveis! 🎉");
              }
            }
            primeiraCarta = null;
            segundaCarta = null;
            bloqueado = false;
          } else {
            somErro.play();
            setTimeout(() => {
              primeiraCarta.classList.remove("virada");
              segundaCarta.classList.remove("virada");
              primeiraCarta.innerText = "";
              segundaCarta.innerText = "";
              primeiraCarta = null;
              segundaCarta = null;
              bloqueado = false;
            }, 600);
          }
        }, 800);
      }
    }
  </script></body>
</html>
