// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }
  testingScope(true);

// 2.  Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

let oddsAndEvens = [13, 3, 4, 10, 7, 2];
// Seu código aqui.

oddsAndEvens.sort((a, b) => {
    if(a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
   return 0;
});

oddsAndEvens = `Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`;

console.log(oddsAndEvens);

// usei como referência para esse exercício o site: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a#:~:text=Por%20padr%C3%A3o%2C%20o%20m%C3%A9todo%20sort,para%20determinar%20as%20suas%20ordens 

// PARTE 2

// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const fatorial = (num) => {
  let resultado = num;
  for (let indexNum = 1; indexNum < num; indexNum +=1) {
    resultado *= indexNum;
  }
  const validacao = (num === 0 || num < 0) ? `Insira um número positivo` : resultado;
  return validacao;
}

console.log(fatorial(4));

const fatorial2 = (num) => num === 0 || num < 0 ? 1 : num * fatorial(num-1);

console.log(fatorial2(3));

// Para o bônus desse exercício usei como referência os sites: https://serprogramador.com.br/artigos/topico/javascript/Como-calcular-a-operacao-matematica-de-fatorial-com-JavaScript#:~:text=O%20fatorial%20de%20um%20n%C3%BAmero,o%20multiplicador%20seja%20equivalente%201.   e   https://gist.github.com/macsousa/dccd2abb2c68c5958846824e975482d3
