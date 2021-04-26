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
};

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
};

console.log("=================================================");

// dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let f = -7;

if (f > 0) {
    console.log("positive");
} else if (f < 0){
    console.log("negative");
} else {
    console.log("zero");
};

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
};

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
};

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
};

console.log("=================================================");

// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if.

let num1 = 6;
let num2 = 5;
let num3 = 29;

if (num1%2 === 0 || num2%2 ===0 || num3%2 ===0) {
    console.log("true");
} else {
    console.log("false");
};

console.log("=================================================");

// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if.

let num4 = 8;
let num5 = 55;
let num6 = 28;

if (num4%2 === 1 || num5%2 === 1 || num6%2 === 1) {
    console.log("true");
} else {
    console.log("false");
};

console.log("=================================================");

// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let custo = 89;
let venda = 176;

let custoTotal = custo + (custo * 0.20);
let lucro = venda - custoTotal;
let lucroPorMil = lucro * 1000;

if (custo < 0 || venda < 0) {
    console.log("Valor de custo e/ou venda é inválido.")
} else {
    console.log("O lucro por mil é de: R$" + lucroPorMil);
};

console.log("=================================================");

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 4664.98;
let salarioBase = 0;
let salarioLiquido = 0;

console.log("Com base no salário bruto de R$" + salarioBruto + " segue:");

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - (salarioBruto * 0.08);
    console.log("Desconto do INSS de 8%");
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto - (salarioBruto * 0.09);
    console.log("Desconto do INSS de 9%");
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
    console.log("Desconto do INSS de 11%");
} else {
    salarioBase = salarioBruto - 570.88;
    console.log("Desconto do INSS de R$570,88");
};

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
    console.log("Salário líquido é de: R$" + salarioLiquido);
    console.log("Não há dedução de IR.");
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    salarioLiquido = salarioBase - (salarioBase * 0.075 - 142.80);
    console.log("IR de 7,5% menos R$ 142,80");
    console.log("Salário líquido é de: R$" + salarioLiquido);
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    salarioLiquido = salarioBase - (salarioBase * 0.15 - 354.80);
    console.log("IR de 15% menos R$ 354,80");
    console.log("Salário líquido é de: R$" + salarioLiquido);
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    salarioLiquido = salarioBase - (salarioBase * 0.225 - 636.13);
    console.log("IR de 22,5% menos R$ 636,13");
    console.log("Salário líquido é de: R$" + salarioLiquido);
} else if (salarioBase >= 4664.69) {
    salarioLiquido = salarioBase - (salarioBase * 0.275 - 869.36);
    console.log("IR de 27,5% menos R$ 869,36");
    console.log("Salário líquido é de: R$" + salarioLiquido);
} else {
    console.log("insira valores válidos.");
};