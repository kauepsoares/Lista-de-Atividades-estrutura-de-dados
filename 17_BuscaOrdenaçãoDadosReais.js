// Lista de alunos com suas notas (de 0 a 100)
const alunos = [
  { nome: "Alice", nota: 78 },
  { nome: "Bob", nota: 94 },
  { nome: "Carlos", nota: 56 },
  { nome: "Diana", nota: 89 },
  { nome: "Eva", nota: 73 },
  { nome: "Felipe", nota: 91 },
  { nome: "Gabriel", nota: 64 },
  { nome: "Hugo", nota: 85 },
  { nome: "Isabel", nota: 99 },
  { nome: "João", nota: 62 }
];

// Função para realizar o Bucket Sort
function bucketSort(arr) {
  const n = arr.length;
  const max = 100; // As notas variam de 0 a 100
  const numBuckets = 10; // 10 baldes, um para cada intervalo de 10 notas
  const buckets = Array.from({ length: numBuckets }, () => []);

  // Distribuir as notas nos baldes
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(arr[i].nota / 10);
    buckets[idx].push(arr[i]);
  }

  // Ordenar cada balde (usando o método de ordenação simples como sort)
  for (let i = 0; i < numBuckets; i++) {
    buckets[i].sort((a, b) => a.nota - b.nota);
  }

  // Concatenar os baldes ordenados
  return [].concat(...buckets);
}

// Função de Interpolation Search para encontrar um aluno com a nota específica
function interpolationSearch(arr, nota) {
  let esquerda = 0;
  let direita = arr.length - 1;

  while (esquerda <= direita && nota >= arr[esquerda].nota && nota <= arr[direita].nota) {
    const pos = esquerda + Math.floor(((nota - arr[esquerda].nota) * (direita - esquerda)) / (arr[direita].nota - arr[esquerda].nota));

    if (arr[pos].nota === nota) {
      return arr[pos]; // Encontrou o aluno com a nota
    }

    if (arr[pos].nota < nota) {
      esquerda = pos + 1;
    } else {
      direita = pos - 1;
    }
  }

  return null; // Aluno não encontrado
}

// Ordenando os alunos pelo Bucket Sort
const alunosOrdenados = bucketSort(alunos);
console.log("Alunos ordenados:", alunosOrdenados);

// Procurando um aluno com uma nota específica usando Interpolation Search
const notaProcurada = 89;
const alunoEncontrado = interpolationSearch(alunosOrdenados, notaProcurada);

if (alunoEncontrado) {
  console.log(`Aluno encontrado: ${alunoEncontrado.nome}, Nota: ${alunoEncontrado.nota}`);
} else {
  console.log("Aluno com essa nota não encontrado.");
}
