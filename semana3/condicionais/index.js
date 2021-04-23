//exercicio3) pokemon/switch:

/*let pokemon = prompt('Qual o seu pokemon preferido?')

switch(pokemon.toLowerCase()) {
    case 'bulbasauro':
    console.log('Você escolheu o pokemon de Planta e Veneno')
    break
    case 'charmander':
    console.log('Você escolheu o pokemon de Fogo')
    break
    case 'squirtle':
    console.log('Você escolheu o pokemon de Água')
    break
    default:
    console.log('Escolha um pokemon inicial, Bulbasauro, Chrmander ou Squirtle!')
} */

//exercicio de leitura de código
//1) O código testa se o número inserido pelo usuário é par. Se o resto da divisão for igual a zero aparecerá no Console: Passou no teste, caso contrário: Não passou no teste.
//2) a) O código serve para dizer o falor do produto selececionado pelo usuário.
//   b) Será impresso: O preço da fruta Maçã é R$ 2.25
//   c) A mensagem que aparecerá no Console será: O preço da fruta  Pêra  é  R$  5

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   // break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)*/

//3) a) A primeira linha pede para o usuário digitar um número no prompt que será guardada numa variável.
//   b) A mensagem no Console será: Esse número passou no teste. Depois estará escrito: mensagem is not defined.
//   c) O erro que aparece no Console acontece porque a variável 'mensagem' não está definida fora do bloco quando é chamada. Por isso é dado como 'not defined'.

//Exercícios de Escrita de código

//4)

/*let idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}*/

//5)

/*const turno = prompt('Em qual turno você estuda? Digite M, V ou N!')

if (turno === 'M') {
  console.log('Bom dia!')
} else if (turno === 'V') {
  console.log('Boa tarde!')
} else if (turno === 'N') {
  console.log('Boa noite!')
}*/

//6)

/*let turno = prompt('Em qual turno você estuda? Digite M, V ou N!')

switch(turno.toUpperCase()) {
  case 'M':
    console.log('Bom dia!')
  break;
  case 'V':
    console.log('Boa tarde')
  break;
  case 'N':
    console.log('Boa noite!')
  break;
  default:
    console.log('Digite uma opção válida!')
  break;
}*/

//7) 

/*const filme = prompt('Escolha um gênero de filme!')
let preco = Number(prompt('Qual o valor da entrada do cinema?'))

if (filme === 'fantasia' && preco <= 15) {
  console.log('Bom filme!')
} else {
  console.log('Escolha outro filme! :(')
}*/