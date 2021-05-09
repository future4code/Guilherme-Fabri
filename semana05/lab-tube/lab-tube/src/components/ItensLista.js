import React from "react";
import "../App.css";

function abriuMenu() {
  alert("O menu esta aparecendo")
}

const menux = 

export default function ItensLista(props) {
  return(
    <div className="botao-menu"
    onClick={abriuMenu}>
      <p>{props.itemlista}</p>
    </div>
  )
}