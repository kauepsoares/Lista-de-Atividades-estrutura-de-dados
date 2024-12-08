function bucketSort(lista) {
  const n = lista.length;
  if (n <= 1) return lista;

  // 1. Criar os baldes
  const baldes = Array.from({ length: n }, () => []);

  // 2. Distribuir os elementos nos baldes
  for (let i = 0; i < n; i++) {
      const index = Math.floor(lista[i] * n); // Mapeia o valor para o índice do balde
      baldes[index].push(lista[i]);
  }

  // 3. Ordenar cada balde (usaremos Insertion Sort aqui)
  for (let i = 0; i < n; i++) {
      baldes[i] = insertionSort(baldes[i]);
  }

  // 4. Concatenar os baldes de volta em uma lista ordenada
  return baldes.flat();
}

// Função de Insertion Sort para ordenar os elementos dentro dos baldes
function insertionSort(balde) {
  const n = balde.length;
  for (let i = 1; i < n; i++) {
      const valorAtual = balde[i];
      let j = i - 1;
      while (j >= 0 && balde[j] > valorAtual) {
          balde[j + 1] = balde[j];
          j--;
      }
      balde[j + 1] = valorAtual;
  }
  return balde;
}

// Teste com números em ponto flutuante no intervalo [0, 1)
const lista = [0.42, 0.32, 0.15, 0.68, 0.75, 0.23, 0.56];
console.log("Lista Original:", lista);
const listaOrdenada = bucketSort(lista);
console.log("Lista Ordenada:", listaOrdenada);

function bucketSortInteiros(lista, intervaloMaximo) {
  const n = lista.length;
  if (n <= 1) return lista;

  // Determinar o número de baldes
  const numBaldes = Math.floor(n);
  const baldes = Array.from({ length: numBaldes }, () => []);

  // 1. Distribuir os números nos baldes
  for (let i = 0; i < n; i++) {
      const index = Math.floor((lista[i] / intervaloMaximo) * numBaldes);
      baldes[index].push(lista[i]);
  }

  // 2. Ordenar cada balde (usando Insertion Sort ou outro algoritmo)
  for (let i = 0; i < numBaldes; i++) {
      baldes[i] = insertionSort(baldes[i]);
  }

  // 3. Concatenar os baldes de volta em uma lista ordenada
  return baldes.flat();
}

// Teste com números inteiros em um intervalo maior
const listaInteiros = [102, 345, 67, 123, 90, 356, 89];
const intervaloMaximo = 400; // Intervalo máximo para a distribuição
console.log("Lista Original (Inteiros):", listaInteiros);
const listaInteirosOrdenada = bucketSortInteiros(listaInteiros, intervaloMaximo);
console.log("Lista Ordenada (Inteiros):", listaInteirosOrdenada);
