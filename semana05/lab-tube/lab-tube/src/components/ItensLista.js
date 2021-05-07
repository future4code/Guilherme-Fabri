import React from "react";
import "../App.css";

export default function ItensLista(props) {
  return(
    <div className="botao-menu">
      <p>{props.itemlista}</p>
    </div>
  )
}