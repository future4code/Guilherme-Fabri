//exercicio1
// Será impresso:
//a. false
//b. false
//c. true 
//e. boolean
//exercicio2
//a. undefined
//b. null
//c. 11
//d. 3
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, …]
//f. 9
//escrita de código
//exercicio1
let idade = Number(prompt('Qual a sua idade?'))
console.log('a)', idade)
let idadeMelherAmigo = Number(prompt('Qual a idade do seu melhor amigo(a)?'))
console.log('b)', idadeMelherAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeMelherAmigo);

let diferenca = idade - idadeMelherAmigo

console.log('A diferença de idade entre vocês é de', Number(idade) - Number(idadeMelherAmigo), "anos!")

//exercicio2
const numeroPar = Number(prompt('Digite um número par'))
console.log(numeroPar % 2)

//Para todos os números pares o resultado será 0
//Quando um número impart é inserido o restante será 1

//exercicio3
