/*const meuContainer = document.getElementById("meu-container")
console.log(meuContainer)

meuContainer.innerHTML += "<p class='blue-color'>Texto 1<p>"
meuContainer.innerHTML += "<p class='blue-color'>Texto 2<p>"
meuContainer.innerHTML += "<p class='blue-color'>Texto 3<p>"
meuContainer.innerHTML += "<p class='blue-color'>Texto 4<p>"
meuContainer.innerHTML += "<p class='blue-color'>Texto 5<p>"

for(let i = 1; i<=5; i++) {
  meuContainer.innerHTML += `<p class='blue-color'>Texto ${i}<p>`
}*/

function criarTarefa() {
  let selecao = document.getElementById("dias-semana").value
  let tarefa = document.getElementById("tarefa").value
  document.getElementById(selecao).innerHTML += "<p> - " + tarefa + "</p>"
  document.getElementById("tarefa").value = ""
  document.getElementById("dias-semana").value = "Domingo"
}