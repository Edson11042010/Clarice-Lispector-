const perguntas = [
    {
        texto: "Qual ano Clarice Lispector nasceu?",
        opcoes: ["1920", "1921", "1922", "1923"],
        respostaCorreta: 0
    },
    {
        texto: "'Clarice começou a escrever desde muito jovem e publicou seu primeiro romance.' Qual o nome do seu primeiro livro\romance?",
        opcoes: ["Laços de Família", "A Hora da Estrela", "Perto do Coração Selvagem", "Água Viva"],
        respostaCorreta: 2
    },
    {
        texto: "Qual ano foi publicado seu primeiro livro?",
        opcoes: ["1940", "1941", "1942", "1943"],
        respostaCorreta: 3
    },
    {
        texto: "Clarice frequentemente abordava temas como:",
        opcoes: ["Política, Liberdade, Amor e Relações humanas", "Identidade, Solidão, Liberdade e Relações Humanas", "Descobertas pessoais, Amor, Existência, Esperança", "Política , Amor, Esperança e Solidão"],
        respostaCorreta: 1
    },
    {
        texto: "'Clarice conta a história de Macabéa, uma jovem nordestina que vive de maneira simples e enfrenta dificuldades na cidade do Rio de Janeiro.' A obra também apresenta reflexões sobre:",
        opcoes:["Racismo, Desigualdade Social, Romance", "Xenofobia, Invisibilidade, Condições Humana", "Desigualdade Socail, Invisibilidade e Condição Humana", "Igualdade Social, Riqueza e Condições Humanas"],
        respostaCorreta: 2
    },
    {
        texto: "DESAFIO - Uma das principais características de sua literatura é a exploração da vida interior das personagens. Clarice frequentemente abordava temas como identidade, solidão, liberdade, existência, relações humanas e descobertas pessoais. Sua escrita apresenta momentos de reflexão profunda e, muitas vezes, utiliza uma linguagem poética e subjetiva. Entre suas obras mais conhecidas estão Laços de Família, A Paixão Segundo G.H., Água Viva e A Hora da Estrela. Nesta última, Clarice conta a história de Macabéa, uma jovem nordestina que vive de maneira simples e enfrenta dificuldades na cidade do Rio de Janeiro. A obra também apresenta reflexões sobre desigualdade social, invisibilidade e condição humana. Na sua opnião, Clarice Lispector é uma autora importate para o Brasil?",
        opcoes: ["Verdadeiro", "Falso", "Não sei"],
        respostaCorreta: 0
    }
]

const quiz = document.getElementById("quiz");

quiz.innerHTML = perguntas.map((pergunta, indice) => `
    <div class="questao">
        <h3>Pergunta ${indice + 1}: ${pergunta.texto}</h3>
        <form>
            ${pergunta.opcoes.map((opcao, opcaoIndex) => `
                <input type="radio" name="pergunta${indice}" value="${opcaoIndex}" id="pergunta${indice}-opcao${opcaoIndex}">
                <label for="pergunta${indice}-opcao${opcaoIndex}">${opcao}</label><br>
            `).join('')}
        </form>
    </div>
`).join('') + `
    <button id="ver-pontuacao" type="button">Ver pontuação</button>
    <p id="resultado" aria-live="polite"></p>
`;

document.getElementById("ver-pontuacao").addEventListener("click", () => {
    let pontuacao = 0;

    perguntas.forEach((pergunta, indice) => {
        const respostaSelecionada = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );

        if (respostaSelecionada && Number(respostaSelecionada.value) === pergunta.respostaCorreta) {
            pontuacao++;
        }
    });

    document.getElementById("resultado").textContent =
        `Você fez ${pontuacao} de ${perguntas.length} pontos!`;
});