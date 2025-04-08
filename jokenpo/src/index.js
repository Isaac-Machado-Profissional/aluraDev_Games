function jokenpo() {
    idade = prompt("Quantos anos você tem?");

    if(idade < 18) {
    alert("Você NÃO pode jogar Jokenpo")
    }
 
    if (idade >= 18) {
    escolhaJogador = prompt(
        "Digite o número representável: 1-Pedra, 2-Papel ou 3-Tesoura?"
    );
    escolhaComputador = Math.floor(Math.random() * 3) + 1;

    // Empates
    if (escolhaJogador == escolhaComputador) {
        alert("Houve empate!");
    }

    // Jogador escolheu Pedra
    if (escolhaJogador == 1) {
        if (escolhaComputador == 2) {
        alert("Computador venceu, escolheu Papel");
        }
        if (escolhaComputador == 3) {
        alert("Jogador vence, computador escolheu Tesoura");
        }
    }

    // Jogador escolheu Papel
    if (escolhaJogador == 2) {
        if (escolhaComputador == 1) {
        alert("Jogador venceu, Computador escolheu Pedra");
        }
        if (escolhaComputador == 3) {
        alert("Computador venceu, escolheu Tesoura");
        }
    }

    // Jogador escolheu Tesoura
    if (escolhaJogador == 3) {
        if (escolhaComputador == 1) {
        alert("Computador venceu, escolheu Pedra");
        }
        if (escolhaComputador == 2) {
        alert("Jogador venceu, Computador escolheu Papel");
        }
    }

    // Mostrando a escolha do Computador
    alert("A escolha do Computador foi: " + escolhaComputador);
    }
}