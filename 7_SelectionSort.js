function selectionSort(lista) {
  const n = lista.length;

  console.log("Lista Original:", [...lista]); // Exibir a lista original

  for (let i = 0; i < n - 1; i++) {
      let indiceMinimo = i;

      // Encontrar o menor elemento na parte não ordenada
      for (let j = i + 1; j < n; j++) {
          if (lista[j] < lista[indiceMinimo]) {
              indiceMinimo = j;
          }
      }

      // Trocar o elemento atual pelo menor encontrado
      if (indiceMinimo !== i) {
          [lista[i], lista[indiceMinimo]] = [lista[indiceMinimo], lista[i]];
      }

      // Exibir o estado da lista após cada iteração
      console.log(`Iteração ${i + 1}:`, [...lista]);
  }

  return lista;
}

const listaPequena = [64, 25, 12, 22, 11];
console.log("Ordenando Lista Pequena...");
const listaOrdenadaPequena = selectionSort(listaPequena);
console.log("Lista Ordenada:", listaOrdenadaPequena);

const listaMedia = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
const listaGrande = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));

console.time("Selection Sort - Lista Pequena");
selectionSort(listaPequena);
console.timeEnd("Selection Sort - Lista Pequena");

console.time("Selection Sort - Lista Média");
selectionSort(listaMedia);
console.timeEnd("Selection Sort - Lista Média");

console.time("Selection Sort - Lista Grande");
selectionSort(listaGrande);
console.timeEnd("Selection Sort - Lista Grande");
