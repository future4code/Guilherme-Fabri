const verificaImpar = (numero, funcaoMensagem) => {
  if(numero % 2 !== 0) {
    funcaoMensagem()
  }
}

const imprimeImpar = () => {
  console.log('Sim é impar')
}

verificaImpar(21, imprimeImpar)
verificaImpar(31, imprimeImpar)
verificaImpar(17, () => {
  console.log('Sim é impar')})

  