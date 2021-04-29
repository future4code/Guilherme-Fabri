/*const meuPet = {
  nome: "Ully",
  cor: "branco",
  peso: 8,
  "comida favorita": "dogitos"
}

console.log(meuPet.nome)

console.log(meuPet['peso'])

console.log(meuPet['comida favorita'])

meuPet.peso = 9

console.log(meuPet.peso)*/

/*const minhasCoisas = {
  Xícara: true,
  Green: "colo",
  Telas: "ligadas",
}

console.log(minhasCoisas)*/

const cliente = {
  nome: "fulano",
  idade: 30
}

const copiaCliente = { ...cliente}

copiaCliente.nome = "Fulana"

console.log('original', cliente.nome)
console.log('nao original', copiaCliente.nome)