let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarConsole() {
    console.log('O botão foi clicado');
}

function verificarAlerta() {
    alert('Eu amo JS');
}

function verificarPrompt() {
    let nomedacidade = prompt('Digite o nome de uma cidade do Brasil que você goste muito:')
    alert(`Estive em ${nomedacidade} e lembrei de você!`)
}

function verificarSoma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número:'));
    let segundoNumero = parseInt(prompt('Digite o segundo número:'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`O resultado de ${primeiroNumero} + ${segundoNumero} é ${resultado}!`)
}