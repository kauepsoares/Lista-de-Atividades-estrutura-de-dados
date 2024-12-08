// Registro de livros com ISBN
const biblioteca = [
  { titulo: "O Hobbit", autor: "J.R.R. Tolkien", isbn: "978-1-4088-5566-1" },
  { titulo: "1984", autor: "George Orwell", isbn: "978-0-452-28423-4" },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", isbn: "978-85-359-0277-4" },
  { titulo: "A Guerra dos Tronos", autor: "George R.R. Martin", isbn: "978-0-553-89784-5" },
  { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", isbn: "978-0-618-26482-9" },
];

// Função de Binary Search para ISBN
function buscarLivroPorISBN(biblioteca, isbn) {
  let esquerda = 0;
  let direita = biblioteca.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    const livroAtual = biblioteca[meio];
    const comparacao = livroAtual.isbn.localeCompare(isbn);

    if (comparacao === 0) {
      return livroAtual; // Livro encontrado
    }

    if (comparacao < 0) {
      esquerda = meio + 1; // Buscar à direita
    } else {
      direita = meio - 1; // Buscar à esquerda
    }
  }

  return null; // Livro não encontrado
}

// Testando a busca
const isbnProcurado = "978-0-553-89784-5";
const livro = buscarLivroPorISBN(biblioteca, isbnProcurado);

if (livro) {
  console.log(`Livro encontrado: ${livro.titulo} de ${livro.autor}`);
} else {
  console.log("Livro não encontrado.");
}
