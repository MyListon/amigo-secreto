// Array para armazenar os nomes dos amigos
const amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    amigos.push(nome);

    // Atualizar a lista de amigos na interface
    const lista = document.getElementById("listaAmigos");
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);

    // Limpar o campo de entrada
    input.value = "";
    input.focus();
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Você precisa adicionar pelo menos 2 nomes para realizar o sorteio!");
        return;
    }

    // Sorteio
    const sorteadoIndex = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[sorteadoIndex];

    // Exibir o resultado e esconder a lista
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Esconder a lista de amigos
    lista.style.display = "none";

    // Exibir o resultado do sorteio
    resultado.innerHTML = `<p>Você tirou: <strong>${sorteado}</strong>!</p>`;
}
