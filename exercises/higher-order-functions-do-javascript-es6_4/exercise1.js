// 1 - Dada uma matriz de matrizes, transforme em uma única matriz.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const result = arrays.reduce((matrizes, valor) => {
   valor.map((element) => matrizes.push(element));
   return matrizes;
  });
   return result;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
