function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const meio = Math.floor(arr.length / 2);
  const esquerda = mergeSort(arr.slice(0, meio));
  const direita = mergeSort(arr.slice(meio));

  return merge(esquerda, direita);
}

function merge(esquerda, direita) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i].localeCompare(direita[j]) < 0) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i), direita.slice(j));
}

const palavras = ["banana", "abacaxi", "laranja", "manga", "uva"];
console.log(mergeSort(palavras)); // Ordenação alfabética


function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivo = arr[0];
  const menores = [];
  const maiores = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].localeCompare(pivo) < 0) {
      menores.push(arr[i]);
    } else {
      maiores.push(arr[i]);
    }
  }

  return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

console.log(quickSort(palavras)); // Ordenação alfabética


function binarySearch(arr, palavra) {
  let esquerda = 0;
  let direita = arr.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    const comparacao = arr[meio].localeCompare(palavra);

    if (comparacao === 0) {
      return meio; // Palavra encontrada
    }

    if (comparacao < 0) {
      esquerda = meio + 1; // Procurar à direita
    } else {
      direita = meio - 1; // Procurar à esquerda
    }
  }

  return -1; // Palavra não encontrada
}

const palavrasOrdenadas = ["abacaxi", "banana", "laranja", "manga", "uva"];
console.log(binarySearch(palavrasOrdenadas, "laranja")); // Deve retornar o índice da palavra
console.log(binarySearch(palavrasOrdenadas, "morango")); // Deve retornar -1 (não encontrada)
