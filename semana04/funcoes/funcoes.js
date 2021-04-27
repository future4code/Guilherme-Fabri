/*function calculaArea(altura, largura) {
  const area = altura * largura
  console.log(area)
}

calculaArea(2, 3)*/




/*function somaDoisNumeros(num1, num2) {
const soma = num1 + num2
return soma
}

const resultado = somaDoisNumeros(2, 3)
const resultado2 = somaDoisNumeros(resultado, 2)
console.log(resultado2)*/

/*function imprimeArray (array) {
  for (let i = 0; i < array.length; i++) {
  console.log(array[i])
  }
  return array.length
}

const array1 = ["a", "b", "c"]
const array2 = [1, 2, 3, 4, 5]

const tamanho2 = imprimeArray[array2]
console.length("tamanho do arra 2:", tamanho2)*/

//--exercicio 1 classe

/*function imprimeOlaMundo() {
  console.log('Olá mundo!')
}

imprimeOlaMundo()*/

//--exercicio 2 classe

/*function olaPessoa(nome) {
  console.log(`Olá ${nome}`) // template string
  console.log("Olá", nome) // quando usa vírula, coloca um espaço entre as palavras
  console.log("Olá " + nome) //concatenando as strings, ele não coloca espaço automático
}

olaPessoa("Índio")
olaPessoa("Guilherme")
olaPessoa("Eva")
olaPessoa(prompt('Digite seu nome')) // pegando o nome pelo prompt */

//--exercicio 3 classe

/*function somaDoisNumeros(numero1, numero2) {
const soma = numero1 + numero2
return soma
}

const resultado = somaDoisNumeros(2,3)
console.log(resultado)
const resultado2 = somaDoisNumeros(resultado, 2)
console.log(resultado2)*/

//--exercicio 4 classe

/*function imprimeArray(array) {
  for (let i = 0; i < array.length; i++) {
  console.log(array[i])
  }
  return array.length
}

const array1 = ["a", "b", "c"]
const array2 = [1, 2, 3, 4, 5]

const tamanho1 = imprimeArray(array1)
console.log('tamanho do array1 ', tamanho1 )

const tamanho2 = imprimeArray(array2)
console.log('tamanho do array2 ', tamanho2 )*/

//1) a) Será impresso no console: 10, 50.
//b) As funções serão executadas, mas nada aparecerá no console.

//2) a) Darvas e Caio
// b) Amanda e Caio

//3) 

//4) a)

/*const nome = 'Guilherme';
const idade = 32;
const cidade = 'São Paulo';
const isStudent = 'não sou';

function imprimeInfo() {
  console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e ${isStudent} estudante`)
};

imprimeInfo();

//b)

function imprimeInfo2(nome, idade, cidade, isStudent) {
  if(isStudent) {
    isStudent = 'sou'
  } else {
    isStudent = 'não sou'
  }
  return `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e ${isStudent} estudante`
};

console.log(imprimeInfo2('Amanda', 32, 'Curitiba', true)) */

//exercício 5) a)

/*function somaNumeros(num1, num2) {
  return num1 + num2
}

console.log('A soma é igual a: ', somaNumeros(3, 5));*/

//b)

/*function comparaNumeros(num1, num2) {
  return num1 > num2
}

console.log('O primeiro número é maior: ', comparaNumeros(10, 7))*/

//c)

/*function imprimeMensagem(mensagem) {
  for(let i = 0; i < 10; i++) {
  console.log(mensagem)
  }
};

imprimeMensagem('Olá Paiva!');*/

//exercício 6)

//a) 

/*const array = [10,23,45,78,90,52,35,67,84,22];

function calculaQuantidadeNumeros(arrayDeNumeros) {
  return arrayDeNumeros.length
}

console.log('Quantidade de números no array: ', calculaQuantidadeNumeros(array))*/

//b)

/*function verificaParidade(numero) {
  let numeroEPar
  if(numero % 2 === 0) {
    numeroEPar = true;
  } else {
    numeroEPar = false
  }
  return numeroEPar
}

console.log('Numero é par: ', verificaParidade(3)) */

/*function verificaParidade(numero) {
  return numero % 2 === 0
}

console.log('Numero é par: ', verificaParidade(1))*/

//c)

function verificaParidade(numero) {
  return numero % 2 === 0
}

const array = [10,23,45,78,90,52,35,67,84,22];

function calculaNumerosPares(arrayDeNumeros) {
  let numerosPares = [];
  for(const numero of arrayDeNumeros) {
    if(verificaParidade(numero)) {
      numerosPares.push(numero)
    }
  }
  return numerosPares.length
}

console.log('Quantidade de números pares: ', calculaNumerosPares(array))

//d) 

function calculaNumerosPares(arrayDeNumeros) {
  let numerosPares = [];
  for(const numero of arrayDeNumeros) {
    if(ver) {
      numerosPares.push(numero)
    }
  }
  return numerosPares.length
}

console.log('Quantidade de números pares: ', calculaNumerosPares(array))