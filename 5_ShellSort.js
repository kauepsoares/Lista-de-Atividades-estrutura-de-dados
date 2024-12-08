function shellSort(lista, sequencia) {
  const n = lista.length;

  for (let intervalo of sequencia) {
      for (let i = intervalo; i < n; i++) {
          const valorAtual = lista[i];
          let j = i;

          while (j >= intervalo && lista[j - intervalo] > valorAtual) {
              lista[j] = lista[j - intervalo];
              j -= intervalo;
          }

          lista[j] = valorAtual;
      }
  }

  return lista;
}

// Sequência de Shell (Original)
function sequenciaShell(n) {
  const sequencia = [];
  for (let intervalo = Math.floor(n / 2); intervalo > 0; intervalo = Math.floor(intervalo / 2)) {
      sequencia.push(intervalo);
  }
  return sequencia;
}

// Sequência de Knuth
function sequenciaKnuth(n) {
  const sequencia = [];
  let h = 1;
  while (h < n) {
      sequencia.unshift(h);
      h = 3 * h + 1;
  }
  return sequencia;
}

// Sequência de Hibbard
function sequenciaHibbard(n) {
  const sequencia = [];
  let k = 1;
  while ((1 << k) - 1 < n) {
      sequencia.unshift((1 << k) - 1); // 2^k - 1
      k++;
  }
  return sequencia;
}

// Função para medir o desempenho
function medirDesempenho(lista, sequenciaFunc, nomeSequencia) {
  const n = lista.length;
  const sequencia = sequenciaFunc(n);

  console.time(`Shell Sort - ${nomeSequencia}`);
  const resultado = shellSort([...lista], sequencia);
  console.timeEnd(`Shell Sort - ${nomeSequencia}`);

  return resultado;
}

// Testando com uma lista pequena
const listaPequena = [13, 27, 10, 5, 22, 8, 15, 3, 1, 7];
console.log("Lista Original:", listaPequena);

console.log("Sequência Shell:");
console.log(medirDesempenho(listaPequena, sequenciaShell, "Sequência Shell"));

console.log("Sequência Knuth:");
console.log(medirDesempenho(listaPequena, sequenciaKnuth, "Sequência Knuth"));

console.log("Sequência Hibbard:");
console.log(medirDesempenho(listaPequena, sequenciaHibbard, "Sequência Hibbard"));

// Testando com uma lista grande
const listaGrande = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

console.log("\nTestando com lista grande:");

medirDesempenho(listaGrande, sequenciaShell, "Sequência Shell");
medirDesempenho(listaGrande, sequenciaKnuth, "Sequência Knuth");
medirDesempenho(listaGrande, sequenciaHibbard, "Sequência Hibbard");
