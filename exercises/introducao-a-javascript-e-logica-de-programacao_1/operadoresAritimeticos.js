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

// Retorne o maior de dois números

let z = 4;
let y = 12;

if (z > y) {
    console.log(z);
} else {
    console.log(y);
}

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

// dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let f = -7;

if (f > 0) {
    console.log("positive");
} else if (f < 0){
    console.log("negative");
} else {
    console.log("zero");
}

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