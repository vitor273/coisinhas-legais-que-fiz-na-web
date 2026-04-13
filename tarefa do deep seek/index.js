const citacoes = [
    { 
        texto: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", 
        autor: "Winston Churchill", 
        categoria: "motivacao" 
    },
    { 
        texto: "Acredite que você pode e você já está no meio do caminho.", 
        autor: "Theodore Roosevelt", 
        categoria: "motivacao" 
    },
    { 
        texto: "O único limite para a realização de amanhã são as nossas dúvidas de hoje.", 
        autor: "Franklin D. Roosevelt", 
        categoria: "motivacao" 
    },
    { 
        texto: "Não espere por oportunidades, crie você mesmo as suas.", 
        autor: "Madame Curie", 
        categoria: "motivacao" 
    },
    { 
        texto: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.", 
        autor: "Eleanor Roosevelt", 
        categoria: "motivacao" 
    },

    { 
        texto: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", 
        autor: "John Lennon", 
        categoria: "sabedoria" 
    },
    { 
        texto: "Só sei que nada sei.", 
        autor: "Sócrates", 
        categoria: "sabedoria" 
    },
    { 
        texto: "A verdadeira sabedoria está em reconhecer a própria ignorância.", 
        autor: "Sócrates", 
        categoria: "sabedoria" 
    },
    { 
        texto: "Seja a mudança que você quer ver no mundo.", 
        autor: "Mahatma Gandhi", 
        categoria: "sabedoria" 
    },
    { 
        texto: "Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.", 
        autor: "Carl Jung", 
        categoria: "sabedoria" 
    },

    { 
        texto: "Programador é uma máquina que transforma café em código.", 
        autor: "Anônimo", 
        categoria: "humor" 
    },
    { 
        texto: "A única coisa que funciona no meu computador é o botão de desligar.", 
        autor: "Anônimo", 
        categoria: "humor" 
    },
    { 
        texto: "Tenho 99 problemas e todos eles são causados pelo CSS.", 
        autor: "Desenvolvedor frustrado", 
        categoria: "humor" 
    },
    { 
        texto: "Não sou preguiçoso, estou no modo de economia de energia.", 
        autor: "Anônimo", 
        categoria: "humor" 
    },
    { 
        texto: "Otimista: Acha que o copo está meio cheio. Pessimista: Acha que o copo está meio vazio. Programador: Acha que o copo tem o dobro da capacidade necessária.", 
        autor: "Anônimo", 
        categoria: "humor" 
    },

    { 
        texto: "O amor é quando a felicidade do outro é essencial para a sua.", 
        autor: "Robert A. Heinlein", 
        categoria: "amor" 
    },
    { 
        texto: "Amar não é olhar um para o outro, é olhar juntos na mesma direção.", 
        autor: "Antoine de Saint-Exupéry", 
        categoria: "amor" 
    },
    { 
        texto: "O amor é a força mais sutil e poderosa do mundo.", 
        autor: "Mahatma Gandhi", 
        categoria: "amor" 
    },
    { 
        texto: "Onde há amor, há vida.", 
        autor: "Mahatma Gandhi", 
        categoria: "amor" 
    },
    { 
        texto: "Ser amado profundamente por alguém lhe dá força, enquanto amar profundamente alguém lhe dá coragem.", 
        autor: "Lao Tzu", 
        categoria: "amor" 
    },
];
let contador = 0;
let contadorVitoria = 0;
const botao = document.getElementById("meuBotao");
const contadorElemento = document.getElementById("contador");
const textoElemento = document.getElementById("texto");
const autorElemento = document.getElementById("autor");
const categoriaElemento = document.getElementById("categoria");
const vitoriaElemento = document.getElementById("vitoria");

function fraseAleatoria() {
    const indice = Math.floor(Math.random() * citacoes.length);
    const citacao = citacoes[indice];
    textoElemento.textContent = `"${citacao.texto}"`;
    autorElemento.textContent = `- ${citacao.autor}`;
    categoriaElemento.textContent = `Categoria: ${citacao.categoria}`;
}
function gerarFrase() {
    fraseAleatoria();
    contador++;
    contadorElemento.textContent = `Frases geradas: ${contador}`;
}
if (botao) {
    botao.addEventListener("click", gerarFrase);
}
fraseAleatoria();
contadorElemento.textContent = `Frases geradas: ${contador}`;

botao.addEventListener("click", () => {
    contadorVitoria++;
    vitoriaElemento.textContent = `segredo: ${contadorVitoria}`;
    if (contadorVitoria >= 60) {
        alert("Parabéns! Você alcançou 60 vitórias bonitinha! Oque vc ta fazendo aqui vaiu lavar uma louça ou algo assim!!");
        contadorVitoria = 0;
    }     
     const indiceAleatorio = Math.floor(Math.random() * citacoes.length);
        const citacao = citacoes[indiceAleatorio];
        textoElemento.textContent = `"${citacao.texto}"`;
});