function caboDeGuerra() {
    alert("Bem-vindo ao Cabo de Guerra! Você vai jogar contra outros 3 inimigos aleatórios!");
    
    const personagem = [];
    const viloes = [];
    let forcaPersonagem = 0;
    let forcaViloes = 0;
  
    // Função para capitalizar a primeira letra
    function capitalizarPrimeiraLetra(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  
    // Escolher personagens para o time do jogador
    for (let i = 0; i < 3; i++) {
      let escolhaPersonagem;
  
      do {
        escolhaPersonagem = prompt(`Digite o nome do seu ${i + 1}° personagem`);
      } while (!escolhaPersonagem || escolhaPersonagem.trim() === "" || personagem.includes(escolhaPersonagem.trim()));
  
      personagem.push(capitalizarPrimeiraLetra(escolhaPersonagem.trim())); // Adiciona ao time do jogador com primeira letra maiúscula
      forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    }
  
    // Escolher vilões adversários
    let viloesPossiveis = [
      "Thanos", 
      "Darth Vader", 
      "Negan", 
      "Voldemort", 
      "Bowser",
      "Abby",
      "Coringa",
      "Charada",
      "Ultron",
      "Loki",
      "Venom",
      "Duende Verde",
      "Doutor Octavius Otto",
      "Senhor Destino",
      "Gargamel",
      "Tripa Seca",
      "Zeca Urubu",
      "Capitão Pátria",
      "Puxa pena",
      "Pinguim",
      "Dark Seid",
      "Triângulo",
      "Quadrado",
      "Círculo"
    ];
    
    for (let i = 0; i < 3; i++) {
      const indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length);
      viloes.push(viloesPossiveis[indiceAleatorio]); // Adiciona o vilão ao time adversário
      viloesPossiveis.splice(indiceAleatorio, 1); // Remove o vilão escolhido da lista
      forcaViloes += Math.floor(Math.random() * 10) + 1;
    }
  
    // Formatar lista de personagens e vilões
    const personagemFormatados = personagem.slice(0, -1).join(", ") + " e " + personagem[personagem.length - 1];
    const viloesFormatados = viloes.slice(0, -1).join(", ") + " e " + viloes[viloes.length - 1];
  
    // Comparar os times para saber quem venceu
    if (forcaPersonagem > forcaViloes) {
      alert(`Você e o seu time ${personagemFormatados} ganharam a disputa do Cabo de Guerra! \n\nA força exercida do seu time foi de ${forcaPersonagem}N contra os inimigos: ${viloesFormatados}, uau!`);
    } else if (forcaPersonagem < forcaViloes) {
      alert(`Você e seu time perdeu! \n\nOs personagens inimigos: ${viloesFormatados} ganharam o Cabo de Guerra puxando juntos exercendo uma força de ${forcaViloes}N.`);
    } else {
      alert("Os dois times têm a mesma força! Vocês empataram.");
    }
  
    // Exibir os vilões enfrentados
    const vilaoFinal = document.getElementById("vilaoFinal");
    vilaoFinal.textContent = `Vilões anteriormente enfrentados: ${viloes.join(", ")}`;
  }
  