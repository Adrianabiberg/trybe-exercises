// 5 - Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const contaLetra = names.reduce((previousValue, currentValue) => {
    let letra = currentValue.split('').filter((letra) => letra === 'a' || letra === 'A');
    return previousValue += letra.length;
  }, 0);
  return contaLetra;
}

console.log(containsA());

assert.deepStrictEqual(containsA(), 20);
