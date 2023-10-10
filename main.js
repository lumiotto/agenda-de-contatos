const formulario = document.querySelector('.formulario');
const contatos = [];
const numeros = [];

let linhas = '';

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaContatosTotal();
})

function adicionaLinha() {
    const nomeContato = document.querySelector('#nome-contato');
    const numeroContato = document.querySelector('#numero-contato');

    if (contatos.includes(nomeContato.value)) {
        alert(`O contato ${nomeContato.value} já foi adicionado`);
    } else {
        contatos.push(nomeContato.value);
        numeros.push(numeroContato.value);

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
    }
    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaContatosTotal() {
    const contatosTotal = contatos.length;
    document.querySelector('#contatos-total').innerHTML = contatosTotal;
}
