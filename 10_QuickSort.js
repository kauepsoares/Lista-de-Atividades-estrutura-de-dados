// Função para dividir a lista com base no pivô
function particionar(lista, inicio, fim, tipoPivo) {
  let pivo;
  switch (tipoPivo) {
      case 'primeiro':
          pivo = lista[inicio];
          break;
      case 'ultimo':
          pivo = lista[fim];
          break;
      case 'meio':
          pivo = lista[Math.floor((inicio + fim) / 2)];
          break;
      default:
          pivo = lista[inicio];
  }
  
  let i = inicio - 1;
  for (let j = inicio; j < fim; j++) {
      if (lista[j] <= pivo) {
          i++;
          [lista[i], lista[j]] = [lista[j], lista[i]];
      }
  }
  [lista[i + 1], lista[fim]] = [lista[fim], lista[i + 1]]; // Coloca o pivô na posição correta
  return i + 1;
}

// Função recursiva do Quick Sort
function quickSort(lista, inicio = 0, fim = lista.length - 1, tipoPivo = 'primeiro') {
  if (inicio < fim) {
      const pivoIndex = particionar(lista, inicio, fim, tipoPivo);
      quickSort(lista, inicio, pivoIndex - 1, tipoPivo);
      quickSort(lista, pivoIndex + 1, fim, tipoPivo);
  }
  return lista;
}

// Funções de teste para diferentes estratégias de pivô
function testarQuickSort(lista, tipoPivo) {
  const listaCopiada = [...lista]; // Copia a lista para não alterar a original
  console.log(`Ordenando com pivô ${tipoPivo}:`);
  console.log("Original:", lista);
  const listaOrdenada = quickSort(listaCopiada, 0, listaCopiada.length - 1, tipoPivo);
  console.log("Ordenada:", listaOrdenada);
  console.log('---');
}

// Teste com listas quase ordenadas e completamente desordenadas
const listaDesordenada = [34, 7, 23, 32, 5, 62, 32];
const listaQuaseOrdenada = [1, 2, 3, 4, 5, 6, 7];

testarQuickSort(listaDesordenada, 'primeiro');
testarQuickSort(listaDesordenada, 'ultimo');
testarQuickSort(listaDesordenada, 'meio');

testarQuickSort(listaQuaseOrdenada, 'primeiro');
testarQuickSort(listaQuaseOrdenada, 'ultimo');
testarQuickSort(listaQuaseOrdenada, 'meio');
