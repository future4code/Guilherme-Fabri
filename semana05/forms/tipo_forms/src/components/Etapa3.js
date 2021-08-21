import React from 'react'
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class Etapa3 extends React.Component {
  render() {
    return (
      <Container>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <h4>5. Por que você não terminou um curso de graduação?</h4>
      <input type="text"></input>
      <h4>6. Você fez algum curso complementar?</h4>
      <select >
        <option>Nenhum</option>
        <option>Curso de Inglês</option>
        <option>Curso Técnico</option>
        </select>
        </Container>
    )
  }
}