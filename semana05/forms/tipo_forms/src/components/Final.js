import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class Final extends React.Component {
  render() {
    return (
      <Container>
        <h2>O Formulário Acabou</h2>
        <h4>Muito Obrigado Por Participar! Entraremos em Contato!</h4>
        </Container>
    )
  }
}