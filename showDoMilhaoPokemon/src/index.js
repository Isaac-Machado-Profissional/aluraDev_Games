document.addEventListener("DOMContentLoaded", function () {
    // Função para embaralhar um array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
        }
        return array;
    }

    // Lista de perguntas e respostas
    const perguntas = shuffle([
        {
            "pergunta": "Quem é o primeiro Pokémon de Ash?",
            "respostas": shuffle([
                { "opcao": "Charmander", "correto": false },
                { "opcao": "Pikachu", "correto": true },
                { "opcao": "Greninja", "correto": false }
            ])
        },
        {
            "pergunta": "Qual é o Pokémon inicial do tipo água no jogo: Pokémon FireRed?",
            "respostas": shuffle([
                { "opcao": "Squirtle", "correto": true },
                { "opcao": "Totodile", "correto": false },
                { "opcao": "Mudkip", "correto": false }
            ])
        },
        {
            "pergunta": "Qual é o nome da primeira equipe vilã que queria MUITO dominar o mundo?",
            "respostas": shuffle([
                { "opcao": "Equipe Rocket", "correto": true },
                { "opcao": "Equipe Aqua", "correto": false },
                { "opcao": "Equipe Magma", "correto": false }
            ])
        },
        {
            "pergunta": "Quantos anos tem o Ash?",
            "respostas": shuffle([
                { "opcao": "18", "correto": false },
                { "opcao": "10", "correto": true },
                { "opcao": "6", "correto": false }
            ])
        },
        {
            "pergunta": "Qual é o tipo principal do Pokémon Eevee?",
            "respostas": shuffle([
                { "opcao": "Água", "correto": false },
                { "opcao": "Elétrico", "correto": false },
                { "opcao": "Normal", "correto": true }
            ])
        },
        {
            "pergunta": "O que o Pikachu fala?",
            "respostas": shuffle([
                { "opcao": "Nada", "correto": false },
                { "opcao": "Pika pika", "correto": true },
                { "opcao": "Choque do Trovão!", "correto": false }
            ])
        },
        {
            "pergunta": "Qual Pokémon lembra um pásssaro?",
            "respostas": shuffle([
                { "opcao": "Pidgey", "correto": true },
                { "opcao": "Magikarp", "correto": false },
                { "opcao": "Bulbasaur", "correto": false }
            ])
        },
        {
            "pergunta": "De quem é que o Ash quebrou a Bicicleta?",
            "respostas": shuffle([
                { "opcao": "Misty", "correto": true },
                { "opcao": "Brock", "correto": false },
                { "opcao": "Mew", "correto": false }
            ])
        },
        {
            "pergunta": "Quem é que não queria entrar na Pokébola do Ash?",
            "respostas": shuffle([
                { "opcao": "Pikachu", "correto": true },
                { "opcao": "Pidgey", "correto": false },
                { "opcao": "Caterpie", "correto": false }
            ])
        },
        {
            "pergunta": "Quando criança, o Ash queria ser o quê?",
            "respostas": shuffle([
                { "opcao": "Treinador Pokémon", "correto": true },
                { "opcao": "Enfermeiro Pokémon", "correto": false },
                { "opcao": "Um pokémon", "correto": false }
            ])
        },

    ]);

    // Pegando os elementos do HTML
    const perguntaElemento = document.querySelector(".pergunta");
    const respostasElemento = document.querySelector(".respostas");
    const progressoElemento = document.querySelector(".progresso");
    const textoFinal = document.querySelector(".fim span");
    const conteudo = document.querySelector(".conteudo");
    const conteudoFinal = document.querySelector(".fim");

    // Variáveis para controle do jogo
    let indiceAtual = 0; // Índice da pergunta atual
    let acertos = 0; // Contador de acertos

    // Função para carregar uma nova pergunta
    function carregarPergunta() {
        progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
        const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
        perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

        respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

        // Percorre todas as respostas da pergunta atual
        for (let i = 0; i < perguntaAtual.respostas.length; i++) {
            const resposta = perguntaAtual.respostas[i];
            const botao = document.createElement("button");
            botao.classList.add("botao-resposta");
            botao.innerText = resposta.opcao;
            botao.onclick = function () {
                // Incrementa apenas uma vez quando a resposta for correta
                if (resposta.correto) {
                    acertos++;
                }

                // Avança para a próxima pergunta
                indiceAtual++;

                // Se ainda houver perguntas, carrega a próxima pergunta
                if (indiceAtual < perguntas.length) {
                    carregarPergunta();
                } else {
                    finalizarJogo(); // Finaliza o jogo
                }
            };

            respostasElemento.appendChild(botao);
        }
    }

    // Função para mostrar a tela final
    function finalizarJogo() {
        textoFinal.innerHTML = `Você acertou ${acertos} de um total de ${perguntas.length} perguntas`; // Exibe o resultado
        conteudo.style.display = "none"; // Esconde as perguntas
        conteudoFinal.style.display = "flex"; // Mostra a tela final
    }

    // Iniciando o jogo pela primeira vez
    carregarPergunta();
});
