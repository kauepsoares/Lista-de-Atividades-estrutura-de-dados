function mergeSort(lista, comparador = (a, b) => a - b) {
  // Caso base: lista com 1 ou nenhum elemento está ordenada
  if (lista.length <= 1) {
      return lista;
  }

  // Dividir a lista ao meio
  const meio = Math.floor(lista.length / 2);
  const esquerda = lista.slice(0, meio);
  const direita = lista.slice(meio);

  // Recursivamente ordenar as metades
  const listaEsquerdaOrdenada = mergeSort(esquerda, comparador);
  const listaDireitaOrdenada = mergeSort(direita, comparador);

  // Conquistar: combinar as listas ordenadas
  return merge(listaEsquerdaOrdenada, listaDireitaOrdenada, comparador);
}

function merge(esquerda, direita, comparador) {
  const resultado = [];
  let i = 0;
  let j = 0;

  // Combinar os dois arrays ordenados
  while (i < esquerda.length && j < direita.length) {
      if (comparador(esquerda[i], direita[j]) <= 0) {
          resultado.push(esquerda[i]);
          i++;
      } else {
          resultado.push(direita[j]);
          j++;
      }
  }

  // Adicionar os elementos restantes
  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

// Comparador para strings em ordem alfabética
function comparadorStrings(a, b) {
  return a.localeCompare(b); // Retorna -1, 0 ou 1 com base na ordem alfabética
}

const numeros = [38, 27, 43, 3, 9, 82, 10];
console.log("Lista Original (Números):", numeros);

const numerosOrdenados = mergeSort(numeros);
console.log("Números Ordenados:", numerosOrdenados);

const strings = ["banana", "laranja", "maçã", "uva", "abacaxi"];
console.log("\nLista Original (Strings):", strings);

const stringsOrdenadas = mergeSort(strings, comparadorStrings);
console.log("Strings Ordenadas:", stringsOrdenadas);
