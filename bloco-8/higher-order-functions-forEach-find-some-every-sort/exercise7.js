const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

function authorUnique() {
  // Reference:
  // - https://stackoverflow.com/a/32122760
  // - https://copilot.github.com/

  const elements = books.map(book => book.author.birthYear); // Retorna um novo array com todas os birthYears encontrados

  const uniqueValues = elements.filter((value, index, self) => self.indexOf(value) === index); // Retorna todos os birthYears únicos
  const dupeEl = elements.filter((value, index, self) => self.indexOf(value) !== index); // Retorna o birthYear duplicado
  const noDupes = elements.every((value, index, self) => self.indexOf(value) === index); // Altere um birthYear que esteja repetido para testar se noDupes está funcionando

  console.log(`
  Anos encontrados: ${elements}
  Anos não repetidos: ${uniqueValues}
  Ano duplicado: ${dupeEl}
  Todos os anos são únicos?: ${noDupes}
  `);
  return noDupes;
}

// elegante
/* function authorUnique() {
  // Reference:
  // - https://stackoverflow.com/a/32122760
  // - https://copilot.github.com/

  elements = books.map(book => book.author.birthYear);
  return elements.every((value, index, self) => self.indexOf(value) === index);
}

//super elegante
/* function authorUnique() {
  // Reference:
  // - https://stackoverflow.com/a/68933630

  e = books.map(b => b.author.birthYear);
  return !e.some((v, i) => e.indexOf(v) < i);
} */

assert.strictEqual(authorUnique(), expectedResult);
