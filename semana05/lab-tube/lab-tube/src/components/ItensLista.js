import React from "react";
import "../App.css";
import styled from "styled-components";

const ContainerBotao = styled.div`
padding: 5px;
border: 2px solid red;
margin: 5px;
`

export default function ItensLista(props) {
  return(
    <ContainerBotao
      onClick={() => props.funcaoClickPainel(props.itemlista)}
    >
      <p>{props.itemlista}</p>
    </ContainerBotao>
  )
}