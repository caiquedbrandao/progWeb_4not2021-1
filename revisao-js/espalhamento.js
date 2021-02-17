console.log(Math.min(14, 7, -3, 23, 34))  // Retorna o menor valor passado
console.log(Math.max(14, 7, -3, 23, 34))  // Retorna o maior valor passado

let numeros = [14, 7, -3, 23, 34]

// Usando espalhamento para "desmontar" o vetor
console.log(Math.min(...numeros))
console.log(Math.max(...numeros))

let maisNumeros = [4, 0, 11, ...numeros, 8, 19, 26]
console.log(maisNumeros)

// Função com parâmetro (ou argumento) de resto
function somaTudo(...nums) {
  let soma = 0
  for(let n of nums) soma += n
  return soma
}

console.log(somaTudo(12, 45, -5))
console.log(somaTudo(2, 76, -2, 41, 19, 11, 22, 30))

// Argumento convencional + argumento de resto
function calcular(oper, ...nums) {
  let res
  switch(oper) {
    case '+':
      //res = 0
      //for(let n of nums) soma += n
      res = somaTudo(...nums)
      break

    case '*':
      res = 1
      for(let n of nums) res *= n
  }
  return res
}

console.log(calcular('*', 12, 45, -5))
console.log(calcular('+', 2, 76, -2, 41, 19, 11, 22, 30))

// Como chamar a função somaTudo() para processar o vetor maisNumeros?
console.log(somaTudo(...maisNumeros))
console.log(calcular('+', ...maisNumeros))
