/*const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 1000 },
  { nome: "Squirtle", tipo: "agua", vida: 0, vidaMaxima: 2000 },
  { nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 3000 },
]



const pokemonsSimplificados = pokemons.map((pokemon, idx, arr) => {
  return pokemon.nome // {nome: pokemon.nome, tipo: pokemon.tipo}
})

console.log(pokemons)
console.log(pokemonsSimplificados)*/

const numeros = [10, 11, 23, 54, 2, 100, 96]

const strings = numeros.map((numero, i) => {
  return `O elemento ${i} é um ${numero}`
})

console.log(strings)