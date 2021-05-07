/*const pokemons = [
  { nome: "Bulbasaur", tipo: "grama", vida: 0 },
  { nome: "Bellsprout", tipo: "grama", vida: 0 },
  { nome: "Charmander", tipo: "fogo", vida: 0 },
  { nome: "Vulpix", tipo: "fogo", vida: 0 },
  { nome: "Squirtle", tipo: "água", vida: 0 },
  { nome: "Psyduck", tipo: "água", vida: 0 },
]

const soPokemonsDeGrama = pokemons.filter((pokemon, i, arr) => {
  if (pokemon.tipo === "grama" || pokemon.tipo === "fogo") {
    return true
  }
    return false
})

console.log(soPokemonsDeGrama)*/

const numeros = [1, 2, 4, 5, 8, 12, 22, 23, 33, 40, 18, 55, 96, 101]

const numeroMaioresQueDez = numeros.filter((numero) => {
  if (numero > 10) {
    return true
  }
})

const numerosPares = numeros.filter((numero) => {
  if (numero % 2 === 0) {
    return true
  }
})

console.log(numeroMaioresQueDez)
console.log(numerosPares)