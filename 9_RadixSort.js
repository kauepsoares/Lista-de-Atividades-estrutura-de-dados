function countingSortPorDigito(lista, base, digito) {
  const n = lista.length;
  const output = new Array(n);
  const count = new Array(base).fill(0);

  // Contar as ocorrências dos dígitos
  for (let i = 0; i < n; i++) {
      const index = Math.floor(lista[i] / Math.pow(base, digito)) % base;
      count[index]++;
  }

  // Atualizar o count[] para armazenar as posições acumuladas
  for (let i = 1; i < base; i++) {
      count[i] += count[i - 1];
  }

  // Construir a lista ordenada
  for (let i = n - 1; i >= 0; i--) {
      const index = Math.floor(lista[i] / Math.pow(base, digito)) % base;
      output[count[index] - 1] = lista[i];
      count[index]--;
  }

  // Copiar o output[] para lista[], para que a lista agora esteja ordenada pelo dígito atual
  for (let i = 0; i < n; i++) {
      lista[i] = output[i];
  }
}

function radixSort(lista, base = 10) {
  const max = Math.max(...lista);
  const numDigitos = Math.floor(Math.log(max) / Math.log(base)) + 1;

  for (let digito = 0; digito < numDigitos; digito++) {
      countingSortPorDigito(lista, base, digito);
  }

  return lista;
}

const lista2Digitos = [23, 12, 45, 67, 34, 89, 56];
console.log("Lista Original (2 Dígitos):", lista2Digitos);
console.log("Lista Ordenada (2 Dígitos):", radixSort(lista2Digitos));

const lista5Digitos = [13456, 98765, 23456, 56789, 34567];
console.log("\nLista Original (5 Dígitos):", lista5Digitos);
console.log("Lista Ordenada (5 Dígitos):", radixSort(lista5Digitos));

const lista10Digitos = [1234567890, 9876543210, 4567891230, 2345678901];
console.log("\nLista Original (10 Dígitos):", lista10Digitos);
console.log("Lista Ordenada (10 Dígitos):", radixSort(lista10Digitos));


