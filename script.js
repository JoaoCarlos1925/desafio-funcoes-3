function verificaMaioridade(idade) {
    return idade >= 18;
}

function exibirMaioridade() {
    const idade = parseInt(document.getElementById('idade').value);
    const maioridade = verificaMaioridade(idade);
    const mensagem = maioridade ? 'Você é maior de idade.' : 'Você é menor de idade.';
    document.getElementById('resultado').innerText = mensagem;
}
