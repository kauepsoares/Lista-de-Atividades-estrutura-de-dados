function buscaInterpolada(lista, alvo) {
  let esquerda = 0;
  let direita = lista.length - 1;

  while (esquerda <= direita && alvo >= lista[esquerda] && alvo <= lista[direita]) {
      // Calcula a posição com base na interpolação
      const posicao = esquerda + Math.floor(
          ((alvo - lista[esquerda]) * (direita - esquerda)) / 
          (lista[direita] - lista[esquerda])
      );

      // Verifica se o elemento foi encontrado
      if (lista[posicao] === alvo) {
          return posicao;
      }

      // Ajusta os limites
      if (lista[posicao] < alvo) {
          esquerda = posicao + 1;
      } else {
          direita = posicao - 1;
      }
  }

  return -1; // Retorna -1 se o elemento não for encontrado
}

const listaUniforme = [10, 20, 30, 40, 50, 60, 70, 80];
const listaNaoUniforme = [1, 5, 10, 15, 22, 20, 50, 100, 200, 400];
const elemento = 50;

console.log("Busca Interpolada (Uniforme):", buscaInterpolada(listaUniforme, elemento)); // Saída: 4
console.log("Busca Interpolada (Não Uniforme):", buscaInterpolada(listaNaoUniforme, elemento)); // Saída: 4

//O Interpolation Search é mais eficiente porque estima a posição do elemento com base na sua relação com os limites, reduzindo a quantidade de comparações.

//O Binary Search é geralmente mais eficiente. Em listas onde os intervalos entre os elementos variam muito, a estimativa do Interpolation Search pode ser imprecisa, levando a mais iterações.