// Função Ternary Search
function ternarySearch(lista, inicio, fim, alvo) {
  if (inicio > fim) {
      return -1; // Elemento não encontrado
  }

  // Divisão da lista em três partes
  const meio1 = Math.floor(inicio + (fim - inicio) / 3);
  const meio2 = Math.floor(fim - (fim - inicio) / 3);

  // Verificar se o alvo está em algum dos pontos de divisão
  if (lista[meio1] === alvo) {
      return meio1;
  } 
  if (lista[meio2] === alvo) {
      return meio2;
  }

  // Se o alvo é menor que o primeiro ponto de divisão, pesquisar na primeira parte
  if (alvo < lista[meio1]) {
      return ternarySearch(lista, inicio, meio1 - 1, alvo);
  }

  // Se o alvo é maior que o segundo ponto de divisão, pesquisar na terceira parte
  if (alvo > lista[meio2]) {
      return ternarySearch(lista, meio2 + 1, fim, alvo);
  }

  // Caso contrário, pesquisar na segunda parte
  return ternarySearch(lista, meio1 + 1, meio2 - 1, alvo);
}

// Função para testar o desempenho do Ternary Search e Binary Search
function testarBuscas(lista, alvo) {
  console.log(`Procurando por ${alvo} na lista`);

  // Testar Binary Search
  const resultadoBinary = binarySearch(lista, alvo);
  console.log(`Resultado do Binary Search: ${resultadoBinary !== -1 ? `Índice: ${resultadoBinary}` : 'Não encontrado'}`);

  // Testar Ternary Search
  const resultadoTernary = ternarySearch(lista, 0, lista.length - 1, alvo);
  console.log(`Resultado do Ternary Search: ${resultadoTernary !== -1 ? `Índice: ${resultadoTernary}` : 'Não encontrado'}`);
  console.log('---');
}

// Função Binary Search para comparar
function binarySearch(lista, alvo) {
  let inicio = 0;
  let fim = lista.length - 1;
  while (inicio <= fim) {
      const meio = Math.floor((inicio + fim) / 2);
      if (lista[meio] === alvo) {
          return meio;
      }
      if (lista[meio] < alvo) {
          inicio = meio + 1;
      } else {
          fim = meio - 1;
      }
  }
  return -1; // Elemento não encontrado
}

// Testando com uma lista ordenada e buscando por diferentes valores
const listaOrdenada = [2, 7, 10, 14, 23, 35, 42, 56, 78, 90];
testarBuscas(listaOrdenada, 23);  // Elemento presente
testarBuscas(listaOrdenada, 100); // Elemento ausente

//O desempenho do Ternary Search é, em termos de complexidade de tempo, teoricamente similar ao Binary Search, ou seja, ambos possuem uma complexidade de O(logn). No entanto, o Ternary Search faz duas comparações por iteração, enquanto o Binary Search faz apenas uma. Isso significa que, embora a complexidade seja a mesma, o Ternary Search pode ser um pouco mais lento devido ao maior número de comparações.