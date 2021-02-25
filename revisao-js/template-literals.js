let nome = 'João'
let idade = 26

// Mensagem usando concatenação
console.log('Meu nome é ' + nome + ' e minha idade é ' + idade + '.')

// Mensagem usando TEMPLATE LITERAL
console.log(`Meu nome é ${nome} e minha idade é ${idade}.`)
console.log(`Meu nome é ${nome.toUpperCase()} e minha idade divido por 2 é ${idade / 2}.`)
console.log(`7 vezes 6 é igual a ${7 * 6}.`)

// Tentando usar template literals com outro tipo de aspas
console.log('Meu nome é ${nome} e minha idade é ${idade}.')