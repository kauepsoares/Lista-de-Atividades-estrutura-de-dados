function buscaBinaria(lista, alvo) {
  let esquerda = 0;
  let direita = lista.length - 1;

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

const lista = [1, 3, 5, 7, 9, 11];
const elemento = 11;

const indice = buscaBinaria(lista, elemento);
console.log("Índice:", indice); // Saída: Índice: 3

//O Binary Search divide a lista ao meio em cada iteração. Isso só é possível porque os elementos estão em ordem crescente (ou decrescente), permitindo eliminar metade da lista baseada na comparação com o valor médio. Se a lista não estiver ordenada, o algoritmo não conseguirá identificar com segurança em qual metade o valor buscado pode estar.

