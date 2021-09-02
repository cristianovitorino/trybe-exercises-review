const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.map(name => name.toLowerCase()) // converte para minúsculo
    .map(name => name.split('')) // divide os caracteres em um array
    .reduce((acc, curr) => acc + curr // soma os caracteres
      .filter(char => char === 'a') // filtra os caracteres que são 'a'
      .length, 0); // retorna a soma (conta os 'a's contidos no array retornado pelo filter)
}

assert.deepStrictEqual(containsA(), 20);
