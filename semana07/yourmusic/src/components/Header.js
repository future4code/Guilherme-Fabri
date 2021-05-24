import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
padding: 10px;
height: 100px;
justify-content: space-between;
background: blueviolet;
align-items: center;
`

const Botoes = styled.div`
display: flex;
/*width da o tamanho do container que estão os botões*/
width: 600px;
justify-content: space-between;
`



export default class Header extends React.Component {

  

  render() {
    return (
      <Container>
        <h1>YourMusic</h1>
        <Botoes>
          <button>PlayList + 1</button>
          <button>Ver Músicas</button>
          <button>teste 1</button>
          <button>teste 2</button>
        </Botoes>
      </Container>
    )
  }
}