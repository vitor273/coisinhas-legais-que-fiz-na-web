function mostrarAlerta() {
    alert("Você está alertado, maninho!");
}

function mudarTexto() {
    const cores = ["red", "blue", "green", "orange", "purple", "#FF6B6B", "#4ECDC4", "#FFE66D"];
    const texto = document.getElementById("textoParaMudar");
    texto.textContent = "Texto alterado!";
    texto.style.color = cores[Math.floor(Math.random() * cores.length)];
}

function saudacao() {
    const nome = document.getElementById("nomeInput").value;
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = nome ? `Olá ${nome}! Seja bem-vindo ao mundo do JavaScript!` : "Por favor, digite seu nome!";
    mensagem.style.backgroundColor = nome ? "#e7ffe7" : "#ffe7e7";
    mensagem.style.color = nome ? "#006600" : "#cc0000";
}

let contador = 0;
let intervalo;
const contadorEl = document.getElementById("contador");

function trocar(delta) {
    contador += delta;
    contadorEl.textContent = contador;
}

function iniciar(delta) {
    clearInterval(intervalo);
    intervalo = setInterval(() => trocar(delta), 100);
}

function parar() {
    clearInterval(intervalo);
}

const botaoAumentar = document.getElementById("botaoAumentar");
const botaoDiminuir = document.getElementById("botaoDiminuir");
const botaoPairs = [[botaoAumentar, 1], [botaoDiminuir, -1]];
const stopEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];

botaoPairs.forEach(([botao, delta]) => {
    botao.addEventListener("mousedown", () => iniciar(delta));
    stopEvents.forEach(evt => botao.addEventListener(evt, parar));
    botao.addEventListener("click", () => trocar(delta));
});

function mostrarImagem() {
    const divImagem = document.getElementById("minhaImagem");
    divImagem.style.display = divImagem.style.display === "none" ? "block" : "none";
}
