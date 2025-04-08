function ponteDeVidro() {
    alert("Você está de frente a 3 vias de pontes de vidro e precisa atravessar 3 níveis de dificuldade.\n\nEscolha o vidro certo para não cair!");
    let ganhou = 0; // se for 1, perdeu. Se for 0, ganhou
  
    for (let rodada = 1; rodada <= 3; rodada++) {
      console.log("Rodada: " + rodada);
  
      let escolhaJogador;
  
      // Validação para garantir que o jogador escolha apenas 1, 2 ou 3
      do {
        escolhaJogador = prompt(`Nível ${rodada}, escolha o piso de vidro dentre as opções: (1), (2) ou (3)`);
      } while (![1, 2, 3].includes(parseInt(escolhaJogador)));
  
      const pisoQuebrado = Math.floor(Math.random() * 3) + 1;
  
      if (parseInt(escolhaJogador) === pisoQuebrado) {
        // Escolheu o piso quebrado:
        alert(`Vidro quebrou! Acabou o jogo pra você. Você caiu da ponte: ${pisoQuebrado}`);
        rodada = 1000; // Termina o loop
        ganhou = 1;
      } else {
        alert(`Ufa, você passou para o próximo nível: ${Math.min(rodada + 1, 3)}`);
      }
    }
  
    if (ganhou === 0) {
      alert("Parabéns, você concluiu o desafio ileso!");
    }
};
  