function jokenpo() {
    const idade = prompt("Quantos anos você tem?");
  
    if (idade < 18) {
      alert("Você NÃO pode jogar Jokenpo");
      return; // Finaliza a execução
    }
  
    if (idade >= 18) {
      const escolhaJogador = prompt(
        "Digite sua escolha: Pedra, Papel ou Tesoura?").toLowerCase(); // Converte a entrada para minúsculas para garantir validação
  
      // Valida a entrada do jogador
      if (["pedra", "papel", "tesoura"].indexOf(escolhaJogador) === -1) {
        alert("Escolha inválida! Por favor, digiteÇ Pedra, Papel ou Tesoura.");
        return;
      }
  
      const opcoes = ["pedra", "papel", "tesoura"];
      const escolhaComputador = opcoes[Math.floor(Math.random() * 3)]; // Escolha aleatória do computador
  
      // Empates
      if (escolhaJogador === escolhaComputador) {
        alert("Houve empate!");
      }
  
      // Jogador escolheu Pedra
      if (escolhaJogador === "pedra") {
        if (escolhaComputador === "papel") {
          alert("Computador venceu, escolheu Papel.");
        } else if (escolhaComputador === "tesoura") {
          alert("Jogador vence, computador escolheu Tesoura.");
        }
      }
  
      // Jogador escolheu Papel
      if (escolhaJogador === "papel") {
        if (escolhaComputador === "pedra") {
          alert("Jogador venceu, computador escolheu Pedra.");
        } else if (escolhaComputador === "tesoura") {
          alert("Computador venceu, escolheu Tesoura.");
        }
      }
  
      // Jogador escolheu Tesoura
      if (escolhaJogador === "tesoura") {
        if (escolhaComputador === "pedra") {
          alert("Computador venceu, escolheu Pedra.");
        } else if (escolhaComputador === "papel") {
          alert("Jogador venceu, computador escolheu Papel.");
        }
      }
  
      // Mostrando a escolha do Computador
      alert("A escolha do Computador foi: " + escolhaComputador.charAt(0).toUpperCase() + escolhaComputador.slice(1));
    }
  }
  