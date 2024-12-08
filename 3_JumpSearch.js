function buscaSalto(lista, alvo) {
  const n = lista.length;
  const salto = Math.floor(Math.sqrt(n)); // Tamanho ideal do salto
  let blocoInicio = 0;
  let blocoFim = salto;

  // Encontrar o bloco onde o alvo pode estar
  while (blocoFim < n && lista[blocoFim - 1] < alvo) {
      blocoInicio = blocoFim;
      blocoFim += salto;
      if (blocoFim > n) blocoFim = n; // Limita o índice ao final da lista
  }

  // Busca linear dentro do bloco
  for (let i = blocoInicio; i < blocoFim; i++) {
      if (lista[i] === alvo) {
          return i;
      }
  }

  return -1; // Retorna -1 se o elemento não for encontrado
}

//Jump search é eficiente para listas ordenadas e quando não temos acesso aleatório rápido (como em estruturas sequenciais ou bases de dados lineares).

//Binary search é  mais rápido para listas grandes devido à divisão pela metade em cada iteração.