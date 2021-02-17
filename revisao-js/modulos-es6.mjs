// ES6 -> ECMAScript versão 6, de 2016

// Toda vez que arquivo tem export (sem default), a importação precisa
// acontecer entre chaves (desestruturação)
import { numeros, nome } from './includes/dados.mjs'

// Podemos importar só o que vamos efetivamente usar, caso o arquivo de
// origem exporte mais de um item
//import { somaVet, quadradoVet } from './includes/funcoes.mjs'
import { somaVet } from './includes/funcoes.mjs'

// Quando existe export default no arquivo de origem, a importação
// não tem chaves
import dobraVet from './includes/funcoes2.mjs'

// Usando os itens importados

console.log(somaVet(numeros))
//console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))
console.log(nome)