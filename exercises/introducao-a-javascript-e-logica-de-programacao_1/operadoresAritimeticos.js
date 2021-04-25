let a = 12;
let b = 70;

// Adição
console.log(a+b);

// Subtração
console.log(a-b);

// Multiplicação
console.log(a*b);

// Divisão
console.log(a/b);

// Módulo
console.log(a%b);

console.log("=================================================");

// Retorne o maior de dois números

let z = 4;
let y = 12;

if (z > y) {
    console.log(z);
} else {
    console.log(y);
}

console.log("=================================================");

// Retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let c = 10;
let d = 30;
let e = 18;

if (c > d && c > e) {
    console.log(c);
} else if (d > e) {
    console.log(d);
}else {
    console.log(e);
}

console.log("=================================================");

// dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let f = -7;

if (f > 0) {
    console.log("positive");
} else if (f < 0){
    console.log("negative");
} else {
    console.log("zero");
}

console.log("=================================================");

// defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = 55;
let anguloB = 55;
let anguloC = 90;

if (anguloA + anguloB + anguloC === 180){
    console.log("true");
} else if (anguloA < 0 || anguloB < 0 || anguloC < 0){
    console.log("erro. Valores inválidos, verique se o valor é positivo");
} else {
    console.log("false");
}
console.log("=================================================");

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais).

let nomeDaPeca = "Cavalo";
let pLowerCase = nomeDaPeca.toLocaleLowerCase();

if ( pLowerCase === "dama") {
    console.log("A Dama se move em todas as direções no tabuleiro, com exceção do movimento em L.");
} else if (pLowerCase === "bispo") {
    console.log("O Bispo se move nas diagonais");
} else if (pLowerCase === "rei") {
    console.log("O Rei se move para qualquer direção, apenas uma casa por jogada.");
} else if (pLowerCase === "cavalo") {
    console.log("O Cavalo se movimenta em L.");
}else if (pLowerCase === "torre") {
    console.log("A Torre se move sempre em linha reta.");
}else if (pLowerCase === "peão") {
    console.log("O Peão se movimenta apenas para frente, uma casa por vez e ataca somente na diagonal.");
} else {
    console.log("Movimento inválido");
}

console.log("=================================================");

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 90;

if (nota >= 90 && nota <=100) {
    console.log("nota: A");
} else if (nota >= 80 && nota < 90) {
    console.log("nota: B");
} else if (nota >= 70 && nota < 80) {
    console.log("nota: C");
} else if (nota >= 60 && nota < 70) {
    console.log("nota: D");
} else if (nota >= 50 && nota < 60) {
    console.log("nota: E");
} else if (nota < 50 && nota >= 0) {
    console.log("nota: F");
} else {
    console.log("Valor inválido.");
}

console.log("=================================================");
