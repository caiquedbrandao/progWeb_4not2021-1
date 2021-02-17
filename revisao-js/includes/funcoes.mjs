// Exportar as funções para uso dentro de outro arquivo

// Export default só funciona para functions e classes
// Não funciona para constantes e variáveis
// E só pode existit um export default por arquivo
export function somaVet(vet) {
  let soma = 0
  for(let n of vet) soma += n
  return soma
}

// Cria um novo vetor com cada elemento do vetor original
// elevando ao quadrado
export function quadradoVet(vet) {
  let res = []
  for(let n of vet) res.push(n ** 2)
  return res
}