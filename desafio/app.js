
// 1.Criar uma função que exibe "Olá, mundo!" no console.

function exibirOla() {
    console.log('Olá, mundo');
}

exibirOla();

// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function exibirOlaNome(nome){
    console.log(`Olá ${nome}!`);
}

exibirOlaNome("Brenda");

// 3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function calcularDobro(numero) {
    return numero * 2;
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

// 4.Criar uma função que recebe três números como parâmetros e retorna a média deles.

function calcularMedia(a, b, c) {
    return (a, b, c) / 3;
}

let media = calcularMedia(4, 7, 8);
console.log(media);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function encontrarMaior(a, b) {
    return (a > b ? a : b);
}

let maiorNumero = encontrarMaior (4, 10);
console.log(maiorNumero)

// 6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.

function quadrado(numero) {
    return numero * numero;
}

let resultado = quadrado(2);
console.log(resultado);