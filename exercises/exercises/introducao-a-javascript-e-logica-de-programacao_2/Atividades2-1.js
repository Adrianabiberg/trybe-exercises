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
