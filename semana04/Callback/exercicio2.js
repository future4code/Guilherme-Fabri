/*const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 1000 },
  { nome: "Squirtle", tipo: "agua", vida: 0, vidaMaxima: 2000 },
  { nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 3000 },
]
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 0 },
  { nome: "Bellsprout", tipo: "grama", vida: 0 },
  { nome: "Charmander", tipo: "fogo", vida: 0 },
  { nome: "Vulpix", tipo: "fogo", vida: 0 },
  { nome: "Squirtle", tipo: "água", vida: 0 },
  { nome: "Psyduck", tipo: "água", vida: 0 },
]*/
/*const verificaPar = (numero, funcao2) => {
  if(numero % 3 === 0) {
    const resultado = numero / 2
    funcao2(resultado)
  }
}

const imprimeMensagem = (valor) => {
  console.log("O resultado é", valor)
}

verificaPar(20, imprimeMensagem)
verificaPar(10, imprimeMensagem)*/

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 1000 },
  { nome: "Squirtle", tipo: "agua", vida: 0, vidaMaxima: 2000 },
  { nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 3000 },
]

pokemons.forEach((pokemon, index, array) => {
  pokemon.vida = pokemon.vidaMaxima
})

console.log(pokemons)