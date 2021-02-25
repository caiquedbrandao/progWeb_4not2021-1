// Criando um objeto cujo valor das propriedades vem
// de variáveis

let usuario = 'joao'
let senha = 'Deus123'
let name = 'João das Couves'
let lastLogin = '2021-02-08 22:49:28'

let userInfo = {
  login: usuario,
  password: senha,
  name, // Propriedade abreviada (name: name), pode ser usada quando os nome coincidem propriedade = nome_variavel
  lastLogin // (lastLogin: lastLogin)
}

console.log(userInfo)

let info = 'Isto é um teste'
console.log(info)
console.log({info}) // exibe o valor da variável dentro de um objeto de propriedade/valor (dicionario)