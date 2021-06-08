import React from "react";
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class Etapa1 extends React.Component {
  render() {
    return ( 
    <Container>
      <h2>ETAPA 1 - DADOS GERAIS</h2>
      <h4>1. Qual o seu nome?</h4>
      <input type="text"></input>
      <h4>2. Qual a sua idade?</h4>
      <input type="text"></input>
      <h4>3. Qual o seu e-mail?</h4>
      <input type="text"></input>
      <h4>4. Qual a sua escolaridade?</h4>
      <select >
        <option>Ensino Médio Incompleto</option>
        <option>Ensino Médio Completo</option>
        <option>Ensino Superior Incompleto</option>
        <option>Ensino Superior Completo</option>
      </select>
    </Container>
    )
  }
}
