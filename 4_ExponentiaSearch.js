function buscaExponencial(lista, alvo) {
  const n = lista.length;

  // Caso especial: verificar o primeiro elemento
  if (lista[0] === alvo) {
      return 0;
  }

  // Etapa 1: Localizar o intervalo exponencialmente
  let limite = 1;
  while (limite < n && lista[limite] <= alvo) {
      limite *= 2;
  }

  // Definir os limites do intervalo
  const esquerda = Math.floor(limite / 2);
  const direita = Math.min(limite, n);

  // Etapa 2: Busca binária no intervalo encontrado
  return buscaBinaria(lista, alvo, esquerda, direita - 1);
}

// Função auxiliar: Binary Search limitada a um intervalo
function buscaBinaria(lista, alvo, esquerda, direita) {
  while (esquerda <= direita) {
      const meio = Math.floor((esquerda + direita) / 2);
      if (lista[meio] === alvo) {
          return meio;
      } else if (lista[meio] < alvo) {
          esquerda = meio + 1;
      } else {
          direita = meio - 1;
      }
  }
  return -1; // Retorna -1 se o elemento não for encontrado
}

const lista = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const elemento = 13;

const indice = buscaExponencial(lista, elemento);
console.log("Índice encontrado:", indice); // Saída: 6


//Semelhança com Jump Search: A etapa inicial, onde o índice é dobrado a cada iteração, é similar ao "salto" no Jump Search, mas o Exponential Search usa um salto exponencial.

//Semelhança com Binary Search: Após localizar o intervalo, ele utiliza o Binary Search, aproveitando sua eficiência para reduzir o número de comparações.

//COMPLEXIDADE:

//PIOR CASO: 𝑂(log 𝑛), A etapa de salto e a busca binária têm complexidade 𝑂(log 𝑛) cada, mas são executadas sequencialmente.

//MELHOR CASO: O(1), O elemento está no início da lista.

//Em listas grandes, Exponential Search é eficiente porque rapidamente reduz o tamanho do problema a um intervalo pequeno, aproveitando a eficiência da Binary Search.

//Em listas pequenas, o desempenho é comparável ao Binary Search, já que a etapa exponencial é curta.