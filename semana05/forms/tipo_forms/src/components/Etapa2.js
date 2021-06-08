import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class Etapa2 extends React.Component {
  render() {
    return (
      <Container>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <h4>5. Qual Curso?</h4>
        <input type="text"></input>
        <h4>6. Qual a Unidade de Ensino?</h4>
        <input type="text"></input>
      </Container>
    )
  }
}