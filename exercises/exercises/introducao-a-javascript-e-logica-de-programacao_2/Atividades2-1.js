let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
};

console.log("=============================================");

let somaTotal = 0;

for (let soma = 0; soma < numbers.length; soma +=1) {
 somaTotal += numbers[soma];
};

console.log(somaTotal);

console.log("=============================================");

let mediaAritmetica = somaTotal / numbers.length;
console.log(mediaAritmetica);

console.log("=============================================");

if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
};

console.log("=============================================");

let resultado = 0;

for (let maiorNumero = 0; maiorNumero < numbers.length; maiorNumero += 1) {
    for (let comparaNumero = 0; comparaNumero < numbers.length; comparaNumero += 1) {
        if (numbers[maiorNumero] > numbers[comparaNumero] && numbers[maiorNumero] > resultado) {
            resultado = numbers[maiorNumero];
        };
    };
};

console.log(resultado);

console.log("=============================================");

let impar = [];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        impar += 1;
    };
};

if (impar.length === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(`O array possui ${impar.length} números ímpares`);
}

console.log("=============================================");

let resultadomenorNum = 100000000;

for (let menorNumero = 0; menorNumero < numbers.length; menorNumero += 1) {
    for (let comparNumero = 0; comparNumero < numbers.length; comparNumero += 1) {
        if (numbers[menorNumero] < numbers[comparNumero] && numbers[menorNumero] < resultadomenorNum) {
            resultadomenorNum = numbers[menorNumero];
        };
    };
};

console.log(resultadomenorNum);

console.log("=============================================");

